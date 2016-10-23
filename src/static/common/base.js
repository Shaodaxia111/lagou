'use strict';
var base = {
	//异步请求
	getJson: function(options) { //url,type,dataType,data
		var promise = new Promise(function(resolve, reject) {
			options = options || {};
			options.type = (options.type || "GET").toUpperCase();
			options.dataType = options.dataType || "json";
			var params = options.data;
			var url = options.url;
			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;
			if (options.type == 'GET' && params) {
				var args = "";
				if (typeof params == 'string') {
					args = data;
				} else if (typeof params == 'object') {
					var arr = new Array();
					for (var k in params) {
						var v = params[k];
						arr.push(k + "=" + v);
					}
					args = arr.join("&");
				}
				url += (url.indexOf('?') == -1 ? '?' : '&') + args;
				params = null;
			}
			if (options.type == 'POST' && params) {
				params = $.param(params);
			}
			xhr.open(options.type, url, true);
			if (options.type == "POST") {
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			}
			//连接 和 发送 - 第二步
			xhr.send(params);
			//接收 - 第三步 
			xhr.onreadystatechange = handler;

			function handler() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						resolve(JSON.parse(this.response)); //成功则触发resolve回调
					} else {
						reject(this); //失败则触发reject回调
					}
				}
			}
		});
		return promise;
	}
}

module.exports = base;
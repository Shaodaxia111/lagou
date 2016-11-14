'use strict';
var LinkTo = {
  onLink: function (e) {
      //统计数据
      var dataId =e.target.getAttribute('data-lg-tj-id')||"";
      var dataNo =e.target.getAttribute('data-lg-tj-no')||"";
      var dataCid =e.target.getAttribute('data-lg-tj-cid')||"idnull";
      var target = e.target.getAttribute('data-target')||"_self";
      //跳转url
      var url = e.target.getAttribute('data-url');
      //跳转至站外
      if((url.indexOf("http://")==0)||(url.indexOf("https://")==0)){
        window.open(url);
      }else{//跳转至站内
        //在此加统计代码
        if(target=="_blank"){
          var oldUrl =  window.location.href;
          var newUrl = oldUrl.split("#")[0]+"#"+url;
          window.open(newUrl);
        }else{
          document.documentElement.scrollTop = document.body.scrollTop =0; 
          this.props.history.push(url);
        }
      }
  },
};

module.exports = LinkTo;

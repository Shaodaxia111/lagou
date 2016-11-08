'use strict';

var LinkTo = {
  onLink: function (e) {
      //统计数据
      var data-id=e.target.getAttribute('data-lg-tj-id')||"";
      var data-no=e.target.getAttribute('data-lg-tj-no')||"";
      var data-cid=e.target.getAttribute('data-lg-tj-cid')||"idnull";
      //跳转url
      var url = e.target.getAttribute('data-url');
      //跳转至站外
      if((url.indexOf("http://")==0)(url.indexOf("https://")==0)){
        location.href=url;
      }else{//跳转至站内
        //在此加统计代码
        this.props.history.push(url);
      }
  },
};

module.exports = LinkTo;

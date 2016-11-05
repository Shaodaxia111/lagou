import React from 'react';
import ReactDOM from 'react-dom';
require("./index.css");
var Index  = React.createClass({
  // onhandle:function(){
  //   // browserHistory.push('/page2');
  //   this.props.history.push('/page2');
  //   // this.context.router.push('/page2')
  // },
  render:function() {
    return (
      <div className="index-content">
         <div className="index-banner">
            <div className="banner-content">
              <p className="banner-tit">拉勾企业服务·人才招聘</p>
              <ul>
                <li>行业领先的垂直互联网招聘平台</li>
                <li>1081万+的候选人才库</li>
                <li>每月简历投递量472万+</li>
              </ul>
              <button className="view-btn">查看招聘人才产品以及解决方案</button>
            </div>
         </div>
         <div className="index-tab">
            <ul>
              <li className="zhaopin on">
                <i></i>
                <span>人才招聘</span>
              </li>
              <li className="jianshe off">
                <i></i>
                <span>品牌建设</span>
              </li>
              <li className="guanli off">
                <i></i>
                <span>人力资源管理</span>
              </li>
            </ul>
         </div>
      </div>
    )
  }
})
module.exports = Index ;
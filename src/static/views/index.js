import React from 'react';
import ReactDOM from 'react-dom';
import IndexTab from '../component/indexTab';
import ServerCompany from '../component/serverCompany';
import Good from '../component/good';
require("./css/index.css");
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
         <IndexTab />
         <ServerCompany />
         <Good />
      </div>
    )
  }
})
module.exports = Index ;
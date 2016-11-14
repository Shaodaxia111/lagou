import React from 'react';
import IndexTab from '../../component/indexTab';
require("./success.css");
var bannerBg = commonPath + "img/success_banner.jpg";
var Success  = React.createClass({
  getInitialState:function(){
      return {
        bannerHeight:parseInt(document.body.clientWidth*180/1920)
      }
  },
  render:function() {
    return (
      <div className="success-content">
        <div className="success-banner">
          <img src={bannerBg} alt = '立即获得专属顾问一对一服务'/>
          <div style={{lineHeight:this.state.bannerHeight+"px"}} className="content">
            <p className="success-tit">立即获得专属顾问一对一服务</p>
          </div>
        </div>
        <div className="success-top">
            <i className="success-img"></i>
            <p className="p-tit">提交成功</p>
            <p className="c-tit">您的联系方式我们已收到，专属顾问会在三个工作日内联系您。</p>
            <p className="c-tit">了解更多，欢迎查看下方更多解决方案</p>
        </div>
        <div className="success-tab">
           <IndexTab />
        </div>
      </div>
    )
  }
})
module.exports = Success ;
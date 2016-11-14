import React from 'react';
require("./sign.css");
import TextInput from '../../component/textInput'
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
          <div style={{lineHeight:this.state.bannerHeight+"px"}} className="content-sign">
            <p className="success-tit">立即获得专属顾问一对一服务</p>
          </div>
        </div>
        <div className="signContent">
          <p className="sign-tit">
            留下您的联系信息，我们会有专业营销顾问与您联系，一对一为您详细介绍拉勾相关产品和服务，帮您更加高效的工作！
          </p>
          <div className="sign-table">
            <TextInput style={{marginTop:50}} />
          </div>
          <p className="sign-otherTypes">
          </p>
          <div className = "tips">
              <a href = "" >咨询在线客服，实时为您解答</a>
          </div>
        </div>
      </div>
    )
  }
})
module.exports = Success ;
import React from 'react';
require('./css/leftMenu.css');
var reactMixin = require('react-mixin');
var LinkTo =require("../mixins/linkto");
var itemMap = {
  "人才招聘":"rencai",
  "品牌建设":"pinpaijianshe",
  "广告":"guanggao",
  "品牌活动":"pinpaihuodong",
  "人力资源管理":"renli",
  "市场动态":"shichang",
  "按需雇佣":"anxu"
};
var stateInit = {
  rencai:{color:"#333333"},
  pinpaijianshe:{
    color:"#333333",
    display:"none",
    stauts:"off"
  },
  guanggao:{color:"#333333"},
  pinpaihuodong:{color:"#333333"},
  renli:{color:"#333333"},
  shichang:{color:"#333333"},
  anxu:{color:"#333333"},
};
class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateInit;
  }
  componentDidMount(){
    stateInit = {
      rencai:{color:"#333333"},
      pinpaijianshe:{
        color:"#333333",
        display:"none",
        stauts:"off"
      },
      guanggao:{color:"#333333"},
      pinpaihuodong:{color:"#333333"},
      renli:{color:"#333333"},
      shichang:{color:"#333333"},
      anxu:{color:"#333333"},
    }
   var openItem = this.props.onOpen;
   var itemKey = itemMap[openItem];
   stateInit[itemKey].color="#00b38a";
   if((itemKey=="pinpaijianshe")||(itemKey=="guanggao")||(itemKey=="pinpaihuodong")){
    stateInit.pinpaijianshe={
      cololr:"#00b38a",
      display:"block",
      stauts:"on"
    }
   }
   this.setState(stateInit);
  }
  onMouseOver(e){
    var mouseKey = e.target.getAttribute("data-itemKey");
    stateInit[mouseKey].color="#00b38a";
    if((mouseKey=="pinpaijianshe")||(mouseKey=="guanggao")||(mouseKey=="pinpaihuodong")){
    stateInit.pinpaijianshe={
        cololr:"#00b38a",
        display:"block",
        stauts:"on"
      }
    }
    this.setState(stateInit);
  }
  onMouseOut(e){
    var mouseKey = e.target.getAttribute("data-itemKey");
    if(mouseKey == itemMap[this.props.onOpen]){
      return ;
    }else{
      stateInit[mouseKey].color="#333333";
      if((mouseKey=="pinpaijianshe")||(mouseKey=="guanggao")||(mouseKey=="pinpaihuodong")){
        stateInit.pinpaijianshe={
          cololr:"#333333",
          display:"none",
          stauts:"off"
        }
      }
      this.setState(stateInit);
    }
  }
  render() {
    return (
        <ul {...this.props} className="leftMenu">
           <li style={{color:this.state.rencai.color}} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="rencai"
              data-url = "/talent/employ"
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull" onClick={this.onLink.bind(this)}>
              人才招聘
           </li> 
           <li style={{color:this.state.pinpaijianshe.color}}
               onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className={`p-menu ${this.state.pinpaijianshe.stauts}`} data-itemKey="pinpaijianshe">
              品牌建设
           </li> 
           <ul style={{display:this.state.pinpaijianshe.display}} className="c-menu">
               <li style={{color:this.state.guanggao.color}}  onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
                className='p-menu' data-itemKey="guanggao" 
                data-url = "/brand_mobile/index"
                data-lg-tj-id = "" 
                data-lg-tj-no = "" 
                data-lg-tj-cid = "idnull" onClick={this.onLink.bind(this)}>
                广告
            </li>
            <li style={{color:this.state.pinpaihuodong.color}}  onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
                className='p-menu' data-itemKey="pinpaihuodong"
                data-url = "/brand_activity/entrant"
                data-lg-tj-id = "" 
                data-lg-tj-no = "" 
                data-lg-tj-cid = "idnull" onClick={this.onLink.bind(this)}>
                品牌活动
            </li>
           </ul>
           <li style={{color:this.state.renli.color}}  onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="renli"
              data-url = "/renli"
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull" onClick={this.onLink.bind(this)}>
              人力资源管理
           </li> 
           <li style={{color:this.state.shichang.color}}  onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="shichang"
              data-url = "/trends"
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull" onClick={this.onLink.bind(this)}>
              市场动态
           </li>
           <li style={{color:this.state.anxu.color}}  onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="anxu"
              data-url = "/employ"
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull" onClick={this.onLink.bind(this)}>
              按需雇佣
           </li> 
        </ul>
    )
  }
}
reactMixin(LeftMenu.prototype, LinkTo);
module.exports = LeftMenu ;

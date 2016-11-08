import React from 'react';
require('./css/leftMenu.css');
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
  rencai:{
    color:"#333333"
  },
  pinpaijianshe:{
    color:"#333333",
    display:"none",
    stauts:"off"
  },
  guanggao:{
    color:"#333333"
  },
  pinpaihuodong:{
    color:"#333333"
  },
  renli:{
    color:"#333333"
  },
  shichang:{
    color:"#333333"
  },
  anxu:{
    color:"#333333"
  },
}
class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateInit;
  }
  componentDidMount(){
   var openItem = this.props.onOpen;
   var itemKey = itemMap[openItem];
    console.log(itemKey);
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
  onClick(e){
    var mouseKey = e.target.getAttribute("data-itemKey");
    console.log(e);
  }
  render() {
    return (
        <ul {...this.props} className="leftMenu">
           <li style={{color:this.state.rencai.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="rencai">
              人才招聘
           </li> 
           <li style={{color:this.state.pinpaijianshe.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className={`p-menu ${this.state.pinpaijianshe.stauts}`} data-itemKey="pinpaijianshe">
              品牌建设
           </li> 
           <ul style={{display:this.state.pinpaijianshe.display}} className="c-menu">
               <li style={{color:this.state.guanggao.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
                className='p-menu' data-itemKey="guanggao">
                广告
            </li>
            <li style={{color:this.state.pinpaihuodong.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
                className='p-menu' data-itemKey="pinpaihuodong">
                品牌活动
            </li>
           </ul>
           <li style={{color:this.state.renli.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="renli">
              人力资源管理
           </li> 
           <li style={{color:this.state.shichang.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="shichang">
              市场动态
           </li>
           <li style={{color:this.state.anxu.color}} onClick={this.onClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}
              className='p-menu' data-itemKey="anxu">
              按需雇佣
           </li> 
        </ul>
    )
  }
}
module.exports = LeftMenu ;

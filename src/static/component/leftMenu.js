import React from 'react';
require('./css/leftMenu.css');

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rencai:"#333333",
      pinpaijianshe:"#333333",
      guanggao:"#333333",
      pinpaihuodong:"#333333",
      renli:"#333333",
      shichang:"#333333",
      anxu:"#333333",
      display:'none',
      stauts:"off",
    }
  }
  componentDidMount(){
    switch(this.props.onOpen){
      case "人才招聘":
          this.setState({
            rencai:"#00b38a",
          });
        break;
      case "品牌建设":
          this.setState({
            pinpaijianshe:"#00b38a",
            display:'block',
            stauts:"on",
          });
        break;
        case "广告":
          this.setState({
            guanggao:"#00b38a",
            pinpaijianshe:"#00b38a",
            display:'block',
            stauts:"on",
          });
        break;
        case "品牌活动":
          this.setState({
            pinpaihuodong:"#00b38a",
            pinpaijianshe:"#00b38a",
            display:'block',
            stauts:"on",
          });
        break;
        case "人力资源管理":
          this.setState({
            renli:"#00b38a",
          });
        break;
        case "市场动态":
          this.setState({
            shichang:"#00b38a",
          });
        break;
        case "按需雇佣":
          this.setState({
            anxu:"#00b38a",
          });
    }
  }
  onMouseOver(item){
    switch(item){
      case "rencai":
          this.setState({
            rencai:"#00b38a",
          });
        break;
      case "pinpaijianshe":
          this.setState({
            pinpaijianshe:"#00b38a",
            display:'block',
            stauts:"on",
          });
        break;
        case "guanggao":
          this.setState({
            guanggao:"#00b38a",
             display:'block',
            stauts:"on",
          });
        break;
        case "pinpaihuodong":
          this.setState({
            pinpaihuodong:"#00b38a",
             display:'block',
            stauts:"on",
          });
        break;
        case "renli":
          this.setState({
            renli:"#00b38a",
          });
        break;
        case "shichang":
          this.setState({
            shichang:"#00b38a",
          });
        break;
        case "anxu":
          this.setState({
            anxu:"#00b38a",
          });
    }
  }
  onMouseOut(item){
      if(this.props.onOpen !="人才招聘"){
        this.setState({
          rencai:"#333333",
        });
      }
      if(this.props.onOpen != "广告"){
          this.setState({
            guanggao:"#333333",
          });
      }
      if(this.props.onOpen !="广告" && this.props.onOpen !="品牌活动" && this.props.onOpen !="品牌建设"){
        this.setState({
                pinpaijianshe:"#333333",
                display:'none',
                stauts:"off",
        });
      }
      if(this.props.onOpen !="品牌活动"){
        this.setState({
          pinpaihuodong:"#333333",
        });
      }
      if(this.props.onOpen !="人力资源管理"){
        this.setState({
                renli:"#333333",
              });
      }
      if(this.props.onOpen !="市场动态"){
        this.setState({
                shichang:"#333333",
              });
      }
      if(this.props.onOpen !="按需雇佣"){
        this.setState({
          anxu:"#333333",
        });
      }
  }
  onClick(item){
    console.log(11111);
    // alert(item);
  }
  render() {
    return (
        <ul {...this.props} className="leftMenu">
           <li onClick={this.onClick.bind(this,"rencai")}
               onMouseOver={this.onMouseOver.bind(this,"rencai")}
               onMouseOut={this.onMouseOut.bind(this,"rencai")}
            style={{color:this.state.rencai}} className='p-menu'>人才招聘</li> 
           <li onClick={this.onClick.bind(this,"pinpaijianshe")}
               onMouseOver={this.onMouseOver.bind(this,"pinpaijianshe")}
               onMouseOut={this.onMouseOut.bind(this,"pinpaijianshe")}
            style={{color:this.state.pinpaijianshe}} className={`p-menu ${this.state.stauts}`}>品牌建设</li>
           <ul style={{display:this.state.display}} className="c-menu">
             <li onClick={this.onClick.bind(this,"guanggao")}
                 onMouseOver={this.onMouseOver.bind(this,"guanggao")}
                 onMouseOut={this.onMouseOut.bind(this,"guanggao")}
              style={{color:this.state.guanggao}}>广告</li> 
             <li onClick={this.onClick.bind(this,"pinpaihuodong")} 
                 onMouseOver={this.onMouseOver.bind(this,"pinpaihuodong")} 
                 onMouseOut={this.onMouseOut.bind(this,"pinpaihuodong")} 
                style={{color:this.state.pinpaihuodong}}>品牌活动</li> 
           </ul> 
           <li onClick={this.onClick.bind(this,"renli")}
               onMouseOver={this.onMouseOver.bind(this,"renli")}
               onMouseOut={this.onMouseOut.bind(this,"renli")}
               style={{color:this.state.renli}} className='p-menu'>人力资源管理</li> 
           <li onClick={this.onClick.bind(this,"shichang")}
               onMouseOver={this.onMouseOver.bind(this,"shichang")}
               onMouseOut={this.onMouseOut.bind(this,"shichang")}
            style={{color:this.state.shichang}} className='p-menu'>市场动态</li> 
           <li onClick={this.onClick.bind(this,"anxu")} 
                onMouseOver={this.onMouseOver.bind(this,"anxu")} 
                onMouseOut={this.onMouseOut.bind(this,"anxu")} 
            style={{color:this.state.anxu}} className='p-menu'>按需雇佣</li> 
        </ul>
    )
  }
}
module.exports = LeftMenu ;

import React from 'react';
import ReactDOM from 'react-dom';
var reactMixin = require('react-mixin');
var LinkTo =require("../mixins/linkto"); 
require('../common/common.css');
import Header from './header';
import Footer from './footer';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      baoming:0,
      phone:0,
    };
  }
  onMouseOver(item){
    $("."+item).removeClass("off").addClass("on");
    if(item=="baoming"){
      this.setState({
        baoming:1,
      }); 
    }
    if(item=="phone"){
      this.setState({
        phone:1,
      }); 
    }
  }
  onMouseOut(item){
    $("."+item).removeClass("on").addClass("off");
    if(item=="baoming"){
      this.setState({
        baoming:0,
      }); 
    }
    if(item=="phone"){
      this.setState({
        phone:0,
      }); 
    }
  }
  onGoTop(){//回到顶部
    document.documentElement.scrollTop = document.body.scrollTop =0; 
  }
  render() {
    return (
      <div className='main-content'>
        {this.props.children}
        <Footer {...this.props} />
        <div className="fixed-box">
            <ul className="fixed-ul">
              <li className="baoming off" 
                data-url="/sign" 
                data-lg-tj-id="" 
                data-lg-tj-no="" 
                data-lg-tj-cid="idnull" 
                onClick={this.onLink.bind(this)}
              onMouseOver={this.onMouseOver.bind(this,'baoming')} onMouseOut={this.onMouseOut.bind(this,"baoming")}>
                <div style={{opacity:this.state.baoming}} 
                data-url="/sign" 
                data-lg-tj-id="" 
                data-lg-tj-no="" 
                data-lg-tj-cid="idnull" 
                onClick={this.onLink.bind(this)}
                className="baoming-content">专属顾问服务</div>
              </li>
              <li className="phone off" onMouseOver={this.onMouseOver.bind(this,'phone')} onMouseOut={this.onMouseOut.bind(this,'phone')}>
                <div style={{opacity:this.state.phone}}  className="phone-content">
                  <p className="phone-tit">欢迎来电咨询:</p>
                  <p className="phone-number">400-813-1117</p>
                </div>
              </li>
              <li className="gohome off"
              data-url="/index" 
              data-lg-tj-id="" 
              data-lg-tj-no="" 
              data-lg-tj-cid="idnull" 
              onClick={this.onLink.bind(this)}
              onMouseOver={this.onMouseOver.bind(this,'gohome')} onMouseOut={this.onMouseOut.bind(this,'gohome')}></li>
              <li className="gotop off" 
              onClick={this.onGoTop.bind(this)}
              onMouseOver={this.onMouseOver.bind(this,'gotop')}
              onMouseOut={this.onMouseOut.bind(this,'gotop')}>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}
reactMixin(Home.prototype, LinkTo);
module.exports = Home ;
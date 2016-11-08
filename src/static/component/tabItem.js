import React from 'react';
var reactMixin = require('react-mixin');
var LinkTo =require("../mixins/linkto");
require('./css/tabItem.css');

class TabItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity:0,
    };
  }
  onMouseOver(){
    this.setState({
      opacity:1,
    });
  }
  onMouseOut(){
     this.setState({
      opacity:0,
    });
  }
  render() {
    var index=this.props.index;
    var hoverContent = null;
    var opacity = this.state.opacity;
    if(this.props.hoverInfo){
        hoverContent = (
          <div {...this.props} style={{}} onClick={this.onLink.bind(this)} style={{opacity:opacity}} className="hover-content">
              <span {...this.props} style={{}} onClick={this.onLink.bind(this)} >{this.props.hoverInfo}</span>
          </div>
        );
    }
    return (
        <div onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} className="tabItem">
            <div className="item-content">
                <i className="icon">{this.props.title}</i>
                <p className="content">{this.props.content}</p>
                <span {...this.props} style={{}} onClick={this.onLink.bind(this)} className="go-arrow">{this.props.handle}</span>
                {hoverContent}
            </div>
        </div>
    )
  }
}
reactMixin(TabItem.prototype, LinkTo);
module.exports = TabItem ;

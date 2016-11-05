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
            <div className="banner-content"></div>
         </div>
      </div>
    )
  }
})
module.exports = Index ;
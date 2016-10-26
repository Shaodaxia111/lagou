import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

var Page1  = React.createClass({
  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.isRequired
  },
  onhandle:function(){
    // browserHistory.push('/page2');
    this.props.history.push('/page2');
    // this.context.router.push('/page2')
  },
  render:function() {
    return (
      <div>
        <span onClick={this.onhandle}>1111</span>
        <Link to="/page2">下一页</Link>
      </div>
    )
  }
})
module.exports = Page1 ;
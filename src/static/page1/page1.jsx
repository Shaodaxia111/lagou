import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<span>1111</span>
        <Link to="/page2">下一页</Link>
      </div>
    )
  }
}
module.exports = Page1 ;
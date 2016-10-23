import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<span>22222</span>
         <Link to="/page1">上一页</Link>
      </div>
    )
  }
}
module.exports = Page2 ;
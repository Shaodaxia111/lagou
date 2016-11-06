import React from 'react';
import ReactDOM from 'react-dom';
require('../common/common.css');
import Header from './header';
import Footer from './footer';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='main-content'>
        {this.props.children}
        <Footer />
        <div className="fixed-box">
            
        </div>
      </div>
    )
  }
}
module.exports = Home ;
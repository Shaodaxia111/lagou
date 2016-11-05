import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
module.exports = Home ;
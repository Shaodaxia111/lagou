import React from 'react';
import ReactDOM from 'react-dom';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<span>home</span>
        {this.props.children}
        <span>home</span>
      </div>
    )
  }
}
module.exports = Home ;
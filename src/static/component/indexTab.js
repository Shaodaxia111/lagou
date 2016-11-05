import React from 'react';
import ReactDOM from 'react-dom';
require('./css/indexTab.css');
class IndexTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="index-tab">
          <ul>
            <li className="zhaopin on">
              <i></i>
              <span>人才招聘</span>
            </li>
            <li className="jianshe off">
              <i></i>
              <span>品牌建设</span>
            </li>
            <li className="guanli off">
              <i></i>
              <span>人力资源管理</span>
            </li>
          </ul>
       </div>
    )
  }
}
module.exports = IndexTab ;
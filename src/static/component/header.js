import React from 'react';
import ReactDOM from 'react-dom';
require('./header.css');

var Header  = React.createClass({
  // onhandle:function(){
  //   // browserHistory.push('/page2');
  //   this.props.history.push('/page2');
  //   // this.context.router.push('/page2')
  // },
  render:function() {
    return (
        <div id="lg_tnav">
            <div className="inner">
              <div className="lg_tnav_l">
                <a  className="lg_logo" data-lg-tj-id="5h00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
                </a>
              </div>
              <ul className="lg_tnav_wrap">
                <li>
                  <a className="current" data-lg-tj-id="5i00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">首页</a>
                </li>
                <li>
                  <a  data-lg-tj-id="5j00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">公司</a>
                </li>
                <li>
                  <a rel="nofollow"  data-lg-tj-id="5k00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" target="_blank">一拍</a>
                </li>
                <li>
                  <a rel="nofollow" data-lg-tj-id="ic00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">言职</a>
                </li>
              </ul>
            </div>
        </div>
    )
  }
})
module.exports = Header ;
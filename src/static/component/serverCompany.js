import React from 'react';
import ReactDOM from 'react-dom';
require("./css/ServerCompany.css");
var ServerCompany  = React.createClass({
  render:function() {
    return (
    <div className="server-list">
        <div className="server-tit">
          <p className="tit-main">服务案例</p>
          <p className="tit-intro">* 部分合作伙伴，排名不分先后</p>
        </div>
        <div className="list">
            <ul>
              <li className="campany_01"></li>
              <li className="campany_02"></li>
              <li className="campany_03"></li>
              <li className="campany_04"></li>
            </ul>
            <ul>
              <li className="campany_05"></li>
              <li className="campany_06"></li>
              <li className="campany_07"></li>
              <li className="campany_07"></li>
            </ul>
            <ul>
              <li className="campany_09"></li>
              <li className="campany_10"></li>
              <li className="campany_11"></li>
              <li className="campany_12"></li>
            </ul>
            <ul>
              <li className="campany_13"></li>
              <li className="campany_14"></li>
              <li className="campany_15"></li>
              <li className="campany_16"></li>
            </ul>
            <ul>
              <li className="campany_17"></li>
              <li className="campany_18"></li>
              <li className="campany_19"></li>
              <li className="campany_20"></li>
            </ul>
            <ul>
              <li className="campany_21"></li>
              <li className="campany_22"></li>
              <li className="campany_23"></li>
              <li className="campany_24"></li>
            </ul>
        </div>
     </div>
    )
  }
})
module.exports = ServerCompany ;
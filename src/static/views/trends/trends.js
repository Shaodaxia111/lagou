import React from 'react';
require("./trends.css");
var Item  = React.createClass({
  render:function() {
    return (
      <div className="trend-item">
        <div className="item-header">
          <span className="item-title">独家出品|第一份资本寒冬下的薪资与招聘数据报告</span>
          <p className="right-set">
            <span className="item-weixin">转发微信</span>
            <span className="item-split">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="item-download">下载</span>
          </p>
        </div>
      </div>
    )
  }
})
var sourceList = [
  {
    title:"",
    content:[
      ""
    ],
    erweima:'',
    img:""
  },
  {
    title:"",
    content:[
      ""
    ],
    erweima:'',
    img:""
  },
  {
    title:"",
    content:[
      ""
    ],
    erweima:'',
    img:""
  }
];
var Trend  = React.createClass({
  render:function() {
    var TrendList = sourceList.map(function(item,index){
      return (
        <Item />
      );
    });
    return (
      <div className="trend-content">
        <div className="trend-banner">
          <div className="banner-content">
            <p className="trend-tit">拉勾企业服务·行业报告市场动态</p>
          </div>
        </div>
        <div className="trend-list">
          {TrendList}
        </div>
      </div>
    )
  }
})
module.exports = Trend ;
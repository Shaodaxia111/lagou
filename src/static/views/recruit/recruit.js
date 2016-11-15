import React from 'react';
require("./recruit.css");
var reactMixin = require('react-mixin');
var LinkTo =require("../../mixins/linkto");
var Recruit  = React.createClass({
  render:function() {
    return (
      <div className="recruit-content">
        <div className="recruit-banner">
          <div className="content-recruit">
            <p className="recruit-tit">完善企业主页</p>
            <p className="recruit-info">企业主页是展示企业风采和雇主品牌的地方，主页中完善的企业信息，能给求职者带来更高的信任感，极大提高求职者加入企业的意愿！</p>
          </div>
        </div>
          <p className="operate-tit">公司主页入口</p>
          <p className="operate-info">在拉勾简招工作台页面的左上角，点击公司名称，进入公司主页</p>
          <p className="operate-info">ps：如果公司未认证，拉勾认证的绿色标会变灰。</p>
          <div className="img-bg recruit-bg01"></div>
          <p className="operate-tit">公司主页模块组成</p>
          <p className="operate-info">公司主页由：“公司logo、公司产品、公司介绍、公司基本信息、发展历程、管理团队、公司标签、公司位置”8大模块构成；以</p>
          <p className="operate-info">下分模块介绍。</p>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>公司LOGO：</p>
          <p className="operate-info">公司最直观的品牌展示，会显示在公司主页、职位列表页、职位详情页等多个页面中，对公司品牌至关重要。</p>
          <div className="img-bg recruit-bg02"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>公司产品：</p>
          <p className="operate-info">主要介绍公司的产品，让求职者清晰知道公司的主要业务模式，便于求职者进一步了解公司。</p>
          <div className="img-bg recruit-bg03"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>公司介绍：</p>
          <p className="operate-info">此处可完善公司基本介绍，并配上图片。图片通常可以是公司的真实办公环境，公司团队成员合照、公司活动等照片。让求职者觉</p>
          <p className="operate-info">得更加亲切、真实，并容易受文字和图片的氛围感染，提升加入公司的意愿。</p>
          <div className="img-bg recruit-bg04"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>发展历程：</p>
          <p className="operate-info">展示公司的发展历程，可根据公司真实情况，将公司的一些重要大事记节点列出。如果发展历程较短，可以多体现公司团建、新产品</p>
          <p className="operate-info">上线等小事件，也是一种间接体现公司文化的方式。能够让求职者在一开始不了解公司的情况下，有多种方式更加了解公司。</p>
          <div className="img-bg recruit-bg05"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>公司基本信息：</p>
          <p className="operate-info">主要包含公司行业、融资情况、公司规模、公司地点等信息，是求职者快速了解公司概况的渠道。公司基本信息会同时在职位信</p>
          <p className="operate-info">息中展示</p>
          <div className="img-bg recruit-bg06"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>管理团队：</p>
          <p className="operate-info">可展示公司主要管理团队成员的简介和风采，若有多位成员，将轮播展示。</p>
          <div className="img-bg recruit-bg07"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>公司标签：</p>
          <p className="operate-info">可展示公司亮点、公司福利等标签。</p>
          <div className="img-bg recruit-bg08"></div>
          <p className="operate-tit" style={{height:25,marginTop:30,lineHeight:'25px'}}>公司位置：</p>
          <p className="operate-info">公司具体办公地点展示，支持设置多个办公地点。</p>
          <div className="img-bg recruit-bg09"></div>
          <div className="operate-btn">
              <button 
              data-url = "/recruit"
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull"
              onClick={this.onLink.bind(this)}
              className="setting-index">立即完善我的主页</button>
              <button 
              data-url = "/index"
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull"
              onClick={this.onLink.bind(this)}
              className="return-home">返回首页</button>
          </div>
      </div>
    )
  }
})
reactMixin(Recruit.prototype, LinkTo);
module.exports = Recruit ;
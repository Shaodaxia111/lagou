import React from 'react';
require('./css/footer.css');
var reactMixin = require('react-mixin');
var LinkTo =require("../mixins/linkto");
var Footer  = React.createClass({
  render:function() {
    return (
        <div  className="footer-content">
            <div className="inner">
              <ul className="quick-link">
                <li><p className="link-tit">关于我们</p></li>
                <li data-url = "/talent/employ"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = "" 
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>拉勾简招</a></li>
                <li data-url = "/talent/plus" 
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>拉勾+</a></li>
                <li data-url = "/talent/pai"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = "" 
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>拉勾一拍</a></li>
                <li data-url = "/talent/recommend" 
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>拉勾精准推荐</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">品牌建设</p></li>
                <li data-url = "/brand_mobile/index"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}><a>广告产品</a></li>
                <li data-url = "/brand_activity/entrant"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}><a>品牌活动</a></li>
                <li><p className="link-tit">人力资源管理</p></li>
                <li data-url = "/renli"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>拉勾云</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">解决方案</p></li>
                <li data-url = "/recruit"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>展现你的企业</a></li>
                <li data-url = "/talent/plus"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>满足你的招聘需求</a></li>
                <li data-url = "/talent/pai" 
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                ><a>对入职结果负责</a></li>
                <li data-url = "/talent/recommend"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = "" 
                    data-lg-tj-cid = "idnull"
                ><a>急聘解决方案</a></li>
                <li data-url = "/employ"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = "" 
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>按需雇佣平台</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">动态资讯</p></li>
                <li><a>市场分析</a></li>
                <li><a>资本寒冬</a></li>
                <li ><a>行业白皮书</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">帮助与支持</p></li>
                <li data-url = "/case_list" 
                    data-lg-tj-id = "" 
                    data-lg-tj-no = "" 
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>成功案例</a></li>
                <li data-url = "/cq"
                    data-lg-tj-id = "" 
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>常见问题</a></li>
                <li data-url = "/sign" 
                    data-lg-tj-id = "" 
                    data-lg-tj-no = "" 
                    data-lg-tj-cid = "idnull"
                    onClick={this.onLink.bind(this)}
                ><a>联系我们</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">联系我们</p></li>
                <li><a>电话:4006-2828-35<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="times">(9:00 -18:00)</span></a></li>
                <li><a>邮箱: gogo@lagou.com</a></li>
              </ul>
               <ul className="quick-link">
                <li><p className="link-tit">帮助与支持</p></li>
                <li className="erweima"></li>
              </ul>
            </div>
       
        </div>
    )
  }
})
reactMixin(Footer.prototype, LinkTo);
module.exports = Footer ;
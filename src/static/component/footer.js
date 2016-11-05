import React from 'react';
import ReactDOM from 'react-dom';
require('./footer.css');
var Footer  = React.createClass({
  // onhandle:function(){
  //   // browserHistory.push('/page2');
  //   this.props.history.push('/page2');
  //   // this.context.router.push('/page2')
  // },
  render:function() {
    return (
        <div className="footer-content">
            <div className="inner">
              <ul className="quick-link">
                <li><p className="link-tit">关于我们</p></li>
                <li><a>拉勾简招</a></li>
                <li><a>拉勾+</a></li>
                <li><a>拉勾一拍</a></li>
                <li><a>拉勾精准推荐</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">品牌建设</p></li>
                <li><a>广告产品</a></li>
                <li><a>品牌活动</a></li>
                <li><p className="link-tit">人力资源管理</p></li>
                <li><a>拉勾云</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">解决方案</p></li>
                <li><a>展现你的企业</a></li>
                <li><a>满足你的招聘需求</a></li>
                <li><a>对入职结果负责</a></li>
                <li><a>了解你的候选人</a></li>
                <li><a>按需雇佣平台</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">动态资讯</p></li>
                <li><a>市场分析</a></li>
                <li><a>资本寒冬</a></li>
                <li><a>行业白皮书</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">帮助与支持</p></li>
                <li><a>成功案例</a></li>
                <li><a>常见问题</a></li>
                <li><a>联系我们</a></li>
              </ul>
              <ul className="quick-link">
                <li><p className="link-tit">联系我们</p></li>
                <li><a>电话:4006-2828-35<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="times">(9:00 -18:00)</span></a></li>
                <li><a>邮箱: gogo@lagou.com</a></li>
              </ul>
            </div>
       
        </div>
    )
  }
})
module.exports = Footer ;
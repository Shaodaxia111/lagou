import React from 'react';
import reactMixin from 'react-mixin'
import LinkTo from '../../mixins/linkto'
var LeftMenu = require('../../component/leftMenu');
require("./trends.css");
var bannerBg = commonPath + "img/trend_banner.jpg";
class Item extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       opacity:0,
    }
  }
  onMouseOver(){
    this.setState({
      opacity:1,
    });
  }
  onMouseOut(){
     this.setState({
      opacity:0,
    });
  }
  render() {
    var contentList=this.props.content.map(function(item,index){
        return (
          <p key={index}>
            {item}
          </p>
        );
    });
    return (
      <div className={`trend-item ${this.props.type}`}>
        <div className="item-header">
          <span className="item-title">{this.props.title}</span>
          <p className="right-set">
            <span className="item-weixin" onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>转发微信</span>
            <span className="item-split">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="item-download" 
              data-url = {this.props.url}
              data-lg-tj-id = "" 
              data-lg-tj-no = "" 
              data-lg-tj-cid = "idnull"
              onClick={this.onLink.bind(this)}
            >查看完整报告</span>
          </p>
          <div style={{opacity:this.state.opacity}} className="erweimaBox">
            <div className="erweima-img"></div>
          </div>
        </div>
        <div className="item-content">
            <div className="content-list">
              {contentList}
            </div>
        </div>
      </div>
    )
  }
}
var sourceList = [
  {
    title:"独家出品|第一份资本寒冬下的薪资与招聘数据报告",
    content:[
      "回望2015年下半年，“资本寒冬”就已经不断在一部分人的言论里来回翻炒。",
      "可直到此时，我们仍被各方声音所干扰，不确信的来源使我们对信息缺乏准确的判断。",
      "“资本寒冬”是否已经浸入到创业公司的骨髓？程度有多深？对我们的工作又有多少影响？"
    ],
    url:"http://activity.lagou.com/topic/baogao.html",
    type:"data"
  },
  {
    title:"重磅解读|2016互联网人才薪酬报告",
    content:[
      "2016互联网行业的整体薪酬是看涨还是看跌？",
      "最近哪类职位最好招人？北上广深产品经理的市场价分别是多少？",
      "哪一类型的公司给程序员的工资更高？",
      "拉勾互联网人才薪酬报告全方位为你解答2016年互联网人才的薪资问题。"
    ],
    url:"http://mp.weixin.qq.com/s?__biz=MzAxNzEyODA2NQ==&mid=2650182913&idx=1&sn=b8babc20ce25554449fa4541b4c8e0ed&scene=1&srcid=0819CmP3WaD41CBIdIdeMx1B#wechat_redirectl",
    type:"trend-salaryData"
  },
  {
    title:"深度解析|2016互联网职场生态白皮书",
    content:[
      "人才在哪？要多少钱？什么时候跳槽？怎么能招到？我们也不知道，但是",
      "数据知道！",
      "拉勾网携手多家调研公司以及业内顶级数据分析师，倾力打造【互联网职场生态白皮书】，致力于帮你解决职场中的每一个难题，发掘最优解。没有教诲，杜绝唠叨，一切只看：这个圈子里的人，他们都怎么玩儿。"
    ],
    url:"",
    type:"trend-whiteBook"
  }
];
var Trend  = React.createClass({
  render:function() {
    var TrendList = sourceList.map(function(item,index){
      return (
        <Item key={index} {...item} />
      );
    });
    return (
      <div className="trend-content">
        <div className="trend-banner">
          <div className="content-trend">
            <p className="trend-tit">拉勾企业服务·行业报告市场动态</p>
          </div>
          <LeftMenu {...this.props} onOpen="市场动态" style={{position:'absolute',top:100,left:100}} />
        </div>
        <div className="trend-list">
          {TrendList}
        </div>
      </div>
    )
  }
})
reactMixin(Item.prototype, LinkTo);
reactMixin(Trend.prototype, LinkTo);
module.exports = Trend ;
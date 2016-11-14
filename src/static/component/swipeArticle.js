import React from 'react';
var reactMixin = require('react-mixin');
import ReactSwipe from 'react-swipe';
var LinkTo =require("../mixins/linkto"); 
require('./css/swipeArticle.css');
import classnames from 'classnames'
var mm;
class SwipeArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      "scrollItem":0,
      dataSource:[
        {
            className:"invite",
            title:"主动沟通"
        },
        {
            className:"job_publish",
            title:"职位发布无上限"
        },
        {
            className:"ranking",
            title:"排名提升"
        },
        {
            className:"senior",
            title:"高级会员服务"
        }
      ]
    }
  }
  itemMove(index){
    this.setState({
      "scrollItem":index,
    });
  }
  setSlide(index, cName){
    var $this = this;
    clearInterval(mm) 
    this.refs.reactSwipe.slide(index,400);
    this.setState({
      "scrollItem":index,
    });
    mm = setInterval(function(){
      index ++;
      if(index==4){
        index = 0;
      }
      $this.refs.reactSwipe.next();
      $this.setState({
        "scrollItem":index,
      });
    },8000)

  }
  render() {
    var curItem = this.state.scrollItem
    var itemScroll = this.state.dataSource.map((item, index) => {
      var selectStatus = (index == this.state.scrollItem)?'on':'off'
      return (
          <li key={index} onClick={this.setSlide.bind(this,index,item.className)} className={`${item.className} ${selectStatus}`}
                className = {classnames(item.className,{'active': index == curItem})}>
            <i></i>
            <span>{item.title}</span>
          </li>
      )
    });
    return (
      <div id = "shuffling" style={{overflow:'hidden',position:'relative'}}>
        <ul className = 'list-con'>
            {itemScroll}
        </ul>
        <ReactSwipe ref="reactSwipe"  swipeOptions={{continuous:true,speed: 400,auto:8000,callback:this.itemMove.bind(this)}}>
            <div className="swpie-article-item">
                <div className="describe">作为互联网HR，你还在靠电话海call找人才？你已经out啦！<br /><br />
                    Lagou+特权，轻松发现心仪人才，主动沟通获取关注，快速激活静态简历，<br /><br />
                    每天都可以主动与上百人沟通，再也无需担心简历收取量不够用~
                </div>
                <div className="img">
                    <span className="o_breathe"></span>
                    <span className="t_breathe"></span>
                    <span className="h_breathe"></span>
                    <img width="770px" src={commonPath + 'img/1_1268dd9.png'} alt="" />
                </div>
            </div>
            <div className="swpie-article-item">
                <div className="describe">职位发布还要限制数量？<br /><br />
                    我们可是互联网公司，你是有多低估我们的扩张能力！<br /><br />
                    Lagou+特权，职位发布无上限，发到爽，千万不要手软哟～</div>
                <div className="img">
                    <span className="th_breathe"></span>
                    <span className="f_breathe"></span>
                    <img src={commonPath + 'img/2_dd62716.png'} alt="" />
                </div>
                <div className="txt">海量职位免费发布，大幅降低企业招聘成本</div>
            </div>
            <div className="swpie-article-item">
                <div className="describe">发布的职位被无情淹没，苦恼么？提升职位排名权重需要单独购买置顶？<br /><br />
                    谁定的规矩？一切不为用户考虑的服务都是耍流氓。<br /><br />
                    Lagou+特权，直观提升职位排名权重，让子弹多飞一会～</div>
                <div className="img">
                <span className="five_breathe"></span>
                <span className="six_breathe"></span>
                <img src={commonPath + 'img/3_ee0c8e0.jpg'} alt="" />
                </div>
                <div className="txt">职位排名权重提升，极大提升企业职位关注度</div>
            </div>
            <div className="swpie-article-item">
                <div className="describe">可能是迄今为止最灵活的招聘功能。<br /><br />
                    支持集团帐户对子帐户的全面管理，实时知晓各帐户所辖岗位招聘进度，邀约额度可拆分。<br /><br />
                    Lagou+特权，想怎么玩就怎么玩！</div>
                <div className="img">
                    <span className="sev_breathe"></span>
                    <img src={commonPath + 'img/4_1aee789.jpg'} alt="" />
                </div>
                <div className="txt">VIP管理员帐户资格，全面管理企业招聘候选人</div>
            </div>
        </ReactSwipe>
       
      </div>
    )
  }
}
reactMixin(SwipeArticle.prototype, LinkTo);
module.exports = SwipeArticle ;
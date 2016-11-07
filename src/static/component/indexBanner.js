import React from 'react';
import ReactSwipe from 'react-swipe';
require('./css/indexBanner.css');
var mm;
var dataSource = [
    {
      className:"zhaopin",
      title:"人才招聘"
    },
    {
      className:"jianshe",
      title:"品牌建设"
    },
    {
      className:"guanli",
      title:"人力资源管理"
    }
]
class IndexBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      "scrollItem":0,
    }
  }
  itemMove(index){
    this.setState({
      "scrollItem":index,
    });
  }
  setSlide(index){
    var $this = this;
    clearInterval(mm) 
    this.refs.reactSwipe.slide(index,400);
    this.setState({
      "scrollItem":index,
    });
    mm = setInterval(function(){
      index ++;
      if(index==3){
        index = 0;
      }
      $this.refs.reactSwipe.next();
      $this.setState({
        "scrollItem":index,
      });
    },10000)

  }
  render() {
    var itemScroll = dataSource.map((item, index) => {
      var selectStatus = (index == this.state.scrollItem)?'on':'off'
      return (
          <li onClick={this.setSlide.bind(this,index)} className={`${item.className} ${selectStatus}`}>
            <i></i>
            <span>{item.title}</span>
          </li>
      )
    });
    return (
      <div className='banner' style={{overflow:'hidden',position:'relative'}}>
      <ReactSwipe ref="reactSwipe" swipeOptions={{continuous:true,speed: 400,auto:10000,callback:this.itemMove.bind(this)}}>
        <div className="index-banner banner01">
            <div className="banner-content">
              <p className="banner-tit">拉勾企业服务·人才招聘</p>
              <ul>
                <li>行业领先的垂直互联网招聘平台</li>
                <li>1081万+的候选人才库</li>
                <li>每月简历投递量472万+</li>
              </ul>
              <button className="view-btn">查看招聘人才产品以及解决方案</button>
            </div>
         </div>
         <div className="index-banner banner02">
            <div className="banner-content">
              <p className="banner-tit">拉勾企业服务·品牌建设</p>
              <ul>
                <li>专业团队策划完善的品牌建设和品牌推广方案</li>
                <li>1081万+让人才切身体会企业的品牌情愫</li>
                <li>让企业更好的树立品牌威信</li>
              </ul>
              <button className="view-btn">查看品牌建设解决方案</button>
            </div>
         </div>
         <div className="index-banner banner03">
            <div className="banner-content">
              <p className="banner-tit">拉勾企业服务·人力资源管理</p>
              <ul>
                <li>成长型企业人力资源管理SaaS平台</li>
                <li>一站解决企业招聘管理、人事管理、员工自助管理</li>
                <li>帮助企业更高效的发展</li>
              </ul>
              <button className="view-btn">查看人力资源管理SaaS产品&解决方案</button>
            </div>
         </div>
      </ReactSwipe>
         <div className="index-tab">
            <ul>
             {itemScroll}
            </ul>
          </div>
      </div>
    )
  }
}
module.exports = IndexBanner ;
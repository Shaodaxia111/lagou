import React from 'react';
var TabItem = require('./tabItem');
require('./css/indexTab.css');
var dataList = [
        {
          "title":"展示你的企业",
          "hoverInfo":"创建完善的企业主页让候选人快速了解企业文化",
          "content":"创建自己的企业招聘页面",
          "handle":"点击开始"
        },
        {
          "title":"满足你的招聘需求",
          "hoverInfo":"职位无限发布，排名权重高，海量人才直接邀，VIP管理系统-招聘从未如此简单高效！",
          "content":"海量邀请合适人才投递",
          "handle":"立即使用"
        },
        {
          "title":"展示你的企业",
          "hoverInfo":"精准匹配人才，快速解决急招难题，招聘更高效",
          "content":"快速获取高质量高活跃的简历",
          "handle":"点击开始"
        },
        {
          "title":"对入职结果负责",
          "hoverInfo":"签约高端人才，快速发offer不让任何一个优秀的小伙伴落网！",
          "content":"签约高端人才快速发offer",
          "handle":"点击邀约"
        },
        {
          "title":"行业动态一目了然",
          "hoverInfo":"专业分析招聘行业动态趋势，告别被动小绵羊时代！",
          "content":"招聘行业动态趋势分析",
          "handle":"免费下载"
        },
        {
          "title":"按需雇佣平台",
          "hoverInfo":"资深人才短缺，人员流动性大不如让专业的优秀人才成为项目制员工",
          "content":"让BAT级优质人才成为你的员工",
          "handle":"点击了解"
        }
    ]

class IndexTab extends React.Component {
  constructor(props) {
    super(props);
  }
  onHandle(id){
    alert(id);
  }
  render() {
    var $this = this;
    var itemList = dataList.map(function(item,index) {
      return (
          <div key={index} className="item">
            <TabItem  index {...item} onClick={$this.onHandle.bind(this,2222)} />
          </div> 
      );
    });
    return (
      <div className="use-content">
        <p className="use-tit">更多方案解决你所需</p>
        <div className="use-info">
          {itemList}
        </div>
      </div>
    )
  }
}
module.exports = IndexTab ;
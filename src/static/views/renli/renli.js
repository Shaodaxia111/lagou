import React from 'react';
var LeftMenu = require('../../component/leftMenu');
import TextInput from '../../component/textInput'
require("./renli.css");
var dataSource = [
  {
    imgClss:"zhaopin",
    ptit:"招聘管理模块",
    info:"拉勾云为企业免费提供的招聘系统（ATS），"+
         "帮助企业更高效地管理招聘渠道及人才库，跟进候选人，"+
         "优化招聘流程，用技术手段驱动HR及用人部门的协同，提升招聘效率"+
         "的同时，让企业招聘到更合适的人才。",
  },
  {
    imgClss:"renshi",
    ptit:"拉勾云人事管理模块",
    info:"通过专业、系统的设计，为企业管理者和HR提供包括员"+
         "工档案管理、考勤管理、薪酬管理、社保管理、"+
         "绩效管理、移动审批、智能分析等功能，让企业管理者更轻松的管理公司。",
  },{
    imgClss:"yuangong",
    ptit:"拉勾云员工自助平台",
    info:"除了给企业员工提供移动考勤、移动审批、工资条查询功能，"+
         "还站在人才发展的角度为企业员工提供OKR、工作日历等"+
         "工具，帮助企业员工更好的发展。",
  },{
    imgClss:"qiye",
    ptit:"拉勾云企业服务平台",
    info:"基于大数据，让企业可以快速获得精准、优质的"+
         "供应商服务及资源：同时为供应商对接更多目标企业，帮助供需双方更快更好的发展。",
  }
];
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="renli-item">
          <i className={`item-img ${this.props.imgClss}`}></i>
          <p className="item-ptit">{this.props.ptit}</p>
          <p className="item-info">
              {this.props.info}
          </p>
      </li>
    )
  }
}

var Renli  = React.createClass({
  render:function() {
    var ListArray = dataSource.map(function(item,index){
      return(
        <ListItem {...item} key={index} />
      );
    });
    return (
      <div className="renli-content">
        <div className="renli-banner">
          <div className="renli-content">
            <p className="renli-tit">拉勾企业服务·人力资源管理</p>
          </div>
          <LeftMenu {...this.props} onOpen="人力资源管理" style={{position:'absolute',top:100,left:100}} />
        </div>
        <div className="renli-modal">
          <div className="list-box">
            <p className="list-ptit">拉勾云-创业公司的第一个人事管理平台</p>
            <p className="list-ctit">
                为企业提供包括招聘管理、人事全模块管理、员工自助及企业服务平台在内的人事管理SaaS平台，帮助<br/>企业释放更高的生产力。
            </p>
            <ul className="renli-list">
              {ListArray}
            </ul>
          </div>
        </div>
        <div className="baoming-box">
          <p className="baoming-ptit">
              立即获得专属顾问一对一服务
          </p>
          <p className="baoming-ctit">
             留下您的联系信息，我们会有专业营销顾问与您联系，一对一为您详细介绍拉勾相关产品和服务，帮您更加高效的工作！ 
          </p>
          <TextInput style={{background:"#f5f6f8",marginTop:70}} />
        </div>
      </div>
    )
  }
})
module.exports = Renli ;
import React from 'react';
var LeftMenu = require('../../component/leftMenu');
import TextInput from '../../component/textInput'
require("./renli.css");
var dataSource = [
  {
    imgClss:"zhaopin",
    ptit:"招聘管理模块",
    ctit:"免费好用的一站式招聘系统",
    info:"拉勾云包含招聘管理功能，为企业提供一站式招聘协作工具——拉勾简招（ATS），"+
         "帮助企业更高效地管理招聘渠道及人才库，发布职位与跟进候选人，优化招聘流程，"+
         "用产品驱动HR及用人部门协同招聘，让企业招聘到最合适的人才。"+
         "拉勾简招还包含背景调查的功能，帮助企业找到优秀人才的同时降低用人风险。",
  },
  {
    imgClss:"renshi",
    ptit:"人事管理模块",
    ctit:"最懂HR的人事管理系统",
    info:"拉勾云包含人事管理功能，通过专业、系统的产"+
         "品设计，为企业管理者和HR提供包括薪酬计算、"+
         "考勤、绩效管理、移动审批、人才管理、人事报"+
         "表等人力资源管理功能，帮助企业更高效、健康的运转。",
  },{
    imgClss:"yuangong",
    ptit:"员工自助管理模块",
    ctit:"最简单高效的员工自助系统",
    info:"拉勾云包含员工自助管理功能，为企业员工提"+
         "供极易操作的报销、考勤、审批追踪、工资查"+
         "询等功能，站在人才发展的角度还为企业员工"+
         "提供OKR、文件共享、云记录等小工具，帮助"+
         "企业员工告别一切繁琐，把时间还给更重要的工作。",
  },{
    imgClss:"qiye",
    ptit:"企业服务平台",
    ctit:"精准、优质的企业服务供需平台",
    info:"基于大数据，让成长型企业可以快速获得精准、"+
         "优质的供应商服务及资源：同时为供应商对接更"+
         "多目标企业，帮助供需双方更快更好的发展。",
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
          <p className="item-ctit">{this.props.ctit}</p>
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
            <p className="list-ptit">拉勾云——成长型企业资源管理SaaS平台</p>
            <p className="list-ctit">
                拉勾云致力于为成长型企业管理者提供人力资源管理SaaS平台。通
                过科学严密的产品设计，为企业不同角色提供包括招聘管理、人
                事管理、员工自助管理及企业服务平台在内的不同模块，助力企业内部管理，帮助企业更好的发展。
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
             留下您的联系信息，我们会有专业营销顾问与您联系，一对一为您详细介绍拉勾相关产品和服务，帮您更高效的招聘人才！ 
          </p>
        </div>
      </div>
    )
  }
})
module.exports = Renli ;
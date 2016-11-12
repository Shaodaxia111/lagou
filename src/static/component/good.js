import React from 'react';
import ReactDOM from 'react-dom';
require('./css/good.css');
class Good extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="index-good">
        <p className="good-tit">为什么是拉勾网</p> 
        <ul className="good-list">
          <li className="first item">
              <p className="item-tit">愿景</p>
              <ul>
                <li>拉勾不只是一家招聘网站</li>
                <li>更致力于连接人与企业</li>
                <li>提供更多元的服务，</li>
                <li>以实现“帮助企业和互联网人更好</li>
                <li>的成长”的愿景</li>
              </ul>
          </li>
          <li className="second item">
              <p className="item-tit">我们</p>
              <ul>
                <li>1081万+人才的职业机会平台</li>
                <li>已服务140437家企业</li>
                <li>每月简历投递量达 472万+</li>
                <li>每8份简历即可成功邀请</li>
                <li>1名候选人面试</li>
              </ul>
          </li>
          <li className="third item">
              <p className="item-tit">企业服务升级</p>
              <ul>
                <li>1小时免费轻松入驻拉勾网</li>
                <li>免费发布企业职位</li>
                <li>免费拥有专属招聘系统</li>
                <li>享受最好用的人力资源管理系统</li>
              </ul>
          </li>
          <li className="fourth item">
              <p className="item-tit">他们说：</p>
              <ul>
                <li>京东： 越来越多的同行已经</li>
                <li>加入到拉勾网的队伍里，希</li>
                <li>望以后我们也能通过拉勾网</li>
                <li>的平台吸引更多优质的人</li>
                <li>才，相信未来拉勾网会带给</li>
                <li>我们更多的惊喜。</li>
              </ul>
          </li>
        </ul>  
      </div>
    )
  }
}
module.exports = Good ;
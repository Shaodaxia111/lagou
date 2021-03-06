import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'
import LeftMenu from '../../component/leftMenu'
import reactMixin from 'react-mixin'
import LinkTo from '../../mixins/linkto'

require("./employ.css");
// 按需雇佣
class Employ extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "大鲲——拉勾旗下按需雇佣平台",
            content: [
                <div className="paragraph just-bold">BAT专家级人才，按项目雇佣</div>
                , <br />
                , "大鲲致力成为中国最大的按需雇佣平台，为你精准连接有契约精神的专业人才。"
                , <br />
                , "所有专家均经过平台严格审核，拥有3年以上工作经验，并至少拥有3个以上独立运作项目案例，及知名公司背景。"
                , <br />
                , "目前开放的领域有技术、设计、市场、运营、产品，平台全程提供专业化、个性化的服务和严格完善的监管，高效直接地让优秀专家和优质项目连接。"
                , <br />
                , "在大鲲，企业可自主制定项目交付方式，充分满足不同发展阶段多样化任务需求，同时极大提升人力投入产出效能。"
                , <br />
                , "同时，大鲲帮助超过1000万的专业人士探索职业生涯的无限可能，同时将知识与经验转化为直接收益，让“自由职业”成为一种生活方式。"
            ]
        }
    }
    handleClick (ele) {

    }

    render() {
        return ( 
            < div >
                <Banner backgroundImage = {commonPath + 'img/banner-employ.jpg'} title = '拉勾企业服务·大鲲' />
                <LeftMenu onOpen="按需雇佣" style={{position:'absolute',top:100,left:100}} {...this.props}/>
                <div className = 'employ-box'>
                    <ArticleBox article = {this.state} />
                    <div className = 'btn-go-more'
                    data-url = "https://pro.lagou.com/enterprise.html"
                    data-lg-tj-id = ""
                    data-lg-tj-no = ""
                    data-lg-tj-cid = "idnull"
                    onClick = {this.onLink.bind(this)}>查看更多</div>
                </div>
                
            < /div>
        )
    }
}
reactMixin(Employ.prototype, LinkTo);
module.exports = Employ
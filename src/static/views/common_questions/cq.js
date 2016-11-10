import React from 'react'
import ReactDOM from 'react-dom'

import Banner from '../../component/commonBanner'

import reactMixin from 'react-mixin'
import LinkTo from '../../mixins/linkto'

require("./cq.css");
// 常见问题
class CommonQuestions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: {
                item1: {
                    text: "人才招聘问题招聘",
                    onHover: false,
                    "dataUrl": "https://www.lagou.com/qa.html?t=1",
                    "dataId": "" ,
                    "dataNo": "" ,
                    "dataCid": "idnull"
                },
                item2: {
                    text: "简招常见问题",
                    onHover: false,
                    "dataUrl": "https://lagou.kf5.com/hc/",
                    "dataId": "" ,
                    "dataNo": "" ,
                    "dataCid": "idnull"
                },
                item4: {
                    text: "大鲲常见问题",
                    onHover: false,
                    "dataUrl": "https://pro.lagou.com/faq.html",
                    "dataId": "" ,
                    "dataNo": "" ,
                    "dataCid": "idnull"
                }
            }
        }
    }

    handleClick (ele) {

    }

    render() {
        let questions = this.state.questions
        let questionListDom = []
        let _this = this
        for (let ele in questions) {
            let item = questions[ele]
            questionListDom.push(<li className = "question-item" data-url = {item.url}
                data-url = { item.dataUrl }
                data-lg-tj-id = { item.dataId }
                data-lg-tj-no = { item.dataNo }
                data-lg-tj-cid = { item.dataCid }
                onClick = {_this.onLink.bind(_this)} key = {ele}>
                    {item.text}
                </li>
            )
        }

        return ( 
            < div {...this.props} >
                <Banner backgroundImage = '/src/img/banner-common-question.jpg' title = '常见问题' />
                <div className = 'common-question-box'>
                    <ul className = "question-box">
                        {questionListDom}
                    </ul>
                    <div className = "customer-tips">
                        <a href = "" >咨询在线客服，实时为您解答</a>
                    </div>
                </div>
            < /div>
        )
    }
}
reactMixin(CommonQuestions.prototype, LinkTo);

module.exports = CommonQuestions
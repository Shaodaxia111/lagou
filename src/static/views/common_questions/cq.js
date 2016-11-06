import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'

require("./cq.css");
class CommonQuestions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: {
                item1: {
                    text: "人才招聘问题招聘",
                    url: "",
                    onHover: false,
                },
                item2: {
                    text: "简招常见问题",
                    url: "",
                    onHover: false,
                },
                item3: {
                    text: "人拉钩云常见问题",
                    url: "",
                    onHover: false,
                },
                item4: {
                    text: "大鲲常见问题",
                    url: "",
                    onHover: false,
                },
                item5: {
                    text: "拉钩+常见问题",
                    url: "",
                    onHover: false,
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
                onClick = {_this.handleClick.bind(this, ele.url)} key = {ele}>
                    {item.text}
                </li>
            )
        }

        return ( 
            < div >
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
module.exports = CommonQuestions
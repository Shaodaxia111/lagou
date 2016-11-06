import React from 'react';
import ReactDOM from 'react-dom';

require("./cq.css");

var CommonQuestions = React.createClass({

    render: function() {
        return ( 
            < div >
                <header className = "banner-cq">常见问题</header>
                <div className = 'middle-box'>
                    <ul className = "question-box">
                        <li className = "question-item" data-url = "">人才招聘问题招聘</li>
                        <li className = "question-item" data-url = "">简招常见问题</li>
                        <li className = "question-item green" data-url = "">人拉钩云常见问题</li>
                        <li className = "question-item" data-url = "">大鲲常见问题</li>
                        <li className = "question-item" data-url = "">拉钩+常见问题</li>
                    </ul>
                    <div className = "customer-tips">
                        <a href = "" >咨询在线客服，实时为您解答</a>
                    </div>
                </div>
            < /div>
        )
    }
})
module.exports = CommonQuestions;
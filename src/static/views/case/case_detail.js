import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'

require("./case_detail.css");
// 成功案例详情
class SuccessDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "U-Cloud X 拉勾：HelloWorld 我是传奇",
            content: [
                "我们希望未来的你是这样的强烈的创业情怀，最好有过餐饮客服中心的经验，可以适应快速野蛮的成长环境；主导过呼叫中心系统搭建、团队搭建；3年以上呼叫中心的管理经验；沟通协调能力、执行力、推动力超一流；善于激励团队成员，团队管理能力非常非常强；熟练使用办公软件，能适应倒班倒休；负责客服中心的系统搭建；客服中心团队搭建过程中的招聘、培训都可以独立主导完成；以用户为导向制定客服中心的服务标准建立客户资料，并保证资料完整、信息准确，保密性强；站在用户角度，优化业务流程，缩短用户问题的流转时间，提升一次性解决率，确保用户满意度；"
                , "/src/img/case-detail-pic1.jpg"
                , "我们希望未来的你是这样的强烈的创业情怀，最好有过餐饮客服中心的经验，可以适应快速野蛮的成长环境；主导过呼叫中心系统搭建、团队搭建；3年以上呼叫中心的管理经验；沟通协调能力、执行力、推动力超一流；善于激励团队成员，团队管理能力非常非常强；熟练使用办公软件，能适应倒班倒休；负责客服中心的系统搭建；客服中心团队搭建过程中的招聘、培训都可以独立主导完成；以用户为导向制定客服中心的服务标准建立客户资料，并保证资料完整、信息准确，保密性强；站在用户角度，优化业务流程，缩短用户问题的流转时间，提升一次性解决率，确保用户满意度；"
                , "/src/img/case-detail-pic1.jpg"
                , "我们希望未来的你是这样的强烈的创业情怀，最好有过餐饮客服中心的经验，可以适应快速野蛮的成长环境；主导过呼叫中心系统搭建、团队搭建；3年以上呼叫中心的管理经验；沟通协调能力、执行力、推动力超一流；善于激励团队成员，团队管理能力非常非常强；熟练使用办公软件，能适应倒班倒休；负责客服中心的系统搭建；客服中心团队搭建过程中的招聘、培训都可以独立主导完成；以用户为导向制定客服中心的服务标准建立客户资料，并保证资料完整、信息准确，保密性强；站在用户角度，优化业务流程，缩短用户问题的流转时间，提升一次性解决率，确保用户满意度；"
            ]
        }
    }
    handleClick (ele) {

    }

    render() {
        return ( 
            < div >
                <Banner backgroundImage = '/src/img/banner-case.jpg' title = '成功案例' />
                <div className = 'case-detail-box'>
                    <ArticleBox article = { this.state } />
                    <div className = 'btn-go-index'>返回首页</div>
                </div>
            < /div>
        )
    }
}
module.exports = SuccessDetail
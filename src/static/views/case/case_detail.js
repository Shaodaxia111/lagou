import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'
import reactMixin from 'react-mixin'
import LinkTo from '../../mixins/linkto'

require("./case_detail.css");
// 成功案例详情
class SuccessDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 理想之上
            // dream: {
            //     title: "U-Cloud X 拉勾：HelloWorld 我是传奇",
            //     content: [
            //         "我们希望未来的你是这样的强烈的创业情怀，最好有过餐饮客服中心的经验，可以适应快速野蛮的成长环境；主导过呼叫中心系统搭建、团队搭建；3年以上呼叫中心的管理经验；沟通协调能力、执行力、推动力超一流；善于激励团队成员，团队管理能力非常非常强；熟练使用办公软件，能适应倒班倒休；负责客服中心的系统搭建；客服中心团队搭建过程中的招聘、培训都可以独立主导完成；以用户为导向制定客服中心的服务标准建立客户资料，并保证资料完整、信息准确，保密性强；站在用户角度，优化业务流程，缩短用户问题的流转时间，提升一次性解决率，确保用户满意度；"
            //         , commonPath + "img/case-detail-pic1.jpg"
            //         , "我们希望未来的你是这样的强烈的创业情怀，最好有过餐饮客服中心的经验，可以适应快速野蛮的成长环境；主导过呼叫中心系统搭建、团队搭建；3年以上呼叫中心的管理经验；沟通协调能力、执行力、推动力超一流；善于激励团队成员，团队管理能力非常非常强；熟练使用办公软件，能适应倒班倒休；负责客服中心的系统搭建；客服中心团队搭建过程中的招聘、培训都可以独立主导完成；以用户为导向制定客服中心的服务标准建立客户资料，并保证资料完整、信息准确，保密性强；站在用户角度，优化业务流程，缩短用户问题的流转时间，提升一次性解决率，确保用户满意度；"
            //         , commonPath + "img/case-detail-pic1.jpg"
            //         , "我们希望未来的你是这样的强烈的创业情怀，最好有过餐饮客服中心的经验，可以适应快速野蛮的成长环境；主导过呼叫中心系统搭建、团队搭建；3年以上呼叫中心的管理经验；沟通协调能力、执行力、推动力超一流；善于激励团队成员，团队管理能力非常非常强；熟练使用办公软件，能适应倒班倒休；负责客服中心的系统搭建；客服中心团队搭建过程中的招聘、培训都可以独立主导完成；以用户为导向制定客服中心的服务标准建立客户资料，并保证资料完整、信息准确，保密性强；站在用户角度，优化业务流程，缩短用户问题的流转时间，提升一次性解决率，确保用户满意度；"
            //     ]
            // },

            // 全民升职记
            promotion: {
                title: "U-Cloud X 拉勾：HelloWorld 我是传奇",
                content: [
                    commonPath + "img/case-detail-pro5.png"
                    , "真格基金创始人徐小平，果壳网CEO姬十三等业界大佬拍摄视频为拉勾助阵，互联网行业内逾百位CEO专门拍摄拉勾手势的海报，表达对这次活动的支持，并深入一线与求职者交流，以期在招聘行业旺季吸引优秀人才加盟。"
                ]
            },
            // 梦想者集市
            market: {
                title: "梦想者集市",
                content: [
                    commonPath + "img/case-detail-dre1.png"
                    , "3月19日，由拉勾网主办的“梦想者市集·北京站”在中关村创业大街圆满举行，成为街头巷尾热议的话题。本次活动共吸引50多家一线互联网公司参与展示，吸引超过6000余人参加，活动当天，多种新玩法刷新了互联网圈的眼球。"
                    , commonPath + "img/case-detail-dre2.jpg"
                    , "“寻找新的世界 遇见新的自己”是本次活动的主题。拉勾网联合在行、36氪及3W咖啡，携手打造帮助互联网人职业规划的“拉勾小屋”，专为职场人答疑解惑的“在行专区”，以及服务创业者的“融资驿站”等，现场坐镇18位专家为互联网从业者一对一制定解决方案，受到普遍欢迎。"
                    , commonPath + "img/case-detail-dre3.jpg"
                    , "在梦想plus主题演讲区，拉勾网CMO鲍艾乐、在行联合创始人曾进、住百家COO邹鑫、天使汇联合创始人朱成龙等嘉宾为现场观众进行了六场主题演讲，讲述了他们的对于“成长”的理解，为现场观众提供了一些思考。"
                    , commonPath + "img/case-detail-dre4.jpg"
                    , "当天最受欢迎的是设置在创业大街主干道上的神秘装置“超级售卖机”，报名参加活动的观众只要将入口处派发的抽奖券放进投票口，按下启动装置的按钮，就会得到取物口随机送出的锤子手机、布丁机器人、蓝牙音箱、拉勾T恤等礼品，惊喜加神秘的设计，吸引了上千人排队参加。"
                    , "不仅如此，在场展示企业还为观众带来了很多新体验。在硬蛋空间的智能硬件展上，观众们现场体验了乐动平衡车、9DVR虚拟体验蛋、颜值测试仪等高科技智能玩具；月亮盒子为排气长队的观众每人送上一套高端商务照拍摄机会。"
                    , commonPath + "img/case-detail-dre5.jpg"
                    , "本次“梦想者市集”已是拉勾举办的第二届，活动当晚即在朋友圈形成刷屏。去年举办的活动在行业内形成了巨大的声量传播，而今年更加贴近互联网行业生态，为互联网人的职业成长提供了更多多元化的服务。"
                    , " “梦想者市集”是一个全国巡回活动。北京站之后，拉勾会走进上海、广州、深圳、成都、杭州、厦门，为全国的互联网企业提供更多的展示平台，帮助全国的互联网行业人士获得良好的发展。"
                ]
            },
            // 风暴周
            week: {
                title: "野心时代之互联网招聘风暴周",
                content: [
                    "2015拉勾网年度招聘活动，定位年底求职大军；以全新的游戏型特色模块，展示互联网实力版图；吸引流量的同时，满足企业招聘需求！"
                    , commonPath + "img/case-detail-dre5.jpg"
                ]
            },
            // 跳槽月
            month: {
                title: "全民跳槽月",
                content: [
                    "2015拉勾网年度招聘活动，定位年底求职大军；以全新的游戏型特色模块，展示互联网实力版图；吸引流量的同时，满足企业招聘需求！"
                    , commonPath + "img/case-detail-mou1.png"
                    , commonPath + "img/case-detail-mou2.png"
                    , commonPath + "img/case-detail-mou3.png"
                    , commonPath + "img/case-detail-mou4.png"
                    , commonPath + "img/case-detail-mou5.png"
                    , commonPath + "img/case-detail-mou5.png"
                    , commonPath + "img/case-detail-mou6.png"
                    , commonPath + "img/case-detail-mou7.png"
                    , commonPath + "img/case-detail-mou8.png"
                    , commonPath + "img/case-detail-mou9.png"
                ]
            }
        }
    }
    handleClick (ele) {

    }

    render() {
        let type = this.props.params.type
        let article = this.state[type]
        return ( 
            < div >
                <Banner backgroundImage = {commonPath + 'img/banner-case.jpg'} title = '成功案例' />
                <div className = 'case-detail-box'>
                    <ArticleBox article = { article } />
                    <div className = 'btn-go-index'
                        data-url = "/case_list"
                        data-lg-tj-id = ""
                        data-lg-tj-no = ""
                        data-lg-tj-cid = "idnull"
                        onClick = {this.onLink.bind(this)}>返回案例列表页</div>
                </div>
            < /div>
        )
    }
}
reactMixin(SuccessDetail.prototype, LinkTo);
module.exports = SuccessDetail
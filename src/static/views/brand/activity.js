import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'

require("./activity.css");
// 按需雇佣
class Employ extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 往期活动
            activity: {
                articles: [
                    {
                        title: "理想之上--有料、有胆、有梦",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-activity1.jpg"
                            ,"拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。"
                            , "巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市"
                            , "举办日期：每年5月"
                        ]
                    },
                    {
                        title: "理想之上--有料、有胆、有梦",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-activity1.jpg"
                            ,"拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。"
                            , "巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市"
                            , "举办日期：每年5月"
                        ]
                    },
                    {
                        title: "理想之上--有料、有胆、有梦",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-activity1.jpg"
                            ,"拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。"
                            , "巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市"
                            , "举办日期：每年5月"
                        ]
                    },
                    {
                        title: "理想之上--有料、有胆、有梦",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-activity1.jpg"
                            ,"拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。"
                            , "巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市"
                            , "举办日期：每年5月"
                        ]
                    },

                ]
            },
            // 梦想合伙人
            partner: {
                articles: [
                    {
                        title: "梦想合伙人---寻找并肩作战的兄弟",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-partner1.jpg"
                            , "根据初创型公司的招聘痛点以及需求，摒弃“雇主”的提法，推出“合伙人”的概念，定制化解决方案。"
                            , "周期：两个月一期"
                            , "服务企业:B轮以下企业"
                        ]
                    },
                    {
                        title: "受邀企业特权：",
                        content: [
                            "线上企业专场：一期"
                            , "梦想拉勾加：职位发布20个、主动邀约20个、权重提高"
                            , "线上微课堂：一期"
                            , "传媒支持：站内推送、app端展示、言职覆盖、新媒体传播"
                        ]
                    },
                    {
                        title: "页面展示",
                        content: [
                            "/src/img/brand-partner2.jpg"
                        ]
                    }
                ]
            },
            // 极速入职
            entrant: {
                articles: [
                    {
                        title: "极速入职--职场最快24小时入职",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-entrant1.jpg"
                            , "专为企业急招职位打造，以“24小时入职”引爆求职者快速投递；同时企业24小时内迅速响应，集中处理简历、发起面试，极大缩短招聘周期。"
                            , "周期：两个月一期；"
                            , "服务企业：急招职位企业。"
                        ]
                    },
                    {
                        title: "受邀企业特权：",
                        content: [
                            "线上专场：亮点包装，突出优势&急招职位"
                            , "急招职位曝光：“极速职位top10”榜单实时更新"
                            , "职位搜索推荐：专场职位搜索权重提升"
                            , "站内外同步推广：丰富的广告位，精准站内推送，外部新媒体推广"
                        ]
                    },
                    {
                        title: "页面展示",
                        content: [
                            "/src/img/brand-entrant2.jpg"
                            , "/src/img/brand-entrant3.jpg"
                        ]
                    }
                ]
            },
            // 实力派
            power: {
                articles: [
                    {
                        title: "实力派",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-power1.jpg"
                            , "实力派，拉勾网迎接金九银十新招聘高峰的巨作。2015年“实力派梦想升值季”是拉勾网首次在北上广深4地同时发动的大型招聘专场；联合600家知名互联网公司CEO共同传播，刷爆微信社交圈。2016年实力派，将加入多玩法，联合88家媒体与122家合作伙伴，打造声势最为浩大的互联网招聘周。"
                        ]
                    },
                    {
                        title: "受邀企业特权：",
                        content: [
                            "线上专场：展示企业和职位；"
                            , "传媒支持：站内推送、app端展示、新媒体传播。"
                        ]
                    },
                    {
                        title: "页面展示",
                        content: [
                            "/src/img/brand-power2.jpg"
                        ]
                    }
                ]
            },
            // 野心时代
            times: {
                articles: [
                    {
                        title: "野心时代",
                        link: {
                            name: "查看线上案例",
                            url: ""
                        },
                        content: [
                            "/src/img/brand-time1.jpg"
                            , "实力派，拉勾网迎接金九银十新招聘高峰的巨作。2015年“实力派梦想升值季”是拉勾网首次在北上广深4地同时发动的大型招聘专场；联合600家知名互联网公司CEO共同传播，刷爆微信社交圈。2016年实力派，将加入多玩法，联合88家媒体与122家合作伙伴，打造声势最为浩大的互联网招聘周。"
                        ]
                    },
                    {
                        title: "受邀企业特权：",
                        content: [
                            "线上专场：展示企业和职位；"
                            , "传媒支持：站内推送、app端展示、新媒体传播。"
                        ]
                    },
                    {
                        title: "页面展示",
                        content: [
                            "/src/img/brand-time2.jpg"
                            , "/src/img/brand-time3.jpg"
                        ]
                    }
                ]
            }
            
        }
        console.log(this.props.params.type)
    }
    handleClick (ele) {

    }

    render() {
        let type = this.props.params.type;
        let articles =this.state[type].articles
        let articlesDom = []
        articles.forEach(function(ele, index) {
            articlesDom.push(
                <ArticleBox article = { ele } key = { index } cName = { type }/>
            )
        })
        return ( 
            < div >
                <Banner backgroundImage = '/src/img/banner-brand.jpg' title = '拉勾企业服务·品牌建设' />
                <div className = "brand-box ">
                    { articlesDom }
                </div>
            < /div>
        )
    }
}
module.exports = Employ
import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'
import SecTab from '../../component/secTab'
import LeftMenu from '../../component/leftMenu'
import CommonInput from '../../component/commonInput'

require("./activity.css");
// 按需雇佣
class BrandActivity extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 极速入职
            entrant: {
                articles: [
                    {
                        title: "极速入职--职场最快24小时入职",
                        link: {
                            name: "查看线上案例",
                            dataUrl: "http://activity.lagou.com/activity/dist/speedEntry/pc/index.html?num=20",
                            dataId: "" ,
                            dataNo: "" ,
                            dataCid: "idnull"
                        },
                        content: [
                            commonPath + "img/brand-entrant1.jpg"
                            , "专为企业急招职位打造，以“24小时入职”引爆求职者快速投递；同时企业24小时内迅速响应，集中处理简历、发起面试，极大缩短招聘周期。"
                            , <br />
                            , "周期：两个月一期；"
                            , "服务企业：急招职位企业。"
                        ]
                    },
                    {
                        title: "受邀企业特权：",
                        content: [
                            <div className = 'paragraph'><span className='just-bold'>线上专场</span>：亮点包装，突出优势&急招职位</div>
                            , <div className = 'paragraph'><span className='just-bold'>急招职位曝光</span>：极速职位top10”榜单实时更新</div>
                            , <div className = 'paragraph'><span className='just-bold'>职位搜索推荐</span>：专场职位搜索权重提升</div>
                            , <div className = 'paragraph'><span className='just-bold'>站内外同步推广</span>：丰富的广告位，精准站内推送，外部新媒体推广</div>
                        ]
                    },
                    {
                        title: "页面展示",
                        content: [
                            commonPath + "img/brand-entrant2.jpg"
                            , commonPath + "img/brand-entrant3.jpg"
                        ]
                    }
                ],
                name: '极速入职',
                dataUrl: "/brand_activity/entrant",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull"
            },
            // 梦想合伙人
            partner: {
                articles: [
                    {
                        title: "梦想合伙人--寻找并肩作战的兄弟",
                        link: {
                            name: "查看线上案例",
                            dataUrl: "http://activity.lagou.com/topic/dreampartner.html",
                            dataId: "" ,
                            dataNo: "" ,
                            dataCid: "idnull"
                        },
                        content: [
                            commonPath + "img/brand-partner1.jpg"
                            , "根据初创型公司的招聘痛点以及需求，摒弃“雇主”的说法，推出“合伙人”的概念，定制化解决方案。"
                            , <br />
                            , "周期：两个月一期"
                            , "服务企业:B轮以下企业"
                        ]
                    },
                    {
                        title: "受邀企业特权：",
                        content: [
                            <div className = 'paragraph'><span className='just-bold'>线上企业专场</span>：一期</div>
                            , <div className = 'paragraph'><span className='just-bold'>梦想拉勾加</span>：职位发布20个、主动邀约20个、权重提高</div>
                            , <div className = 'paragraph'><span className='just-bold'>线上微课堂</span>：一期</div>
                            , <div className = 'paragraph'><span className='just-bold'>传媒支持</span>：站内推送、app端展示、言职覆盖、新媒体传播</div>
                        ]
                    },
                    {
                        title: "页面展示",
                        content: [
                            commonPath + "img/brand-partner2.jpg"
                        ]
                    }
                ],
                dataUrl: "/brand_activity/partner",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull",
                name: '梦想合伙人'
            },
            // 实力派
            power: {
                articles: [
                    {
                        title: "实力派",
                        link: {
                            name: "查看线上案例",
                            dataUrl: "http://activity.lagou.com/topic/shilipaipc.html",
                            dataId: "" ,
                            dataNo: "" ,
                            dataCid: "idnull"
                        },
                        content: [
                            commonPath + "img/brand-power1.jpg"
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
                            commonPath + "img/brand-power2.jpg"
                        ]
                    }
                ],
                dataUrl: "/brand_activity/power",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull",
                name: '实力派'
            },
            // 野心时代
            times: {
                articles: [
                    {
                        title: "野心时代",
                        link: {
                            name: "查看线上案例",
                            dataUrl: "http://ca.lagou.com/careerism/index",
                            dataId: "" ,
                            dataNo: "" ,
                            dataCid: "idnull"
                        },
                        content: [
                            commonPath + "img/brand-time1.jpg"
                            , "“野心时代”的年终策划，拉勾网年度最大规模活动盛典。连续两年，联合互联网核心领域权威媒体、知名投资机构、多家合作伙伴、10多位科技、天文、艺术大咖，共同建立全新的雇主评选生态、打造年度互联网圈的最后一次大规模招聘、呈现互联网人密度最高的线下盛典。"
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
                            commonPath + "img/brand-time2.jpg"
                            , commonPath + "img/brand-time3.jpg"
                        ]
                    }
                ],
                dataUrl: "/brand_activity/times",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull",
                name: '野心时代'
            },
            // 往期活动
            activity: {
                articles: [
                    {
                        title: "理想之上--有料、有胆、有梦",
                        link: {
                            name: "查看线上案例",
                            dataUrl: "http://activity.lagou.com/activity/dist/aboveIdeal/online/PC/index_gz.html",
                            dataId: "" ,
                            dataNo: "" ,
                            dataCid: "idnull"
                        },
                        content: [
                            commonPath + "img/brand-activity1.jpg"
                            ,"拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。"
                            , "巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市"
                            , "举办日期：每年5月"
                        ]
                    },
                    {
                        title: "梦想者市集",
                        link: {
                            name: "查看线上案例",
                            dataUrl: "/case_detail/market",
                            dataId: "" ,
                            dataNo: "" ,
                            dataCid: "idnull"
                        },
                        content: [
                            commonPath + "img/brand-activity2.jpg"
                            ,"“梦想者市集”作为拉勾品牌活动自2015年起连续举办两届，在行业内形成了巨大的声量传播"
                            , "作为贴近互联网行业生态，为互联网人的职业成长提供了更多多元化的服务活动，继北京站之后，陆续走进上海、广州、深圳、成都、杭州、厦门，为全国的互联网企业提供更多的展示平台，帮助全国的互联网行业人士获得良好的发展。"
                            , "举办日期：每年7月"
                        ]
                    }
                ],
                dataUrl: "/brand_activity/activity",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull",
                name: '往期活动'
                
            }
        }
    }
    handleClick (ele) {

    }

    render() {
        let _this = this
        let state = this.state
        let type = this.props.params.type;
        let articles = state[type].articles
        let articlesDom = []

        let tabList = []
        for (let n in state) {
            let e = state[n]
            tabList.push({
                name: e.name,
                dataUrl: e.dataUrl,
                dataId: e.dataId ,
                dataNo: e.dataNo ,
                dataCid: e.dataCid
            })
        }
        articles.forEach(function(ele, index) {
            articlesDom.push(
                <ArticleBox article = { ele } key = { index } cName = { type } {..._this.props}/>
            )
        })
        return ( 
            < div>
                <Banner backgroundImage = {commonPath + 'img/banner-brand.jpg'} 
                    tabs = { tabList } curName = { state[type].name } title = '拉勾企业服务·品牌建设' {...this.props}/>
                <LeftMenu onOpen="品牌活动" style={{position:'absolute',top:100,left:100}} {...this.props} />
                <div className = "brand-box ">
                    { articlesDom }
                </div>
                <CommonInput />
            < /div>
        )
    }
}
module.exports = BrandActivity
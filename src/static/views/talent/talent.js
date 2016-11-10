import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import SecTab from '../../component/secTab'
import ArticleBox from '../../component/ArticleBox'
import CommonInput from '../../component/commonInput'

require("./talent.css");
// 按需雇佣
class Employ extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 拉钩简招
            employ: {
                articles: [
                    {
                        title: "拉勾简招",
                        content: [
                            "免费招聘协作系统"
                            , "/src/img/talents-jz1.jpg"
                        ]
                    },
                    {
                        title: "什么叫拉勾简招？",
                        content: [
                            "拉勾简招是拉勾云为企业免费提供的一站式招聘系统（ATS），帮助企业更高效地管理招聘渠道及人才库，从发布职位、面试全流程安排、发送offer到员工入职，优化招聘全流程，并用产品驱动HR及用人部门协同处理简历，让企业招聘到最合适的人才。拉勾简招还包含背景调查的功能，帮助企业找到优秀人才的同时降低用人风险。"
                        ]
                    },
                    {
                        title: "解决问题",
                        content: [
                            "从候选人获取到新员工入职，全一站式的招聘体验，帮助HR从繁琐的事务性工作中脱身，聚焦专业能力，提升企业招聘效率。"
                            , "/src/img/talents-jz2.jpg"
                        ]
                    }
                ],
                name: "拉钩简招",
                url: ""
            },
            // 拉钩+
            plus: {
                articles: [
                    {
                        title: "如何海量发布职位？如何搜索候选人简历？如何提高招聘效率？",
                        content: [
                            "企业版拉勾加lagou+ 是拉勾网推出的垂直互联网招聘一站式解决方案，有效的提高招聘效率，建立公司简历库、长期获人才途径的招募伙伴，方便管理、12个月的有效期使您达成可持续性的招聘目标。"
                        ]
                    },
                    {
                        title: "拉勾加企业特权",
                        content: [
                           "/src/img/talents-plus1.jpg"
                        ]
                    }
                ],
                name: "拉钩+",
                url: ""
            },
            // 一拍
            pai: {
                articles: [
                    {
                        title: "靠谱、高活跃、中高级人才就在拉勾“一拍”",
                        content: [
                            "由具有人力资源背景的资深职业顾问对全网技术、产品、运营、设计、市场岗位的中高端人才进行筛选，并进行一对一专访深入沟通，了解候选人基础素质、工作经验、求职意向。符合一拍人才条件的优质候选人在拉勾一拍精英会场进行为期七天的展示，供企业挑选，顾问撮合跟进、缩短招聘周期，促进达成offer。"
                            , "/src/img/talents-p1.jpg"
                        ]
                    },
                    {
                        title: "产品特色",
                        content: [
                           "三高（高人才、高活跃、高质量）、两快（面试快、入职快）"
                        ]
                    },
                    {
                        title: "企业问题",
                        content: [
                           "收到的简历辛辛苦苦一封封筛选，大部分都不合适，太浪费精力浪费感情"
                           , "一拍精英会场中的中、高端候选人全部经过职业顾问层层筛选。在拉勾一拍挑人，简历初筛这道工作，顾问就帮你完成了。"
                           , "/src/img/talents-p2.jpg"
                           , "自己找到的中高端人才，可是人家根本没有换工作的意思，对你不理不睬"
                           , "一拍精英会场中的候选人，全部由职业顾问亲自沟通，确保候选人当前有强烈求职意愿，勾搭起来自然不费劲儿~"
                           , "/src/img/talents-p3.jpg"
                           , "好容易看中一个靠谱候选人，可是人家特抢手，怎么办？"
                           , "一拍职业顾问与候选人都保持良好线下沟通，可为企业提供撮合服务。有专业职业顾问帮你说话，牛人入职的概率肯定又多一成！"
                           , "/src/img/talents-p4.jpg"
                        ]
                    }
                ],
                name: "一拍",
                url: ""
            },
            // 精准推荐
            recommend: {
                articles: [
                    {
                        title: "如何避免无效的投放？有质量超活跃的简历如何获取？",
                        content: [
                            "/src/img/talents-tj1"
                        ]
                    },
                    {
                        title: "推荐示例",
                        content: [
                            , "1.核心聚焦位置：拉勾APP首页最大banner，浏览量高；"
                            , "2.权重提升：投放期间内，企业招聘职位权重全面提升，促进简历投递转化；"
                            , "3.全程活动策划跟进服务：了解企业品牌按品牌定制，曝光企业品牌，转化简历投递。"
                        ]
                    },
                    {
                        title: "移动端banner案例展示",
                        content: [
                            "/src/img/brand-mi2.jpg"
                        ]
                    }
                ],
                name: "精准推荐",
                url: ""
            },
            // 背景调查
            background: {
                articles: [
                    {
                        title: "背景调查",
                        content: [
                            "拉勾背景调查是基于互联网SaaS模式的背景调查，在拉勾招聘模块的基础之上，为企业不同级别候选人提供背景调查解决方案，帮企业快速精准、更低成本地识别可靠人才，从而降低雇佣风险，提高招聘质量。"
                            , "/src/img/talents-bj1.jpg"
                        ]
                    },
                    {
                        title: "亮点",
                        content: [
                            "/src/img/talents-bj2.jpg"
                        ]
                    },
                    {
                        title: "服务简介",
                        content: [
                            "一键秒查项目：身份信息查询、学历信息核实（最高学历）、法院诉讼核查、金融风险核查、商业利益冲突核查、职业资质核实。"
                            , "背调报告项目：2-3段工作履历核实、1-2段工作表现核查、1位自主寻访证明人访谈、青藤联盟（HR互助社群）"
                            , "背景调查适用候选人，涵盖了基层岗位、中层管理岗位、敏感岗位、高层管理岗位、核心岗位、企业合伙人、VP等，让候选人的简历说话。"
                            , "/src/img/talents-bj3.jpg"
                        ]
                    },
                ],
                name: "背景调查",
                url: ""
            }
            
            
        }
    }
    handleClick (ele) {

    }

    render() {
        
        let state = this.state
        let type = this.props.params.type;
        let articles = state[type].articles
        let articlesDom = []
        let tabList = []
        for (let n in state) {
            let e = state[n]
            tabList.push({
                name: e.name,
                url: e.url
            })
        }
        articles.forEach(function(ele, index) {
            articlesDom.push(
                <ArticleBox article = { ele } key = { index } cName = { type }/>
            )
        })
        return ( 
            < div >
                <Banner backgroundImage = '/src/img/banner-brand.jpg' title = '拉勾企业服务·品牌建设' />
                <SecTab tabs = { tabList } curName = { state[type].name }/>
                <div className = "talent-box ">
                    { articlesDom }
                </div>
                <CommonInput />
            < /div>
        )
    }
}
module.exports = Employ
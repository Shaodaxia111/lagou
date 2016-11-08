import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'

require("./mobile.css");
// 按需雇佣
class Employ extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 首页热门职位
            position: {
                articles: [
                    {
                        title: "首页热门职位展示",
                        content: [
                            "拉勾网首页--热门职位推广展示，根据企业地域进行投放，直接把招聘职位、薪资福利、公司企业文化展示在用户面前，每小时循环轮播，提高职位曝光率。"
                            , "/src/img/brand-mi1.jpg"
                        ]
                    }
                ]
            },
            // 移动banner
            banner: {
                articles: [
                    {
                        title: "企业权益",
                        content: [
                            "1.APP端核心聚焦位置推荐；"
                            , "2.公司权重提升；"
                            , "3.定制公司招聘页面、H5页面。"
                        ]
                    },
                    {
                        title: "产品优势",
                        content: [
                            "1.核心聚焦位置：拉勾APP首页最大banner，浏览量高；"
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
                ]
            },
            // 首页 logo按钮展示
            logo: {
                articles: [
                    {
                        title: "首页 logo按钮展示",
                        content: [
                            "首页logo展示（190*190），可展示企业品牌logo以及slogan，双面轮播，彰显企业个性文化。"
                            , "/src/img/brand-mi3.jpg"
                        ]
                    }
                ]
            },
            // 首页banner
            index: {
                articles: [
                    {
                        title: "企业权益：",
                        content: [
                            "1.核心聚焦位置推荐"
                            , "2.”潜力未来 拉勾推荐“ 标示"
                            , "3.公司权重提升"
                            , "4.定制公司招聘页面、H5页面"
                        ]
                    },
                    {
                        title: "产品优势",
                        content: [
                            "1.核心聚焦位置：拉勾网首页最大banner，浏览量高"
                            , "2.logo展示：右侧为独立静态logo展示，最大程度展示企业个性化招聘专题，提升曝光率。"
                            , "3.权重提升：投放期间内，企业招聘职位权重全面提升，促进简历投递转化"
                            , "4.全程活动策划跟进服务：了解企业品牌按品牌定制，曝光企业品牌，转化简历投递。"
                        ]
                    },
                    {
                        title: "首页banner案例展示",
                        content: [
                            "/src/img/brand-mi5.jpg"
                            , "/src/img/brand-mi6.jpg"
                        ]
                    }
                ]
            },
            
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
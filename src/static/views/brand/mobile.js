import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'
import ArticleBox from '../../component/ArticleBox'
import LeftMenu from '../../component/leftMenu'
import CommonInput from '../../component/commonInput'

require("./mobile.css");
// 按需雇佣
class Employ extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 首页banner
            index: {
                articles: [
                    {
                        title: "拉勾网首页Banner",
                        secTitle: "企业权益：",
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
                            commonPath + "img/brand-mi4.jpg"
                        ]
                    },
                    {
                        title: "定制招聘页面&H5页面示例",
                        content: [
                            commonPath + "img/brand-mi5.jpg"
                            , commonPath + "img/brand-mi6.jpg"
                        ]
                    }
                ],
                name: '首页banner',
                dataUrl: "/brand_mobile/index",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull"
            },
            // 首页LOGO
            logo: {
                articles: [
                    {
                        title: "首页 logo按钮展示",
                        content: [
                            "首页logo展示（190*190），可展示企业品牌logo以及slogan，双面轮播，彰显企业个性文化。"
                            , commonPath + "img/brand-mi3.jpg"
                        ]
                    }
                ],
                name: '首页LOGO',
                dataUrl: "/brand_mobile/logo",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull"
            },
            // 首页热门职位展示
            position: {
                articles: [
                    {
                        title: "首页热门职位展示",
                        content: [
                            "拉勾网首页--热门职位推广展示，根据企业地域进行投放，直接把招聘职位、薪资福利、公司企业文化展示在用户面前，每小时循环轮播，提高职位曝光率。"
                            , commonPath + "img/brand-mi1.jpg"
                        ]
                    }
                ],
                name: '首页热门职位展示',
                dataUrl: "/brand_mobile/position",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull"
            },
            // 拉勾APP首页banner
            banner: {
                articles: [
                    {
                        title: "拉勾APP首页banner",
                        secTitle: "企业权益",
                        content: [
                            "1.定制化轮播banner图展示"
                            , "2.针对企业招聘区域+候选人期望工作地点定向曝光"
                            , "3.在线周期3天(周一至周三）/4天（周四至周日）"
                            , "4.点击进入企业在APP端的拉勾主页"
                        ]
                    },
                    {
                        title: "产品优势",
                        content: [
                            "1.增加品牌曝光率"
                            , "2.扩大人才筛选面积"
                            , "3.建立并助力雇主品牌形象"
                        ]
                    },
                    {
                        title: "拉勾APP首页banner示例",
                        content: [
                            commonPath + "img/brand-mi2.jpg"
                        ]
                    }
                ],
                name: '拉勾APP首页banner',
                dataUrl: "/brand_mobile/banner",
                dataId: "" ,
                dataNo: "" ,
                dataCid: "idnull"
            },
            
            
            
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
                dataUrl: e.dataUrl,
                dataId: e.dataId ,
                dataNo: e.dataNo ,
                dataCid: e.dataCid
            })
        }
        articles.forEach(function(ele, index) {
            articlesDom.push(
                <ArticleBox article = { ele } key = { index } cName = { type }/>
            )
        })
        return ( 
            < div >
                <Banner backgroundImage = {commonPath + 'img/banner-brand.jpg'} 
                    title = '拉勾企业服务·品牌建设' tabs = { tabList } curName = { state[type].name } {...this.props}/>
                <LeftMenu onOpen="广告" style={{position:'absolute',top:100,left:100}} {...this.props}/>
                <div className = "brand-box ">
                    { articlesDom }
                </div>
                <CommonInput />
            < /div>
        )
    }
}
module.exports = Employ
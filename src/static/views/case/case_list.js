import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../../component/commonBanner'

require("./case_list.css");
// 成功案例列表
class CaseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                item1: {
                    title: '理想之上--有料、有胆、有梦',
                    picture: '/src/img/case-pic1.jpg',
                    content: [
                        ' 拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。',
                        '巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市'
                    ]
                },
                item2: {
                    title: '理想之上--有料、有胆、有梦',
                    picture: '/src/img/case-pic1.jpg',
                    content: [
                        ' 拉勾网主办的“理想之上”全国巡回开放日活动是互联网行业内第一次跨界将头脑风暴、互动分享和音乐现场演出融合在一起的大型活动，以音乐与互联网结合，碰撞出不一样的思想火花。',
                        '巡演活动共计36位演讲嘉宾及120家合作伙伴共同参与，覆盖北京、上海、广州、成都、深圳、杭州6座城市'
                    ]
                },
                item3: {
                    title: '梦想者市集',
                    picture: '/src/img/case-pic2.jpg',
                    content: [
                        '“梦想者市集”作为拉勾品牌活动自2015年起连续举办两届，在行业内形成了巨大的声量传播。',
                        '作为贴近互联网行业生态，为互联网人的职业成长提供了更多多元化的服务活动，继北京站之后，陆续走进上海、广州、深圳、成都、杭州、厦门，为全国的互联网企业提供更多的展示平台，帮助全国的互联网行业人士获得良好的发展。'
                    ]
                },
                item4: {
                    title: '梦想者市集',
                    picture: '/src/img/case-pic2.jpg',
                    content: [
                        '“梦想者市集”作为拉勾品牌活动自2015年起连续举办两届，在行业内形成了巨大的声量传播。',
                        '作为贴近互联网行业生态，为互联网人的职业成长提供了更多多元化的服务活动，继北京站之后，陆续走进上海、广州、深圳、成都、杭州、厦门，为全国的互联网企业提供更多的展示平台，帮助全国的互联网行业人士获得良好的发展。'
                    ]
                },
                item5: {
                    title: '梦想者市集',
                    picture: '/src/img/case-pic2.jpg',
                    content: [
                        '“梦想者市集”作为拉勾品牌活动自2015年起连续举办两届，在行业内形成了巨大的声量传播。',
                        '作为贴近互联网行业生态，为互联网人的职业成长提供了更多多元化的服务活动，继北京站之后，陆续走进上海、广州、深圳、成都、杭州、厦门，为全国的互联网企业提供更多的展示平台，帮助全国的互联网行业人士获得良好的发展。'
                    ]
                },
                item6: {
                    title: '梦想者市集',
                    picture: '/src/img/case-pic2.jpg',
                    content: [
                        '“梦想者市集”作为拉勾品牌活动自2015年起连续举办两届，在行业内形成了巨大的声量传播。',
                        '作为贴近互联网行业生态，为互联网人的职业成长提供了更多多元化的服务活动，继北京站之后，陆续走进上海、广州、深圳、成都、杭州、厦门，为全国的互联网企业提供更多的展示平台，帮助全国的互联网行业人士获得良好的发展。'
                    ]
                },
                
            }
        }
    }
    handleClick(ele) {

    }

    render() {
        let list = this.state.list
        let listDom = []
        let _this = this

        for (let index in list) {
            let _case = list[index]
            let contentDom = []
            let _this = this

            _case.content.forEach(function (ele, i) {
                contentDom.push(<span className = 'case-paragraph' key = {'case-content' + i}> { ele } </span>)
            })
            listDom.push(
                <li key = { 'case-list' + index }>
                    <div className = 'title-line'>
                        <span>{ _case.title } </span>
                        <span className = 'go-detail' onClick = {_this.handleClick.bind(this, 'url')}>查看详情</span>
                    </div>
                    <img src = { _case.picture } alt = '成功案例' />
                    {contentDom}
                </li>
            )
            
        }

        return ( 
            < div >
                < Banner backgroundImage = '/src/img/banner-common-question.jpg' title = '成功案例' / >
                < div className = 'case-list-box' >
                    <ul className = 'case-list'>
                        { listDom }
                    </ul>
                </div>
            </div>
        )
    }
}
module.exports = CaseList
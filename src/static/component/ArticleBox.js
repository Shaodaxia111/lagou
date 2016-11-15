import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames'
import reactMixin from 'react-mixin'
import LinkTo from '../mixins/linkto'

require("./css/ArticleBox.css");
// 文章box 引用方式可参考 views/brand/activity.js
class ArticleBox extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClick (ele) {

    }
    renderTitle(props) {
        let linkDom = []
        let secTitleDom = []
        let _this = this
        if(props.link) {
            linkDom.push(<div className = 'articleLink'
                                data-url = { props.link.dataUrl }
                                data-lg-tj-id = { props.link.dataId }
                                data-lg-tj-no = { props.link.dataNo }
                                data-lg-tj-cid = { props.link.dataCid }
                                onClick = {_this.onLink.bind(this)}
                                key = 'link'>
                            { props.link.name } 
                         </div>)
        }
        if(props.secTitle) {
            secTitleDom = <div className = 'title'> {props.secTitle}</div>
        }

        return (
            <div>
                <div className = 'title'>
                    { props.title }
                    { linkDom }
                </div>
                {secTitleDom}
            </div>
        ) 
    }

    render() {
        let article = this.props.article
        let cName = this.props.cName
        let contentDom = []
        if(article.content != undefined) {
            article.content.forEach(function (ele, index) {
                if(typeof ele === 'string') {
                    if(ele.indexOf('img') > -1) {   // 图片
                        contentDom.push(<div className ='img-div'  key = { index }><img src = { ele } alt = '拉钩商业图片'/ ></div>)
                    } else {    // 段落
                        contentDom.push(<span className = 'paragraph' key = { index }>{ ele }</span>)
                    }
                } else {
                    if(ele.type == 'br'){
                        contentDom.push(<br key = { index } />)
                    } else if(ele.type == 'span'){
                        contentDom.push(<span className = {ele.props.className} key = {index}>{ele.props.children}</span>)
                    } else if(ele.type == 'div') {
                        contentDom.push(<div className = {ele.props.className} key = {index}>{ele.props.children}</div>)
                    }
                }
            })
        }

        return ( 
            < div className={classnames("article",{[`${cName}`]: cName != undefined})}>
               { this.renderTitle(this.props.article) }
               { contentDom }
            < /div>
        )
    }
}

ArticleBox.propTypes = {
    article: PropTypes.object.isRequired
}
reactMixin(ArticleBox.prototype, LinkTo);
module.exports = ArticleBox
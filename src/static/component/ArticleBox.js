import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames'

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
        let _this = this
        if(props.link) {
            linkDom.push(<div className = 'articleLink'
                                data-url = { props.link.url }
                                onClick = { _this.handleClick.bind(this) }
                                key = 'link'>
                            { props.link.name } 
                         </div>)
        }
        return (
            <div className = 'title'>
                { props.title }
                { linkDom }
            </div>
        ) 
    }

    render() {
        let article = this.props.article
        let cName = this.props.cName
        let contentDom = []
        article.content.forEach(function (ele, index) {
            if(ele.indexOf('img') > -1) {   // 图片
                contentDom.push(<img src = { ele } alt = '拉钩商业图片' key = { index }/ >)
            } else {    // 段落
                contentDom.push(<span className = 'paragraph' key = { index }>{ ele }</span>)
            }
         })

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

module.exports = ArticleBox
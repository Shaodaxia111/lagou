import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames'

import reactMixin from 'react-mixin'
import LinkTo from '../mixins/linkto'

require("./css/secTab.css");
// 文章box 引用方式可参考 views/brand/activity.js
class SecondTab extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClick (ele) {

    }

    render() {
        let tabs = this.props.tabs
        let curName = this.props.curName
        let width = this.props.width
        let tabsDom = []
        let _this = this
        tabs.forEach(function (ele, index) {
            let _name = ele.name
            tabsDom.push(<div className = {classnames("tab-item", {selected : _name == curName})} key = { index }>
                            <span data-url = { ele.dataUrl }
                                data-lg-tj-id = { ele.dataId }
                                data-lg-tj-no = { ele.dataNo }
                                data-lg-tj-cid = { ele.dataCid }
                                onClick = {_this.onLink.bind(_this)}>
                                { ele.name } </span>
                        </div>)
         })

        return ( 
            <div className = 'second-tab-box'>
                < div className = 'second-tab' >
                    { tabsDom }
                < /div>
            </div>
        )
    }
}

SecondTab.propTypes = {
    tabs: PropTypes.array.isRequired,
    curName: PropTypes.string.isRequired
}
reactMixin(SecondTab.prototype, LinkTo);
module.exports = SecondTab
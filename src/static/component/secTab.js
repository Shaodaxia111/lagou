import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames'

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
        console.log(tabs)
        tabs.forEach(function (ele, index) {
            let _name = ele.name
            tabsDom.push(<div className = {classnames({selected : _name == curName})} 
                            data-url = { ele.url } key = { index }>
                            <span> { ele.name } </span>
                        </div>)
         })

        return ( 
            < div className = 'second-tab' >
                { tabsDom } 
            < /div>
        )
    }
}

SecondTab.propTypes = {
    tabs: PropTypes.array.isRequired,
    curName: PropTypes.string.isRequired
}

module.exports = SecondTab
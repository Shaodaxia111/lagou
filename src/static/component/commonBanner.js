import React, { PropTypes, Component }from 'react';
import ReactDOM from 'react-dom';
// import classnames from 'classnames'
import SecTab from './secTab'

require("./css/commonBanner.css");

// 通用banner组件 
class CommonBanner extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props
        let secTabDom = []
        if(props.tabs != undefined) {
            secTabDom = <SecTab {...props}/>
        }
        return ( 
            < div className = 'banner-box'>
                <div className = "common-banner" style = {{backgroundImage: 'url(' + props.backgroundImage + ')'}}>{props.title}</div>
                { secTabDom }
            < /div>
        )
    }
}

CommonBanner.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

module.exports = CommonBanner
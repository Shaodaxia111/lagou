import React, { PropTypes, Component }from 'react';
import ReactDOM from 'react-dom';
// import classnames from 'classnames'

require("./css/commonBanner.css");

// 通用banner组件 
class CommonBanner extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props
        return ( 
            < div >
                <div className = "common-banner" style = {{backgroundImage: 'url(' + props.backgroundImage + ')'}}>{props.title}</div>
            < /div>
        )
    }
}

CommonBanner.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

module.exports = CommonBanner
import React, { Component, PropTypes } from 'react'
import TextInput from './textInput'

require("./css/commonInput.css");

class ComInput extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
    
        return ( 
            < div className = 'commmon-input' >
                < h2 > 立即获得专属顾问一对一服务 < /h2> 
                < span className = 'apply-tip' > 留下您的联系信息， 我们会有专业营销顾问与您联系， 一对一为您详细介绍拉勾相关产品和服务， 帮您更高效的工作！ < /span > 
                <TextInput style={{background:"#f5f6f8"}}/>
            < /div>  
        )
    }

}
module.exports = ComInput
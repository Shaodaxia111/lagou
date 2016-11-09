import React, { Component, PropTypes } from 'react'

require("./css/textInput.css");

class TextInput extends Component {
    constructor(props, context) {
        super(props, context)
            // this.state = {
            //   text: this.props.text || '',
            //   hasChecked: false
            // }
        this.state = {
            action: "",
            type: "get",
            list: [
                // 联系人姓名
                {
                    name: "name",
                    text: "联系人姓名",
                    testAndFail: false,
                    value: ""
                },
                // 联系人手机
                {
                    name: "tel",
                    text: "联系人手机",
                    testAndFail: false,
                    value: ""
                },
                // 公司所在地
				{
                    name: "address",
                    text: "公司所在地",
                    testAndFail: false,
                    value: ""
                },
                // 公司名称
				{
                    name: "company",
                    text: "公司名称",
                    testAndFail: false,
                    value: ""
                }
            ]
        }
    }

    handleSubmit(e) {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleBlur(e) {
        let reg = this.props.reg || "^[\s\S]+$"
        regArr = reg.split('#')
        for (let i = 0; i < regArr.length; i++) {
            let regex = new RegExp(regArr[i], "g")
            let result = regex.test(item.value)
            if (!result || result == "false") {
                checkFlag = false;
                $.zheui.toast(error);
            }
        }
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    render() {
        let inputList = this.state.list
        let inputDom = []
        let _this = this
        inputList.forEach(function(ele, index) {
            inputDom.push( < div className = 'input-item'
                key = { index } >
                < div className = 'input-text' > { ele.text } < /div>  < input type = "text"
                name = { ele.name }
                onBlur = { _this.handleBlur.bind(this) }
                onKeyDown = { _this.handleSubmit.bind(this) }
                /> < /div>
            )
        })
        return ( < div className = 'apply-input' >
            < div className = 'apply-box' >
            < h2 > 立即获得专属顾问一对一服务 < /h2> < span className = 'apply-tip' > 留下您的联系信息， 我们会有专业营销顾问与您联系， 一对一为您详细介绍拉勾相关产品和服务， 帮您更高效的招聘人才！ < /span> { inputDom } < /div>  < /div>
        )
    }

}
module.exports = TextInput
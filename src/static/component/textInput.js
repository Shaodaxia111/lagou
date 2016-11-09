import React, { Component, PropTypes } from 'react'

require("./css/textInput.css");

class TextInput extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            action: "",
            type: "get",
            list: [
                // 联系人姓名
                {
                    name: "name",
                    text: "联系人姓名",
                    checked: false,
                    value: "",
                    type: 'text'
                },
                // 联系人手机
                {
                    name: "tel",
                    text: "联系人手机",
                    checked: false,
                    value: "",
                    type: 'number',
                    reg: "^1[0-9]{10}$"
                },
                // 公司所在地
                {
                    name: "address",
                    text: "公司所在地",
                    checked: false,
                    value: "",
                    type: 'text'
                },
                // 公司名称
                {
                    name: "company",
                    text: "公司名称",
                    checked: false,
                    value: "",
                    type: 'text'
                }
            ]
        }
    }

    handleSubmit() {
        let list = this.state.list
        let checkedAll = true
        list.forEach(function(ele) {
            if (!ele.checked) {
                checkedAll = false
            }
        })
        if (checkedAll) {
            console.log('checked all')
        } else {
			console.log('not')
		}
    }

    handleChange(index, e) {
        let val = e.target.value
        this.setState(function(previousState) {
            let input = previousState.list[index]
			input.checked = this.regInput(val, input.reg)
            input.value = val
            return previousState
        })
    }
    // handleBlur(index, e) {
    //     this.setState(function(previousState) {
    //         let input = previousState.list[index]
    //         input.checked = this.regInput(input.value, input.reg)
    //         return previousState
    //     })
    // }
    regInput(val, reg) {
        let _reg = reg ||  "^[\\w\\W]+"
        let regArr = _reg.split("#")
        for (let i = 0; i < regArr.length; i++) {
            let regex = new RegExp(regArr[i], "g");
            if (!regex.test(val)) {
				console.log(regex,val)
                return false
            }
        }
        return true
    }


    render() {
        let inputList = this.state.list
        let inputDom = []
        let _this = this
        inputList.forEach(function(ele, index) {
            inputDom.push( < div className = 'input-item'
                key = { index } >
                < div className = 'input-text' > { ele.text } < /div>   
				< input type = "text"
					name = { ele.name }
					type = { ele.type }
					onChange = { _this.handleChange.bind(_this, index) }
                /> 
				< /div >
            )
        })
        return ( < div className = 'apply-input' >
           			< div className = 'apply-box' >
            			< h2 > 立即获得专属顾问一对一服务 < /h2> 
						< span className = 'apply-tip' > 留下您的联系信息， 我们会有专业营销顾问与您联系， 一对一为您详细介绍拉勾相关产品和服务， 帮您更高效的招聘人才！ < /span > 
						{ inputDom } 
						<span className = 'apply-submit' onClick = {this.handleSubmit.bind(this)}> 提交报名</span>
					< /div>  
				< /div >
        )
    }

}
module.exports = TextInput
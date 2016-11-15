import React, { Component, PropTypes } from 'react'
import request from 'superagent';
import classnames from 'classnames'

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
                    hasChecked: false,
                    focus: false,
                    value: "",
                    type: 'text',
                    tip: '请输入联系人姓名'
                },
                // 联系人手机
                {
                    name: "tel",
                    text: "联系人手机",
                    checked: false,
                    hasChecked: false,
                    focus: false,
                    value: "",
                    type: 'number',
                    reg: "^1[0-9]{10}$",
                    tip: '请输入正确的手机号'
                },
                // 公司所在地
                {
                    name: "address",
                    text: "公司所在地",
                    checked: false,
                    hasChecked: false,
                    focus: false,
                    value: "",
                    type: 'text',
                    tip: '请输入公司所在地'
                },
                // 公司名称
                {
                    name: "company",
                    text: "公司名称",
                    checked: false,
                    hasChecked: false,
                    focus: false,
                    value: "",
                    type: 'text',
                    tip: '请输入公司名称'
                }
            ],
            submitSuccess: false
        }
    }


    handleChange(index, e) {
        let val = e.target.value
        this.setState(function(previousState) {
            let input = previousState.list[index]
            input.value = val
            return previousState
        })
    }
    handleBlur(index, e) {
            this.setState(function(previousState) {
                let input = previousState.list[index]
                input.checked = this.regInput(input.value, input.reg)
                input.hasChecked = true
                input.focus = false
                return previousState
            })
        }
        // hide danger tip
    handleFocus(index) {
        this.setState(function(previousState) {
            let input = previousState.list[index]
            input.focus = true
            return previousState
        })
    }
    regInput(val, reg) {
        let _reg = reg || "^[\\w\\W]+"
        let regArr = _reg.split("#")
        for (let i = 0; i < regArr.length; i++) {
            let regex = new RegExp(regArr[i], "g");
            if (!regex.test(val)) {
                // console.log(regex, val)
                return false
            }
        }
        return true
    }
    handleSubmit() {
        this.setState(function(previousState) {
            let checkedAll = true
            let submitJson = {}
            let _this = this
            previousState.list.forEach(function(ele, index) {
                if (!ele.hasChecked) {
                    ele.hasChecked = true
                }
                if (!ele.checked) {
                    checkedAll = false
                }
                submitJson[ele.name] = ele.value
            })
            if (checkedAll) {
                console.log(submitJson)
                // 提交成功后的逻辑代码 !!!!! 只供测试UI,接入接口后要删掉
                previousState.submitSuccess = true
                // 提交成功后的逻辑代码 !!!!! 正式代码

                // request.get("requestUrl" + JSON.stringify(submitJson))
                // .timeout(20000)
                // .end(function (err, res) {
                //     if(!err) {
                //         var data = JSON.parse(res.text);
                //         if(data.status == 200){
                //             previousState.submitSuccess = true
                //         } else{
                //             alert('网络异常，请稍候再试')
                //         }
                //     }else {
                //         console.log(err);
                //         alert('网络异常，请稍候再试')
                //     }
                // });
            } else {
                return previousState
            }

        })
    }


    render() {
        let inputList = this.state.list
        let inputDom = []
        let _this = this
        let applyBoxDom
        inputList.forEach(function(ele, index) {
            let dangerTipDom = ''
            if (ele.hasChecked && !ele.checked && !ele.focus) {
                dangerTipDom = < span className = 'danger-tip' > { ele.tip } < /span>
            }
            inputDom.push( < div className = 'input-item'
                key = { index } >
                < div className = 'input-text' > { ele.text } < /div>  
                <div className = {classnames('input-div',{'active': ele.focus})}>
                    < input type = "text"
                    name = { ele.name }
                    type = { ele.type }
                    onFocus = { _this.handleFocus.bind(_this, index) }
                    onChange = { _this.handleChange.bind(_this, index) }
                    onBlur = { _this.handleBlur.bind(_this, index) }
                    /> 
                </div>
                { dangerTipDom } < /div >
            )
        })
        if (!this.state.submitSuccess) {
            // 报名表单
            applyBoxDom = < div > { inputDom } < span className = 'apply-submit'
            onClick = { this.handleSubmit.bind(this) } >
                提交报名 < /span>  < /div >
        } else {
            // 报名成功
            applyBoxDom = 
                < div className = 'submit-seccess' >
                    < i >< /i> 
                    < h3 >&nbsp;&nbsp;&nbsp;提交成功！< /h3> 
                    < span > 请保持联系方式的畅通， 我们会尽快与您取得联系～ < /span >
                < /div>

        }

        return ( < div className = { classnames('apply-box', { 'hide': this.state.submitSuccess }) }
            style = { this.props.style } > { applyBoxDom } < /div >
        )
    }

}
module.exports = TextInput
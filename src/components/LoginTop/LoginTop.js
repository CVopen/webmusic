/*
 * @Author: zmx 
 * @Date: 2020-09-27 09:33:22 
 * @Last Modified by: zmx
 * @Last Modified time: 2020-09-27 17:15:52
 */

import React, { Component } from 'react'
import './LoginTop.scss'
import { cellphone } from '../../api/userApi/index'
import { MailOutlined } from '@ant-design/icons';
import { withRouter }  from 'react-router-dom'
import { message } from 'antd'
 class LoginTop extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password:'',
            result:null
        }
    }
    showMessage = (type,data) => {
        type ? message.success(data): message.error(data)
    }
    change = (e) => {
        switch (e.target.dataset.input) {
            case "user":
                this.setState({
                    username:e.target.value
                })
                break;
            case "pass":
                this.setState({
                    password:e.target.value
                })
                break;
            default:
                break;
        }
    }
    clickHandler=()=>{
        
        cellphone({
            phone:this.state.username,
            password:this.state.password
        }).then(res=>{
            console.log(res)
            this.setState({
                result:res
            })
            console.log(this.state.result)
            this.showMessage(true, '成功')
        }).catch (err => {
            console.log(err)
            this.showMessage(false, '失败')
        }) 
    }
    emailLogin=()=>{
        this.props.history.push('/emailLogin')
    }
    
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <img src={require('../../assets/images/logo.svg')} alt="" />
                </div>
                <div className="emailLogin" onClick={this.emailLogin}>
                    <MailOutlined className="icon" />
                    切换到邮箱登录
                </div>
                <div className="content">
                    <div className="login">
                        <label className='text'>用户名</label>
                        <input type="text" data-input="user" onChange={this.change} className="user" placeholder={this.props.username} />
                        <label className='underline'></label>

                    </div>
                    <div className="login">
                        <label className='text'>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                        <input type="password" data-input="pass" onChange={this.change} className="user" placeholder={this.props.password} />
                        <label className='underline'></label>

                    </div>
                </div>
                <div className="loginBtn" onClick={this.clickHandler}>
                    登录
                </div>
                <div className="registerBtn">
                    没有账号?请注册
                </div>

            </div>

        )
    }
}



export default withRouter(LoginTop)
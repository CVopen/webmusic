/*
 * @Author: zmx 
 * @Date: 2020-09-27 09:33:22 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-07 18:45:44
 */

import React, { Component } from 'react'

import { cellphone } from '../../api/userApi/index'
import { AppleOutlined  } from '@ant-design/icons';
import { withRouter }  from 'react-router-dom'
import './EmailLogin.scss'
 class LoginTop extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password:''
        }
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
            phone:this.state.user,
            password:this.state.password
        }).then(res=>console.log(res))
    }
    emailLogin=()=>{
        this.props.history.push('/login')
    }
    render() {
        

        return (
            <div className="container">
                <div className="logo">
                    <img src={require('../../assets/images/logo.svg')} alt="" />
                </div>
                <div className="emailLogin" onClick={this.emailLogin}>
                    <AppleOutlined  className="icon" />
                    切换到手机登录
                </div>
                <div className="content">
                    <div className="login">
                        <label className='text'>邮&nbsp;&nbsp;&nbsp;&nbsp;箱</label>
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
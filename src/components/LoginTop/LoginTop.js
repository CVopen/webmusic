/*
 * @Author: zmx 
 * @Date: 2020-09-27 09:33:22 
 * @Last Modified by: zmx
 * @Last Modified time: 2020-09-28 20:41:46
 */

import React, { Component } from 'react'
import './LoginTop.scss'
import { cellphone } from '../../api/userApi/index'
import { MailOutlined } from '@ant-design/icons';
import { withRouter }  from 'react-router-dom'
 class LoginTop extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password:'',
            isShow: false,
            isSuccess: null,
            text: ''
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
        if (this.state.username === '' || this.state.password === '') return
        // 没有值就return了
        cellphone({
            phone:this.state.username,
            password:this.state.password
        }).then(res=>{
            this.setState({
                text: '登陆成功',
                isShow: true
            }, ()=>{
                    setTimeout(()=>{
                        this.setState({
                            isShow:false
                        })
                        this.props.history.push('/')
                    },2000)
                }
            
            )
            
        }).catch (err => {
            this.setState({
                text: '登陆失败',
                isShow: true
            },()=>{
                setTimeout(()=>{
                    this.setState({
                        isShow:false
                    })
                },2000)
            })
        }) 
       
            
    }
    
    emailLogin=()=>{
        this.props.history.push('/emailLogin')
    }
    
    render() {
        // const {result} = this.state.result
        // 在render的时候  this.state.result = null下面就报错了 
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
                <div className={"message "+ (this.state.isShow? "show":"")}>
                    {/* {result.status===200?"登陆成功":"登陆失败"} */}
                    {/* {
                        this.state.isSuccess? <span>登陆成功</span> : <span>登陆失败</span>
                    } */}
                    {this.state.text}
                    {/* 登陆成功 */}
                </div>
                
            </div>

        )
    }
}



export default withRouter(LoginTop)
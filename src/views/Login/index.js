import React from 'react'
import LoginTop from '../../components/LoginTop/LoginTop.js'

export default class Login extends React.Component{
    render(){
        return(
            <div>
                <LoginTop username={"请输入用户名"} password={"请输入密码"} />
            </div>
        )
    }
}
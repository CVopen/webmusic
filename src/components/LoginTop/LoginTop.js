/*
 * @Author: zmx 
 * @Date: 2020-09-27 09:33:22 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-11-27 00:33:16
 */

import React, { Component } from 'react'
import './LoginTop.scss'
import { cellphone } from '../../api/userApi/index'
import { MailOutlined } from '@ant-design/icons';
import { withRouter }  from 'react-router-dom'
import { connect } from 'react-redux'
import bus from '../../utils/bus'
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
    componentDidMount(){
      window.document.onkeydown = (e) => {
        if(e.keyCode === 13){
          console.log(e.keyCode);
          this.clickHandler()
        }
      }

      bus.emit('location')
    }
    componentWillUnmount(){
      window.document.onkeydown = null
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
        cellphone({
            phone:this.state.username,
            password:this.state.password
        }).then(res=>{
            console.log(res.data);
            window.localStorage.setItem('token',res.data.token)
            window.localStorage.setItem('userInfo',JSON.stringify(res.data))
            window.localStorage.setItem('cookie',res.data.cookie)
            this.props.sendAction(res.data)
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

// const mapStateToProps = (state) => {
//   return {
//       subject_data: state.subject_data,
//   }
// }


// const mapDispatchToProps = (dispatch) => {

//   return {
      
//       init_sub_data(resp_data){
//           console.log(resp_data)
          
//               let action = {
//                   type:'get_subject_data',
//                   value:resp_data
  
//               }
//               dispatch(action)
//       }
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    sendAction: (data)=> {
      dispatch({
        type: 'set_userinfo',
        value: data
      })
    }
  }
}

export default connect(null,mapDispatchToProps)(withRouter(LoginTop))
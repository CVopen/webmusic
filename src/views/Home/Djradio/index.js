import React, { Component } from 'react'
import style from './index.module.scss'
import { catelist, recommendList, toplist, typeList } from '../../../api/djradio'
import ProgramList from '../../../components/djradio/ProgramList'
import Recommend from '../../../components/djradio/Recommend'
export default class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      cateList: [],
      toplist: [],
      recommendList: [],
      typeList: []
    }
  }

  componentDidMount() {
    this.getCateList()
    this.getRecommendList()
    this.getToplist()
  }
  // 获取分类
  getCateList = () => {
    catelist().then(res=>{
      console.log(res.data);
      this.setState({
        cateList: res.data.categories
      },() => {
        // eslint-disable-next-line array-callback-return
        this.state.cateList.map(item => {
          if(item.id < 12) {
            console.log(item.name);
            this.getTypeList({type:item.id,title:item.name})
              
          }
        })
      })
    })
  }
  // 推荐节目
  getRecommendList = () => {
    recommendList().then(res=>{
      console.log(res.data.programs);
      this.setState({
        recommendList: res.data.programs
      })
    })
  }
  // 电台节目榜
  getToplist = () => {
    toplist({limit: 10}).then(res=>{
      console.log(res.data.toplist);
      this.setState({
        toplist: res.data.toplist
      })
    })
  }
  // 获取分类推荐
  getTypeList = (param) => {
    typeList({
      type: param.type
    }).then(res => {
      const obj = [{
        title: param.title+'·电台',
        data: res.data.djRadios.slice(0, 4)
      }]
      // this.state.typeList.push(obj)
      this.setState({
        typeList: [...this.state.typeList,...obj]
      })
    })
  }
  render() {
    return (
      <div className={style.container}>
        <div className={style.logos}>
          {
            this.state.cateList.map(item => (
              <div key={item.id} className={style.logo_item}>
                <img src={item.pic56x56Url} alt=""/>
                <span>{item.name}</span>
              </div>
            ))
          }
         
        </div>
        <div className={style.programList}>
          <ProgramList title={'推荐节目'} data={this.state.recommendList} />
          <ProgramList title={'节目排行榜'} data={this.state.toplist} />
        </div>
        {
          this.state.typeList.map((item,index) => (
            <Recommend 
              key={index}
              data={item}
            />
          ))
        }
      </div>
    )
  }
}

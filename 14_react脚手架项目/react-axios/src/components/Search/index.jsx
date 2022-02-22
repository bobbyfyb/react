import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }

  search = () => {
    // 获取用户的输入
    const {keyWordElement:{value:keyWord}} = this
    // 发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false, isLoading:true})
    // 发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response=>{
        console.log('成功了！', response)
        // 请求成功后通知App更新状态
        this.props.updateAppState({isLoading:false, users:response.data.items})
      },
      error => {
        // 请求失败后通知App更新状态
        this.props.updateAppState({isLoading:false, err:error.message})
      }
    )
  }
}

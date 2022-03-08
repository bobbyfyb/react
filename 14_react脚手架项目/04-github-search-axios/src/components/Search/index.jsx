import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }



  search = async () => {
    // 获取用户的输入
    const { keyWordElement: { value: keyWord } } = this

    // 发送请求前通知List更新状态
    PubSub.publish('update', { isFirst: false, isLoading: true })

    /*     // 发送网络请求 --- 使用axios发送
        axios.get(`/api1/search/users?q=${keyWord}`).then(
          response => {
            console.log('成功了！', response)
            // 请求成功后通知List更新状态
            PubSub.publish('update', {isLoading:false, users:response.data.items})
          },
          error => {
            // 请求失败后通知List更新状态
            PubSub.publish('update', {isLoading:false, err: error.message})
          }
        ) */

    /*     //发送网络请求 --- 使用fetch发送
        fetch(`/api1/search/users2?q=${keyWord}`).then(
          (response) => {
            console.log('请求服务器成功了')
            return response.json()
          },
          // (error) => {
          //   console.log('请求失败了', error)
          //   return new Promise(() => {})
          // }
        ).then(
          (response) => {
            console.log('获取数据成功了', response)
          },
          // (error) => {
          //   console.log('获取数据失败了', error)
          // }
        ).catch(
          (error) => {
            console.log(error)
          }
        ) */

        // 使用fetch发送请求 --- 已优化
    try {
      const response = await fetch(`/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      console.log(data)
      PubSub.publish('update', {isLoading:false, users:data.items})
    } catch (error) {
      console.log('请求出错', error)
      PubSub.publish('update', {isLoading:false, err:error.message})
    }

  }
}

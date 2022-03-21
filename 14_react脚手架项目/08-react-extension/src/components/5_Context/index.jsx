import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class Demo extends Component {

    state = { userName: 'Tom', age: 18 }

    render() {
        return (
            <div className='parent'>
                <h3>我是Demo组件</h3>
                <h4>我的用户名是：{this.state.userName}</h4>
                <Provider value={{ username: this.state.userName, age: this.state.age }}>
                    <B />
                </Provider>

            </div>
        )
    }
}



class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                {/* <h4>我从Demo组件接收到的用户名是：{this.props.username}</h4> */}
                <C />
            </div>
        )
    }
}

/* class C extends Component {
    // 声明接受Context
    static contextType = MyContext
    render() {
      return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从Demo组件接收到的用户名是：{this.context.username}, 年龄是：{this.context.age}</h4>
        </div>
      )
    }
  } */



function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从Demo组件接收到的用户名是：
                <Consumer>
                    {value => `${value.username}, 年龄是：${value.age}`}
                </Consumer>
            </h4>
        </div>
    )
}

import React, { Component } from 'react'

export default class Demo extends Component {

    state = { count: 0 }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.increment}>点我加1</button>
            </div>
        )
    }

    increment = () => {
        // 对象式的setState
/*         //   1.获取原来的状态值
        const { count } = this.state
        // 2.更新状态
        this.setState({ count: count + 1 }, () => { console.log(this.state.count) })
        // console.log(this.state.count)
    */

        // 函数式的setState
        this.setState(state => ({count:state.count+1}))
    }
}

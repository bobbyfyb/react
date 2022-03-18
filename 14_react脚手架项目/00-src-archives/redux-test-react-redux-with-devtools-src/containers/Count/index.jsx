import React, { Component } from 'react'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 定义UI组件
class Count extends Component {

  render() {
    // console.log('UI组件接收到的props是：', this.props)
    return (
      <div>
        <h2>我是Count组件,下方组件总人数为：{this.props.numOfPerson}</h2>
        <h4>当前求和为: {this.props.count}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)

  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }

  }
  incrementAsync = (params) => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }
}




// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({
    count: state.count,
    numOfPerson: state.person.length
  }),
  // mapDispatchToProps的精简写法
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
  // mapDispatchToProps的一般写法
  /*     dispatch => ({
          increment: data => dispatch(createIncrementAction(data)),
          decrement: data => dispatch(createDecrementAction(data)),
          incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
      }) */
)(Count)

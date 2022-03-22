import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {

    state = { name: '珈乐carol' }

    /*     shouldComponentUpdate(nextProps, nextState){
            // if(this.state.name === nextState.name) return false
            return this.state.name === nextState.name?false:true
        }
     */
    render() {
        console.log("Parent --- render")
        const { name } = this.state
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>当前是：{name}</span><br />
                <button onClick={this.changeName}>点我换人</button>
                <Child name={name} />
            </div>
        )
    }

    changeName = () => {
        this.setState({ name: '贝拉bella' })
    }
}

class Child extends PureComponent {

    /*     componentDidUpdate(nextProps, nextState){
            return this.props.name === nextProps.name?false:true
        } */

    render() {
        console.log("Child --- render")
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接收到的是:{this.props.name}</span>
            </div>
        )
    }
}
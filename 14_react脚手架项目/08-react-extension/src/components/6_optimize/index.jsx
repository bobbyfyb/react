import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <Child/>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
            </div>
        )
    }
}
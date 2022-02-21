import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }

  getStudentData = ()=>{
    axios.get(
      'http://localhost:3000/api1/students'
    )
    .then((result) => {
      console.log('成功了！', result.data)
    }).catch((err) => {
      console.log('失败了！', err)
    });
  }

  getCarData = ()=>{
    axios.get(
      'http://localhost:3000/api2/cars'
    )
    .then((result) => {
      console.log('成功了！', result.data)
    }).catch((err) => {
      console.log('失败了！', err)
    });
  }
}


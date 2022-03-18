import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    render() {
        return (
            <div>
                <h2>我是Person组件, 上方组件求和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map(personObj => <li key={personObj.id}>{personObj.name} --- {personObj.age}</li>)
                    }
                </ul>
            </div>
        )
    }
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        //   console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
}


export default connect(
    state => ({ person: state.person, count: state.count }),
    { addPerson: createAddPersonAction }
)(Person)


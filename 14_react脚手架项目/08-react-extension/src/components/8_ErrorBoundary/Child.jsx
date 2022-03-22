import React, { Component } from 'react'

export default class child extends Component {
    state = {
/*         users: [
            { id: '001', name: '向晚Ava', age: '18' },
            { id: '002', name: '贝拉Bella', age: '24' },
            { id: '003', name: '珈乐Carol', age: '24' },
            { id: '004', name: '嘉然Diana', age: '20' },
            { id: '005', name: '乃琳Elieen', age: '24' }

        ] */
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map(userObj => <h4 key={userObj.id}>{userObj.name} --- {userObj.age}</h4>)
                }
            </div>
        )
    }
}

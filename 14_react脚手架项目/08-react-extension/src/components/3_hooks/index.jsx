import React from 'react'
import ReactDOM from 'react-dom'

export default function Demo() {

    const [count, setCount] = React.useState(0)
    const [myName, setMyName] = React.useState('Artorias')
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => setCount(count => count + 1), 1000)
        return () => clearInterval(timer)
    }, [])

    // // 加法的回调
    // function add() {
    //     //setCount(count+1) //第一种写法
    //     setCount(count => count + 1)
    // }

    // 改名的回调
    function changeName() {
        setMyName(myName => myName === 'Artorias' ? 'Ayanami_Asuka' : 'Artorias')
    }

    // 卸载组件的回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // 提示输入的回调
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <h1>我的名字是：{myName}</h1>
            <input type="text" ref={myRef}/>
            {/* <button onClick={add}>点我加1</button> */}
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>

        </div>
    )
}

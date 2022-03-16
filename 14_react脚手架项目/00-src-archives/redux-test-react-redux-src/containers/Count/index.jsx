// 引入Count的UI组件
import CountUI from '../../components/Count'
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value作为props的value - 状态
const mapStateToProps = state => ({count:state})

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props中的key，value作为props的value - 操作状态的方法
const mapDispatchToProps = dispatch => ({
    increment: data => dispatch(createIncrementAction(data)),
    decrement: data => dispatch(createDecrementAction(data)),
    incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
    })


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


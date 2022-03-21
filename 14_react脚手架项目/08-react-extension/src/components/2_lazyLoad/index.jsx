import React, { Component, lazy, Suspense } from 'react'
const Test = lazy(() => import('../1_setState'))
export default class Demo extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Test/>
        </Suspense>
      </div>
    )
  }
}

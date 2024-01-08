import React, { memo, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function   GrandParent() {
  const [count, setCount] = useState(0)
  const [randomNum, setRandomNum] = useState("")

  const handleCounter = () => setCount((prev) => prev + 1)
  const generateRandomNum = () => setRandomNum(Math.floor(Math.random() * 10) + 1)

  const callByParent = useCallback(() => { }, [randomNum])

  return (
    <div>
      <hr />
      <div style={{ border: "1px solid grey", padding: 10 }}>
        <h6>Hi, This is <b>Grand parent component</b> for checking useCallback.</h6>
        <b>Current count is</b>  : {count}
        <br />
        <br />
        <Parent randomNum={randomNum} callByParent={callByParent} />
        <Button onClick={handleCounter}>Count +/-</Button>
        <Button onClick={generateRandomNum} style={{ margin: "0 10px" }}>Generate Random Number</Button>
      </div>
    </div>
  )
}

const Parent = memo(function Parent({ randomNum, callByParent = () => { } }) {
  return (
    <div>
      {console.log("Parent Render")}
      <h6>Hi, This is <b>parent component</b> for checking useCallback.</h6>
      <b>Parent Props randomNum</b> : {randomNum}
      <br />
      <br />
      <Child />
    </div>
  )
})

const Child = memo(function Child() {
  return (
    <div>
      {console.log("Child Render")}
      <h6>Hi, This is <b>child component</b> for checking useCallback.</h6>
    </div>
  )
})



import React, { memo, useCallback, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function UseMemoDemo() {
  const [count, setCount] = useState(0)
  const [randomNum, setRandomNum] = useState(0)

  const handleCounter = () => setCount((prev) => prev + 1)
  const generateRandomNum = () => setRandomNum(Math.floor(Math.random() * 10) + 1)

  const getSuqOfNum = useMemo(()=>{
    console.log("Calculate squre") // 5sec
    return randomNum * randomNum
  },[randomNum])

  return (
    <div>
      <hr />
      <div style={{ border: "1px solid grey", padding: 10 }}>
        <h6>Hi, This is <b>Grand parent component</b> for checking useCallback.</h6>
        <b>Current count is</b>  : {count}
        <br />
        <b>Random num is</b>  : {randomNum}

        <br />
        <b>Square of random num is</b>  : {getSuqOfNum}

        <br />
        <br />
        <Button onClick={handleCounter}>Count +/-</Button>
        <Button onClick={generateRandomNum} style={{ margin: "0 10px" }}>Generate Random Number</Button>
      </div>
    </div>
  )
}






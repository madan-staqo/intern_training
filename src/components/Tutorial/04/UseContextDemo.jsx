import React, { createContext, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'

const CalcContext = createContext()

export default function UseContextDemo() {
    const [randomNum, setRandomNum] = useState(0)
    const generateRandomNum = () => setRandomNum(Math.floor(Math.random() * 10) + 1)

    return (
        <>
        <CalcContext.Provider value={{ randomNum, generateRandomNum }}>
            <div>
                <hr />
                <div style={{ border: "1px solid grey", padding: 10 }}>
                    <h6>Hi, This is <b>Grand parent component</b> for checking useCallback.</h6>
                    <br />
                    <b>Random num is</b>  : {randomNum}
                    <br />
                    <br />
                    <div style={{ border: '1px solid grey', padding: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Square />
                        <Cube />
                    </div>
                </div>
            </div>
        </CalcContext.Provider>
       
        </>
    )
}

function Square() {
    const useCalcContext = useContext(CalcContext)

    return (
        <div style={{ border: "1px solid grey", padding: 10, width: "100%" }}>
            <br />
            <b>Square of {useCalcContext?.randomNum} is</b>  : {useCalcContext?.randomNum * useCalcContext.randomNum}
            <br />
            <br />
            <Button onClick={useCalcContext.generateRandomNum} style={{ margin: "0 10px" }}>Generate Random Number</Button>
        </div>)
}


function Cube() {
    const useCalcContext = useContext(CalcContext)
    return (
        <div style={{ border: "1px solid grey", padding: 10, width: "100%" }}>
            <br />
            <b>Cube of {useCalcContext?.randomNum} is</b>  : {useCalcContext?.randomNum * useCalcContext.randomNum *useCalcContext.randomNum}
            <br />
            <br />
            <Button onClick={useCalcContext.generateRandomNum} style={{ margin: "0 10px" }}>Generate Random Number</Button>
        </div>)
}

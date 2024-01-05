import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
import { reducer } from './reducer'

let initialState = {
    num1: 0,
    num2: 0,
    result: 0
}

export default function Hook03() { // React Functional component
    const [state, dispatch] = useReducer(reducer, initialState)

    const addNumber = () => dispatch({ type: "ADD" })
    const SubtractNumber = () => dispatch({ type: "Subtract" })

    return (
        <div>
            <h4>Tut 03: Hooks</h4>
            <hr />
            <ol>
                <li><p>DOM: Dom will update only when state update</p></li>
                <li><p>Hook: That Maintain the state of component.</p></li>
                <li><p>useState,useEffect,useRef,useReducer,useCallback,useMemo,usecontext </p></li>
            </ol>
            <hr />
            <ul>
                <li>1. useState</li>
                <li>2. useEffec</li>
                <li>3. useRef</li>
                <li>
                    4. useReducer
                    <p>a. To build the complex logic. </p>
                    <div>
                        <input
                            type="number"
                            onChange={(e) => dispatch({ type: "Update", payload: { num1: e.target.value } })}
                            placeholder='First Number' />

                        <input
                            type="number"
                            onChange={(e) => dispatch({ type: "Update", payload: { num2: e.target.value } })}
                            placeholder='Second Number' />

                        <p>Result : {state?.result}</p>
                        <Button onClick={addNumber}>Add Number</Button>
                        <Button onClick={SubtractNumber}>Subtract Number</Button>
                    </div>

                </li>
            </ul>



        </div>
    )
}

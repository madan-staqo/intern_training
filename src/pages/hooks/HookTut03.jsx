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
            <h4>Tutorial 03: Hooks</h4>
            <hr />
            <ol>
                <li><b>DOM:</b> Dom will update only when state update</li>
                <li><b>Hook:</b> That Maintain the state of component or do an side effect.</li>
                <li><b>React Hooks:</b> useState, useEffect, useRef, useReducer, useCallback, useMemo,useContext </li>
            </ol>
            <hr />
            <ul>
                <li>useState:
                    <ul>
                        <li>Used for <b>update</b> the component state.</li>
                    </ul>
                </li>
                <li>useEffect:
                    <ul>
                        <li>Used for side effect inside in function component.</li>
                        <li>Used for lifecycle of component: <b>mount, unmount</b></li>
                    </ul>
                </li>
                <li>useRef:
                    <ul>
                        <li>Used for direct access the <b>DOM</b> tags.</li>
                        <li>Prevent From <b>Re-Rendering</b>.</li>
                    </ul>
                </li>
                <li>
                    useReducer
                    <ul>
                        <li>
                            To build the complex <b>logic</b> OR Split the logic.
                            <div style={{ border: "1px solid green", padding: 10, borderRadius: 10 }}>
                                <input
                                    style={{ margin: 10 }}
                                    type="number"
                                    onChange={(e) => dispatch({ type: "Update", payload: { num1: e.target.value } })}
                                    placeholder='First Number' />

                                <input
                                    type="number"
                                    onChange={(e) => dispatch({ type: "Update", payload: { num2: e.target.value } })}
                                    placeholder='Second Number' />

                                <p style={{ margin: 10 }}><b>Result :</b> {state?.result}</p>
                                <Button onClick={addNumber} style={{ margin: 10 }} >Add Number</Button>
                                <Button onClick={SubtractNumber} style={{ margin: 10 }}>Subtract Number</Button>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

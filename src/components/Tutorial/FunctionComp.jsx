import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function FunctionComp() {
    const [number, setNumber] = useState(0)
    const [numperType, setNumberType] = useState("")

    // Change the color
    const tellNumIsOddOrEven = () => {
        if (number % 2 === 0) {
            setNumberType("Even")
        } else {
            setNumberType("Odd")
        }
    }

    const handleValueChange = (e) => { setNumber(e.target.value) }
    return (
        <div>
            <h4>Functional component: Predict Number is Even/Odd</h4>
            <input
                type="number"
                placeholder='Please enter number'
                value={number}
                onChange={handleValueChange}

            />
            <div style={{ padding: '10px', borderRadius: "10px" }}>Number is: {numperType}</div>
            <Button variant="warning" onClick={tellNumIsOddOrEven}>Answer me</Button>
        </div>
    )
}

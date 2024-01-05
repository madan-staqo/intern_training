import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Box from '../components/Tutorial/Box';

export default function CompStatesTut02() {
    let [count, setCount] = useState(0)
    let [showBox, setShowBox] = useState(false)

    const handleCounter = () => setCount(count++);
    const handleShowBox = () => setShowBox(!showBox);

    const predictColor = (color)=> alert(color)
    return (
        <div>
            <h4 style={{ textAlign: "center" }}>Comp states: Mount, unmount, update,dependency array</h4>
            <hr />
            <p>Mount: Component Render</p>
            <p>Unmount: Component Unrender</p>
            <p>Update: Component Update</p>
            <hr />
            <p>Count : {count}</p>
            <Button variant='warning' onClick={handleCounter}>Change count</Button>

            <hr />
            <h4>Component : Used for re-use dynamically</h4>

            <Box  width={50} height={60} color={"red"} onClick={predictColor}/>
            <Box  width={100} height={90} color={"blue"} onClick={predictColor}/>

            {/* <Button variant='primary' onClick={handleShowBox}>Show/Hide</Button>
        {
            showBox && <Box />
        } */}
        </div>
    )
}

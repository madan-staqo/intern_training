import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Box({width,height,color,onClick=()=>{}}) {
    // const [width, setWidth] = useState(30)
    // const [height, setHeight] = useState(30)

    // useEffect(() => {
    //     alert("Box Mount")
    //     return () => {
    //         alert("Box UnMount")
    //     }
    // },[height,width]) // dependency array

    // const changeWidth = () => setWidth(width + 40)
    // const changeHeight = () => setHeight(height + 40)

    return (
        <>
            <div 
            onClick={()=>onClick(color)}
            style={{ border: `1px solid ${color}`, width: width, height: height }}></div>
            {/* <Button variant='primary' onClick={changeWidth}>Increas Width</Button>
            <Button variant='primary' onClick={changeHeight}>Increas Height</Button> */}
        </>
    )
}

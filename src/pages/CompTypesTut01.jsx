import React from 'react'
import ClassComp from '../components/Tutorial/ClassComp'
import FunctionComp from '../components/Tutorial/FunctionComp'

export default function CompTypesTut01() {
  return (
    <div style={{textAlign:"center"}}>
      <h3 style={{textAlign:"center"}}>Tutorial 01: Types of Component Types </h3>
      <hr />
      <br />
      <ClassComp />
      <br />
      <br />
      <FunctionComp />
    </div>
  )
}

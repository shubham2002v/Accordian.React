import React, { useState } from 'react'
import './Style.css'

const MyAccordian = ({question,answer}) => {
    const [show,setShow]=useState(false)

  return (
    <>
    <div className="box">
    <div className="main-heading">
        <p className="btn"onClick={()=>{setShow(!show)}}>{show? "➖":"➕" }</p>
        <h3>{question}</h3>
    </div>
    {show && <p className=' ans'>{answer}</p>}</div>
   </>)
}

export default MyAccordian
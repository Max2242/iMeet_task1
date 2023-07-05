import React, { useRef } from 'react'

export default function Input(props) {
  const inputBox= useRef()

  return (
    <div className='p-3 flex justify-around'>

      <input type="text" placeholder='Enter data here' ref={inputBox}  className='capitalize p-3 focus:outline-none border-slate-500 border w-[90%] text-transform-capitalize'/>
   
   <div className='cursor-pointer w-[50px] h-[50px] bg-[#878AF5] text-white text-3xl rounded-[50%] flex justify-center items-center ' onClick={()=>{
    props.handler(inputBox.current.value) 
    inputBox.current.value=" "}}>
    +</div>
    </div>
  )
}


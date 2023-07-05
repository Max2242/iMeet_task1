import React, { useState } from 'react'

export default function Item(props) {
  const[done,setDone]= useState(false);
  return (
    <div onClick={()=>setDone(!done)} className=" bg-[#878AF5] select-none w-full border-b-1 p-3 flex justify-between">
        <div>
            <span className={`${done===true ? 'line-through': ''} pr-3 text-[20px] capitalize`}>{props.items}</span>
        </div>
        <div className='text-[14px]' onClick={()=> props.removeHandler(props.id)}>
Delete
        </div>
    </div>
  )
}

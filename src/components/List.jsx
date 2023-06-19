import React from 'react'
import Item from  "./Item"

export default function List(props) {
  const items= props.data.map(
    (singleData,index)=>{
      return <Item removeHandler={props.removeHandler} key={index} id={index} items={singleData.items} time={singleData.time}/>
    }
  )
  return (
    <div className='text-[20px] p-3 border'>
      {items}
    </div>
  )
}

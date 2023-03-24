import React from 'react'
import MyModal from './MyModal'

export default function MyCard() {
  const handleClick = ()=>{

  }
  return (
    <div>
      <img className='h-72 w-full object-cover rounded-lg shadow-md' src='/image/내사진.jpg' >
        
      </img>
      <MyModal/>
    </div>
  )
}

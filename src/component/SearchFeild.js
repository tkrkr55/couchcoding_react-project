import React from 'react'

export default function SearchFeild() {
  return (
    <div className='flex'>
      <input placeholder='Search Anything...'
      className='bg-gray-50 border border-gray-300 text-sm w-full
      indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl'
      type='search' ></input>
      <button 
      className='bg-blue-500 px-6  py-2.5 text-white rounded-tr
      rounded-br focus:ring-2 focus:ring-blue-300 disabled-gray '
      >Search</button>
    </div>
  )
}

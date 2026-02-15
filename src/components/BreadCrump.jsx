import React from 'react'
import { useLocation } from 'react-router'

const BreadCrump = () => {

    let { pathname } = useLocation()

  return (
    <div className='flex gap-2 text-gray-400 mt-20.25'>
        <h2>Home</h2>
        <h2>/</h2>
        <h2>{pathname.split('/')[1]}</h2>
    </div>
  )
}

export default BreadCrump
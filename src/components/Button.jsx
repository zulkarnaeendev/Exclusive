import React from 'react'

const Button = ({ btn }) => {
  return (
    <div className='bg-reddish pt-4 pb-4 pr-12 pl-12 w-fit rounded-sm text-middle'>
        <button className='font-medium text-white cursor-pointer'>{btn}</button>
    </div>
  )
}

export default Button
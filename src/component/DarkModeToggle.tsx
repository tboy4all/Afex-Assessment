import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

interface DarkModeProps {
  onClick: () => void
  checked: boolean
}

const DarkModeToggle = ({ onClick, checked }: DarkModeProps) => {
  return (
    <button
      className='bg-gray-200 w-[45px] h-[16px] text-gray-500 rounded-lg p-[2px]'
      // onClick={onClick}
    >
      {checked ? (
        <div onClick={onClick} className={``}>
          <FaMoon className='ml-[25px] ' size={12} />
          <p className=' text-[0.4rem] mt-[-10px] mr-[25px]'>dark</p>
        </div>
      ) : (
        <div onClick={onClick}>
          <FaSun size={12} />
          <p className=' text-[0.4rem] mt-[-10px] ml-[10px]'>light</p>
        </div>
      )}
    </button>
  )
}

export default DarkModeToggle

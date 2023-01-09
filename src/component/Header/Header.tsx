import React from 'react'
import DarkModeToggle from '../DarkModeToggle'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme } from '../Header/headerSlice'
import { RiArrowDropDownLine, RiArrowRightSLine } from 'react-icons/ri'

const Header = () => {
  // const [darkMode, setDarkMode] = React.useState(false)

  // const handleDarkModeToggle = () => {
  //   setDarkMode(!darkMode)
  // }
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.header.darkMode)

  return (
    <div className='flex justify-evenly w-full h-[40px] items-center mb-2 bg-white'>
      <div className='flex justify-between w-[45%]   items-center text-[0.5rem] '>
        <img className='h-[40px] w-[55px] ' src='./commx.png' alt='comX' />
        <DarkModeToggle
          onClick={() => dispatch(toggleTheme())}
          checked={theme}
        />
      </div>
      <div className='flex justify-between w-[45%] text-[0.5rem] items-center'>
        {/* <div>&#62;</div> */}
        <div className='h-[3.5rem] overflow-hidden border-r-2'></div>
        <RiArrowRightSLine className='mr-[10rem]' />

        <div className='flex justify-evenly items-center w-2/3 font-medium'>
          <p className='text-gray-300 text-[0.6rem] '>
            CASH BALANCE <br />
            <strong className='text-black text-[0.7rem] '>N8,374,763</strong>
          </p>
          <p className='text-gray-300 text-[0.6rem]'>
            SECURITIES VALUE <br />
            <strong className='text-black text-[0.7rem]'>N8,374,763</strong>
          </p>
          <p className='text-gray-300 text-[0.6rem]'>
            LOAN BALANCE <br />
            <strong className='text-black text-[0.7rem]'>N8,374,763</strong>
          </p>
          <div className='h-[3.5rem] overflow-hidden border-r-2'></div>
        </div>
        <button className=' bg-black text-white text-[0.5rem] w-[30px] h-[15px]'>
          DEMO
        </button>
        <RiArrowDropDownLine />
      </div>
    </div>
  )
}

export default Header

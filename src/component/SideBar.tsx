import React from 'react'
import { FiBriefcase, FiUsers, FiSettings } from 'react-icons/fi'
import { RiDashboardLine } from 'react-icons/ri'
import { AiOutlineLineChart, AiOutlineFile } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='w-[100px]  bg-white'>
      <nav>
        <ul className='flex flex-col items-center  text-gray-900'>
          <li className='text-xs py-6 flex flex-col items-center justify-center'>
            <RiDashboardLine size={20} />
            <p>Overview</p>
          </li>
          <li className='text-xs py-6 flex flex-col items-center justify-center text-red-800'>
            <AiOutlineLineChart size={20} />
            <p>Market</p>
          </li>
          <li className='text-xs py-6 flex flex-col items-center justify-center'>
            <FiBriefcase size={20} />
            <p>Portfolio</p>
          </li>
          <li className='text-xs py-6 flex flex-col items-center justify-center'>
            <FiUsers size={20} />
            <p>Community</p>
          </li>
          <li className='text-xs py-6 flex flex-col items-center justify-center'>
            <AiOutlineFile size={20} />
            <p>Reports</p>
          </li>
          <li className='text-xs py-6 flex flex-col items-center justify-center'>
            <FiSettings size={20} />
            <p>Setting</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

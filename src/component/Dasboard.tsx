import React from 'react'
import ContainerTable from '../component/ContainerTable'
import Sidebar from './SideBar'
import SidebarSub from './SideBarSub'
const Dasboard = () => {
  return (
    <div className='flex gap-2 '>
      <Sidebar/>
      <SidebarSub/>
      <ContainerTable/>

    </div>
  )
}

export default Dasboard
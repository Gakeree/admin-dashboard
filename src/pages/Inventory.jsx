import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/sidebar'

const Inventory = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  } 
  return (
    <div className='grid-container'> 
    <Header OpenSidebar={OpenSidebar} />
  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  <h3>Inventory</h3>

</div>
  )
}

export default Inventory
import React from 'react'
import Navbar from "../../components/Navbar"
import Sidebar from '../../components/Sidebar'

function index() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
       <Sidebar/>
   <div style={{backgroundImage: "url('/texture.png')", backgroundRepeat:'repeat', flex:1 }}>
  
    <p className='p-20 text-xl font-bold'>Weekly Activity</p>
        </div>
        </div>
        </div>
   
  )
}

export default index
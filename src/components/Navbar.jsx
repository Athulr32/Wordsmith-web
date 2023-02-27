import { Avatar } from '@mui/material'

function Navbar() {
  return (
    <div className="shadow-xl">
      <div className="flex flex-row justify-between items-center" >
        <img src="/logo.png" style={{height:30, marginLeft:40}} alt="no image"/>
        <div className="flex flex-row p-3 items-center">
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer ">Home</p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer">Dashboard</p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer">Your Activities</p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer">About us</p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer">Donate</p>
        <div className="mx-10"><Avatar src=""/></div>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar
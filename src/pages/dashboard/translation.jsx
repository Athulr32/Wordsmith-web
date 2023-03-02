import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

function translation() {
  return (
    <div>
<Navbar />
<div className='flex'>
  <Sidebar />
  <div
    style={{
      backgroundImage: "url('/texture.png')",
      backgroundRepeat: "repeat",
      flex: 1,
    }}
  >Translation</div></div></div>
  )
}

export default translation
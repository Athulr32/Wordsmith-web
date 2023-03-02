import { height } from "@mui/system"
import Footer from "../../components/Footer"
import LandingScreen from "../../components/LandingScreen"
import Navbar from "../../components/Navbar"



function index() {


  return (
    <div >
    <Navbar/>
    <div style={{backgroundImage: "url('/texture.png')", backgroundRepeat:'repeat' }}>
    <LandingScreen/>
    </div>
   <Footer/>
    </div>
  )
}

export default index
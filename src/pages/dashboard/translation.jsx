import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import { getCookie } from "cookies-next"
import SidebarHindi from "../../components/HindiComponents/SidebarHindi"
import NavbarHindi from "../../components/HindiComponents/NavbarHindi"
import { useEffect } from "react";
import { useState } from "react";

function translation() {


  const [language,setLanguage] = useState("English")
  useEffect(()=>{
    const lang = getCookie("language")
    setLanguage(lang);
  })




  return (
    <div>
      {language === "Hindi" ? <NavbarHindi /> : <Navbar />}
      <div className='flex'>
        {language === "Hindi" ? <SidebarHindi /> : <Sidebar />}
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
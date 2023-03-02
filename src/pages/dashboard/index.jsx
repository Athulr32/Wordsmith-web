import React from 'react'
import Navbar from "../../components/Navbar"
import Sidebar from '../../components/Sidebar'
import { useEffect } from 'react'
import Router from 'next/router'
import { getCookie } from 'cookies-next'

function index() {




  useEffect(() => {

    const token = getCookie("token");
    console.log(token)
    if (token) {
      fetch("http://localhost:4000/verify", {
        headers: {
          "Content-Type": "application/json",

        },
        method: "POST",
        body: JSON.stringify({
          token
        })
      }).then((res) => {
        return res.json();
      }).then((data) => {

        if (data.flag !== true) {
          Router.push("/")
        }
      })
    }




  }, [])



  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div style={{ backgroundImage: "url('/texture.png')", backgroundRepeat: 'repeat', flex: 1 }}>

          <p className='p-20 text-xl font-bold'>Weekly Activity</p>
        </div>
      </div>
    </div>

  )
}

export default index
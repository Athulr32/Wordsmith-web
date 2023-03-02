import React, { useState } from 'react'
import Navbar from "../../components/Navbar"
import Sidebar from '../../components/Sidebar'
import { useEffect } from 'react'
import Router from 'next/router'
import { getCookie } from 'cookies-next'

function index() {

    const [progress,setProgress]= useState(0);



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

        fetch("http://localhost:4000/getDifficultyLevel", {
          headers: {
            "Content-Type": "application/json",

          },
          method: "POST",
          body: JSON.stringify({
            token
          })

        }).then(respo => {
          return respo.json()
        }).then((data) => {


          const total = data.easy + data.medium + data.hard;
          setProgress(total)


        })




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

          <div style={{ display: "flex" }}>

            <div style={{ padding: "50px", width: "800px",backgroundColor:"white",marginLeft:"30px", borderRadius: 10, border: "solid 1px #D9E0E6" }}>
              <div style={{ padding: "0px 0px 30px 0px" }}> Vocab progress</div>

              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index
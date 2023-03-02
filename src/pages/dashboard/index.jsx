import React, { useState } from 'react'
import Navbar from "../../components/Navbar"
import Sidebar from '../../components/Sidebar'
import { useEffect } from 'react'
import Router from 'next/router'
import { getCookie } from 'cookies-next'
import { Doughnut } from 'react-chartjs-2';
import SidebarHindi from "../../components/HindiComponents/SidebarHindi";
import NavbarHindi from "../../components/HindiComponents/NavbarHindi";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';



function index() {

  const [progress, setProgress] = useState(0);


  ChartJS.register(ArcElement, Tooltip, Legend);


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const data2 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  const [language, setLanguage] = useState("English");


  useEffect(() => {
    const lang = getCookie("language");
    setLanguage(lang);
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
      {language === "Hindi" ? <NavbarHindi /> : <Navbar />}
      <div className='flex'>
        {language === "Hindi" ? <SidebarHindi /> : <Sidebar />}
        <div style={{ backgroundImage: "url('/texture.png')", backgroundRepeat: 'repeat', flex: 1 }}>

          <p className='p-20 text-xl font-bold'>Weekly Activity</p>

          <div className='flex' style={{ marginLeft: 0, marginTop: -20, marginBottom: 20, justifyContent: "space-around", marginRight: 300 }}>
            <div style={{ height: 400, width: "700px" }}><Line options={options} data={data} /></div>

            <div style={{ height: 400, marginLeft: 0, }}><Doughnut data={data2} /></div>
          </div>

          <p className='text-xl font-bold ml-20' style={{ marginBottom: 120 }}>Section wise Progress</p>
          <div style={{ display: "flex", marginTop: -70, marginLeft: 50 }}>

            <div style={{ padding: "30px", width: "400px", backgroundColor: "white", marginLeft: "30px", borderRadius: 10, border: "solid 1px #D9E0E6" }}>
              <div style={{ padding: "0px 0px 30px 0px", fontSize: 16, fontWeight: "bold" }}> Vocab progress</div>

              <div class="w-full bg-gray-200 rounded-full bg-gray">
                <div class="bg-[#00A58A] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "85%", height: 15 }}> </div>
              </div>

            </div>
            <div style={{ padding: "30px", width: "400px", backgroundColor: "white", marginLeft: "30px", borderRadius: 10, border: "solid 1px #D9E0E6" }}>
              <div style={{ padding: "0px 0px 30px 0px", fontSize: 16, fontWeight: "bold" }}> Vocab progress</div>

              <div class="w-full bg-gray-200 rounded-full bg-gray">
                <div class="bg-[#00A58A] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "55%", height: 15 }}> </div>
              </div>

            </div>

            <div style={{ padding: "30px", width: "400px", backgroundColor: "white", marginLeft: "30px", borderRadius: 10, border: "solid 1px #D9E0E6" }}>
              <div style={{ padding: "0px 0px 30px 0px", fontSize: 16, fontWeight: "bold" }}> Vocab progress</div>

              <div class="w-full bg-gray-200 rounded-full bg-gray">
                <div class="bg-[#00A58A] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "25%", height: 15 }}> </div>
              </div>

            </div>



          </div>


          {/* <div style={{height:400, marginLeft:20, marginTop:30}}><Line options={options} data={data} /></div> */}

        </div>
      </div>
    </div>

  )
}

export default index
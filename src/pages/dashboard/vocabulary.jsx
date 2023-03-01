import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { use, useEffect, useState } from "react";
import closeButton from "../../../public/close.svg";
import Image from "next/image";

function vocabulary() {
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [familiar,setFamiliar]= useState(0);
  const [notFamiliar,setNotFamiliar]= useState(0);

  useEffect(()=>{
    //fetch from database
    // const d = fetchfromdatabase();
    const d=['hello','aaron','athul']
    setData(d);
  },[]);

  function known(){
    setFamiliar(familiar+1)
    
  }

  function notknown(){
    setNotFamiliar(notFamiliar+1)
  }

  // console.log(data);

  function addInterest(e) {
    setSelected(() => {
      if (selected.includes(e.target.value)) {
        return selected;
      }
      return [...selected, e.target.value];
    });
  }

  function removeInterest(e) {
    console.log(e.currentTarget.value);
    setSelected(() => {
      return selected.filter((value) => {
        return value != e.target.value;
      });
    });
  }

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
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "auto",
                marginTop: 80,
                width: 1100,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className='bg-white p-20 rounded-[20px] '
                style={{ border: "solid 1px #D9E0E6" }}
              >
                <p className='text-5xl font-bold mb-12'>Abnegation</p>
                <p className='mb-20'>Renouncing a belief or doctrine</p>
                <p>Example: “I believe in the abnegation of political power”</p>
              </div>
              <div
                className='flex justify-between '
                style={{ margin: "auto", marginTop: 40 }}
              >
                <button
                onClick={known}
                  style={{
                    backgroundColor: "#039982",
                    padding: 13,
                    color: "white",
                    width: 530,
                    borderRadius: 10,
                    marginRight: 40,
                  }}
                >
                  Know
                </button>
                <button
                  style={{
                    backgroundColor: "#DD6D6D",
                    padding: 13,
                    color: "white",
                    width: 530,
                    borderRadius: 10,
                  }}
                  onClick={notknown}
                >
                  Dont Know
                </button>
              </div>
              <div className='flex justify-center mt-12 '>
                <div
                  className='bg-white rounded-[10px] p-8 mr-12 flex-col justify-center items-center'
                  style={{ border: "solid 1px #D9E0E6" }}
                >
                  <p className='text-[#039982] font-bold text-3xl mb-9'>
                    {familiar}
                  </p>
                  <p>Known Words</p>
                </div>
                <div
                  className='bg-white rounded-[10px] p-8 flex-col justify-center items-center'
                  style={{ border: "solid 1px #D9E0E6" }}
                >
                  <p className='text-[#DD6D6D] font-bold text-3xl mb-9'>
                    {notFamiliar}
                  </p>
                  <p>Unknown Words</p>
                </div>
              </div>
            </div>
            <div
              className='bg-white p-10 rounded-[20px] mt-20 mr-20 flex-col'
              style={{ border: "solid 1px #D9E0E6" }}
            >
              <p className="mb-5 font-medium text-xl">Selected Interests</p>
              <div className='flex  text-white' style={{flexWrap:"wrap", width:200}}>
                {selected.map((value, index) => {
                  return (
                    <button
                      onClick={removeInterest}
                      value={value}
                      className='p-2 mr-5 text-sm mb-3'
                      style={{
                        backgroundColor: "#00C1A2",
                        borderRadius: "10px",
                      }}
                      key={index}
                    >
                      {value}{" "}
                      <Image
                        style={{ display: "inline-block", marginLeft: "2px" }}
                        src={closeButton}
                        alt='close'
                      />
                    </button>
                  );
                })}
              </div>
              <hr className="mt-5"></hr>
              <p className="mb-5 mt-8 font-medium text-xl">Interests</p>
              <div style={{flexWrap:"wrap", width:200}}>
                {data.map((value)=>{
                  return(
                     <button
                     onClick={addInterest}
                     value={value}
                     className='p-2 mr-5 mb-3 text-sm text-white'
                     style={{ backgroundColor: "#00C1A2", borderRadius: "10px" }}
                   >
                     {value}
                   </button>)
                
                })}
           

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default vocabulary;

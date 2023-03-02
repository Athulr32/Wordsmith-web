import { useState } from "react"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import axios from "axios";
import { Button } from "@mui/material";

function grammar() {

const [question,setQuestion] = useState("Tell us a bit about yourself");
const [count,setCount] = useState(0)
const [userInput,setUserInput] = useState("")

const handleChange = (event) => {
  setUserInput(event.target.value);
};


// const [data,setData]= useState([]);

// function handleSubmit(){
// //     const encodedParams = new URLSearchParams();
// // encodedParams.append("language", "en-US");
// // encodedParams.append("text","this is a error" );

// // const options = {
// //   method: 'POST',
// //   url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
// //   headers: {
// //     'content-type': 'application/x-www-form-urlencoded',
// //     'X-RapidAPI-Key': 'a80c4af8b0msh6942e237781f3a2p140239jsnbd13b084cde3',
// //     'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com'
// //   },
// //   data: encodedParams
// // };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });
// }
const questionlist=[ "Tell us a bit about your favourite sport","Tell us a bit about your favourite pet animal","How did you celebrate your last Birthday ?","Tell us a bit about your Hometown", "Tell us a bit about your favourite tourist destination","Tell us a bit about your favourite Food"]

function questionHandler(){
  setCount((count%5)+1)
  setQuestion(questionlist[count])
}

function CheckErrors(){
  
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
      padding:40,
    }}
  >
   <div className="flex items-center justify-between mb-10"><p className="text-2xl font-bold mr-10">{question}</p><Button variant="contained" style={{backgroundColor:"#00A58A", padding:10,color:"white", borderRadius:10,}} onClick={questionHandler}>Change Question</Button></div> 
 <div style={{padding:20,border:"solid 1px #D9E0E6", backgroundColor:"white", borderRadius:10,}}><textarea value={userInput} onChange={handleChange} placeholder="Enter your Answer here" style={{ border:0, outline:0, width:"100%", height:600}}></textarea>
 <button style={{backgroundColor:"#00A58A", padding:10,color:"white", borderRadius:10,}} onClick={CheckErrors}>Check for errors</button>
 <p className="mt-5">
  {userInput}
 </p>
 </div>
    </div></div></div>
  )
}

export default grammar
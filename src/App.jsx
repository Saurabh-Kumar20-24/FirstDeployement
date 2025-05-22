import React from 'react'
import Header from './components/Header'
import '../src/App.css'
import { Button, Typography } from '@mui/material'
import CourseCard from './components/CourseCard'

const courseList= [{
  img: "https://media.geeksforgeeks.org/wp-content/uploads/20240116180351/what-is-web-design-copy.webp",
  title: "Web designing",
  desc: "Consectetur laboris Lorem ut amet Lorem est eu non magna."
},
{
   img: "https://imgs.search.brave.com/7nq6HcUYfSiOEMaeyFXjA4xuqJG4FV4mtvZkdJy7u0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91aXph/cmQuaW8vc3RhdGlj/LzQ1OTM1YjNmMTgz/YzNhODk0ZmUxOTYz/NzQ0N2Y2NWQ3LzY5/MjZhLzBmNTNmZTc0/MzVlYTlmZWM1MmRh/NWU1YTM5YWJjYmI2/Y2JjNmE4NjEtMTIw/MHg3NTAuanBn",
  title: "App designing",
  desc: "Consectetur laboris Lorem ut amet Lorem est eu non magna."
},
{
   img: "https://imgs.search.brave.com/lR8OBnpjUoC1eBHLsW9MilnnoEWYpIClatPanDGx9LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW52ZXN0b3BlZGlh/LmNvbS90aG1iL2lE/dXNqc0gwZ1lxcEdW/UU9JTHZLVlNsSHNW/az0vMTUwMHgwL2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L2RhdGEtYW5hbHl0/aWNzLTQxOTgyMDct/MS1hZDk3MzAxNTg3/YWM0MzY5OGEwOTU2/OTBiYzU4YzRjMS5q/cGc",
  title: "Data analytics",
  desc: "Consectetur laboris Lorem ut amet Lorem est eu non magna."
}]

const App = () => {
  return (
   <div style={{minHeight: "100vh"}}>
    <Header/>
    <div style={{marginTop: "20px"}}>
      <Typography textAlign='center' variant='h5'>
      Welcome to MY_APP   
    </Typography>
      <Typography textAlign='center' marginTop='10px'>
       Lorem quis consectetur ut consequat sunt. Consectetur consectetur mollit nisi est magna et nulla irure. Exercitation commodo veniam sint nostrud aliqua voluptate dolore commodo do velit. Laboris anim Lorem exercitation laborum qui aute. 
    </Typography>
    </div>
     <div style={{display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "10px", justifyContent:"center"}}>
       {courseList.map((item,idx)=>{
      return <CourseCard key={idx} img={item.img} title={item.title} desc={item.desc}/>
    })}
     </div>
     <footer style={{textAlign:"center"}}>
      Made by ❤️ Raja
     </footer>
   </div>
  )
}

export default App


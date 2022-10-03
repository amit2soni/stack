

import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import AllQuestions from './AllQuestions'
import './css/index.css'
const Main = () => {

    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("https://api.stackexchange.com/2.3/questions?pagesize=5&order=desc&sort=activity&site=stackoverflow",{method:"GET"})
        .then(response => {
          return response.json()
        })
        .then(data => {
          
          setUsers(data.items)
          console.log(users);
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div className='main'>
        <div className='main-container'>
          <div className='main-top'>
            <h2>Questions</h2>
          </div>
          <div className='main-dec'>
          <div className='main-filter'>
             <div className="main-tabs">
               <div className='main-tab'>
                 <Link style={{backgroundColor:"orange", borderRadius:"8px",color:"white"}}>interesting</Link>
               </div>
               <div className='main-tab'>
                 <Link>featured</Link>
               </div>
               <div className='main-tab'>
                 <Link>hot</Link>
               </div>
               <div className='main-tab'>
                 <Link>week</Link>
               </div>
               <div className='main-tab'>
                 <Link>month</Link>
               </div>
             </div>
          </div>
          </div>
           <div className='questions'>
            <div className='question'>
                {
                     users.map((item,i)=>
                     <AllQuestions title={item.title} link={item.link} view={item.view_count} ans={item.answer_count}  />
                    )
              
                }
             </div>
          </div>
        </div>
       
    </div>
  )
}

export default Main

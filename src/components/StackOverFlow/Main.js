

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
                 <Link  onClick={fetchData} style={{backgroundColor:"orange", borderRadius:"8px",color:"white"}}>interesting</Link>
               </div>
               <div className='main-tab'>
                 <Link onClick={fetchData} >featured</Link>
               </div>
               <div className='main-tab'>
                 <Link onClick={fetchData} >hot</Link>
               </div>
               <div className='main-tab'>
                 <Link onClick={fetchData} >week</Link>
               </div>
               <div className='main-tab'>
                 <Link onClick={fetchData} >month</Link>
               </div>
             </div>
          </div>
          </div>
           <div className='questions'>
            <div className='question'>
                {
                     users.map((item,i)=>
                     <AllQuestions title={item.title} link={item.link} view={item.view_count} ans={item.answer_count} owner={item.owner.display_name} vote={item.score} tags={item.tags}/>
                    )
              
                }
             </div>
          </div>
        </div>
       <div className="footer">
         <img src="https://raw.githubusercontent.com/github/explore/9cd02d2b1e7afc18a6e69c0648160662db200f2e/topics/stackoverflow/stackoverflow.png" alt="footer"></img>
         <h3>Looking for more?</h3>
       </div>
    </div>
  )
}

export default Main

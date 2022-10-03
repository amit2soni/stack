
import React from "react"
import { Link } from 'react-router-dom'
import './css/index.css'
function AllQuestions(props) {

  return (
    <div className='all-questions'>
       <div className='all-questions-container'>
        
         <div className='all-questions-left'>
           <div className='question-answer'>
              <Link>{props.title}</Link>
              <div style={{width:"90%"}}>

              </div>
              <div>
                 <a href={props.link}> {props.link}</a>
              </div>
              <div style={{display:"flex"}}>
                  <span className='question-tags'>react</span>
                  <span className='question-tags'>ant</span>
                  <span className='question-tags'>frontend</span>
              </div>
              <div className='author'>
                  <p>modified 1 week ago amit2soni</p>
              </div>
           </div>
         </div>
         <div className='all-questions-right'>
           <div className='all-options'>
               <div className='all-option'>
                   <p>0</p><span>votes</span>
               </div>
               <div className='all-option'>
                   <p>{props.ans}</p><span>answers</span>
               </div>
               <div className='all-option'>
                   <p>{props.view}</p><span>views</span>
               </div>
           </div>
        </div>
         
      </div>
            
    </div>
  )
}

export default AllQuestions


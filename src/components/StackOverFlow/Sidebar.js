import React from 'react'
import { Link } from 'react-router-dom'
import "./css/index.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebar-container'>
        <div className='sidebar-options'>
        <div className='sidebar-option'>
          <i class="bi bi-question"></i><Link to="/" className='tag'>QUESTIONS</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-bag"></i><span><Link className='tag'>JOBS</Link></span>
        </div>
        <div className='sidebar-option'>
            
        <i class="bi bi-file-earmark-code"></i><Link className='tag'>DOCUMENTATION</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-tags"></i>
          <Link className='tag'>TAGS</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-person"></i>
          <Link className='tag'>USERS</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-inboxes"></i>
          <Link className='tag'>BADGES</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-question-octagon"></i>
          <Link className='tag'>ASK QUESTIONS</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-stack"></i>
          <Link className='tag'>STACK EXCHANGE</Link>
        </div>
        <div className='sidebar-option'>
        <i class="bi bi-inbox"></i>
          <Link className='tag'>INBOX</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

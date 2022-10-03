
import React from 'react'
import './css/Header.css';

function Header() {
  return (
    <div>
      <header>
        <div className='header-container'>
          <div className='header-left'>
            <img src="https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Logo.wine.svg" alt="logo" />
          </div>
          <div className='header-middle'>
            <div className='header-search-container'>
            <i class="bi bi-search" ></i>
             <input type="text" placeholder='Search....'></input>
            </div>
          </div>
          <div className='header-right'>
            <div className='header-right-container'>
            <div className='help'>
            <i class="bi bi-info-circle" > </i><span>Help</span>
            </div>
            <div className='tour'>
            <i class="bi bi-tv"> </i><span>Tour</span>
            </div>
            <div className='avator'>
            <img src="https://cdn.vectorstock.com/i/1000x1000/14/64/monkey-ape-coder-logo-mascot-programmer-vector-28641464.webp" class="rounded-circle" style={{width: "40px"}}
              alt="Avatar" />
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

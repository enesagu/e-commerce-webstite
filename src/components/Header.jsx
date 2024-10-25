import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-betwen"}}>
        <div className='logo-div'>
            <img className='logo' src='../public/favicon2.png'/>
            <p className='logo-text'>FireNanit</p>
        </div>

        <div className='search-input'>
            <input type='text' placeholder='Search anyThing'/>
        </div>


    </div>
  )
}

export default Header
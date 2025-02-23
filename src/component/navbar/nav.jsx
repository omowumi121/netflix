import React from 'react'
import '../navbar/nav.css'
import fpp from '../../assets/fpp.png'
function nav() {
  return (
    <div className='navbar'>
      <img src={fpp} alt="" />
      <div className='btn-b'>
        <button><a href="#"></a>sign up</button>
      </div>
</div>
  )
}

export default nav
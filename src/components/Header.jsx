import React from 'react'
import seataooImg from '../assets/seataoo-img.png'

const Header = () => {
     return (
          <div className='bg-white text-center border-0 border-bottom border-danger border-5'>
               <img src={seataooImg} alt="" className='img-fluid bg-warning' style={{height: "100px"}}/>     
          </div>
     )
}

export default Header
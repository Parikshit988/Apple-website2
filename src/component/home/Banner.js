import React from 'react'
import './Banner.css'
import bannerImage from '../assets/none.png'
function Banner() {
  return (
    <div className='banner-container'>
    <div className='left-banner'>
        <h5 className='summer'>SUMMER 2020</h5>
        <h1 className='new-collection'>NEW COLLECTION</h1>
        <h4 className='content'>We know how large objects will act, <br/> but things on a small scale.</h4>
        <button className='shop-now-button'> <h3> SHOP NOW</h3></button>
    </div>
    <div className='right-banner'> 
      <img src={bannerImage} alt="girl"/>
    </div>
</div>
  )
}

export default Banner
import React from 'react'
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt__brand-img-container'>
        <img src={google} alt="" />
      </div>
      <div className='gpt__brand-img-container'>
        <img src={slack} alt="" />
      </div >
      <div className='gpt__brand-img-container'>
        <img src={atlassian} alt="" />
      </div>
      <div className='gpt__brand-img-container'>
        <img src={dropbox} alt="" />
      </div>
      <div className='gpt__brand-img-container'>
        <img src={shopify} alt="" />
      </div>
    </div>
  )
}

export default Brand
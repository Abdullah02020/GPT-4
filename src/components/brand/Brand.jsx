import React from 'react'
import "./brand.css"
import {google, slack, atlassian, dropbox, shopify} from "../brand/brands"
const Brand = () => {
  return (
    <div className=' gpt3__brand pd-y flex'>
      <img src= {google} alt="googel" />
      <img src= {slack} alt="slack" />
      <img src= {atlassian} alt="atlassian" />
      <img src= {dropbox} alt="dropbox" />
      <img src= {shopify} alt="shopigy" />
    </div>
  )
}

export default Brand

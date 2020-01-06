import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const NotFound = () => {
  return ( 
    <div>
      <h1 className="title"> 404 </h1>
      <h1 className="subtitle"> No existe</h1>
      <ButtonBackToHome />
    </div>
   )
}
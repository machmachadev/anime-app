import React from 'react'
import './rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

function Rating({score}) {
    //  score = parseInt(rating)
    //  console.log(rating)

  return (
    <div className='rating mb-2'>{
      score<=10 && score>9 && <>
      <FontAwesomeIcon icon={faStar} className='star'/>
      <FontAwesomeIcon icon={faStar} className='star'/>
      <FontAwesomeIcon icon={faStar} className='star'/>
      <FontAwesomeIcon icon={faStar} className='star'/>
      <FontAwesomeIcon icon={faStar} className='star'/>
      <span className='ms-3 score'>{score}</span>
      
      </>
  }
  {
     score<=9 && score>8 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStarHalfStroke} className='star'/>
     <span className='ms-3 score'>{score}</span>
      
      </>
  }
  {
     score<=8 && score>7 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
      
       
       </>
  }
  {
     score<=7 && score>6 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStarHalfStroke} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
       
       
       </>
  }
  {
     score<=6 && score>5 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
       
      
       </>
  }
  {
     score<=5 && score>4 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     
       
     <FontAwesomeIcon icon={faStarHalfStroke} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
       
       
       </>
  }
  {
     score<=4 && score>3 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
       
       
       </>
  }
  {
     score<=3 && score>2 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStarHalfStroke} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
       
       
       </>
  }
  {
     score<=2 && score>1 && <>
     <FontAwesomeIcon icon={faStar} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3 score'>{score}</span>
       
       </>
  }
  {
     score<=1 && score>0 && <>
     <FontAwesomeIcon icon={faStarHalfStroke} className='star'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <FontAwesomeIcon icon={faStar} color='white'/>
     <span className='ms-3' style={{color :'black'}}>{score}</span>
       
       </>
  }
  {
       score===0 && <>
       <FontAwesomeIcon icon={faStar} color='white'/>
       <FontAwesomeIcon icon={faStar} color='white'/>
       <FontAwesomeIcon icon={faStar} color='white'/>
       <FontAwesomeIcon icon={faStar} color='white'/>
       <FontAwesomeIcon icon={faStar} color='white'/>
       <span className='ms-3 score'>{score}</span>
       
       
       </>
  }
  </div>
  )
}

export default Rating
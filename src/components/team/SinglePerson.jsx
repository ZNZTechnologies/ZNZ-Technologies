import React from 'react'
import style from './team.module.css'

const SinglePerson = ({photo}) => {
  return (
    <div className={style.singleCard} data-aos="fade-left">
      <img src={`assets/photos/${photo}`} alt=""width={385} height={467}/>
    </div>
  )
}

export default SinglePerson

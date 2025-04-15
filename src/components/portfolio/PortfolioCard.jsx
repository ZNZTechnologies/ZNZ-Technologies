import React from 'react'
import style from './portfolio.module.css'

const PortfolioCard = ({label,pic}) => {
  return (
    <div>
      <div className={style.cardImageContainer} data-aos="slide-left">
        <img src={pic} alt="" width={336} height={268}/>
        <button className={style.cardbtn}>Visit Website</button>
      </div>
      <div className={style.cardTypo}> 
        <h3>{label}</h3>
        {/* <span>Sports website</span> */}
      </div>
    </div>
  )
}

export default PortfolioCard

import React from 'react'
import star from "../images/star.png"
import rs from "../images/rs.png"


const HotCards=({fullName,Rating,Price,ProfileImg}) =>{
return(
    <>
      <main role="main" className="HotCard">
            <section className='hotCardImg'>
                <img alt='actor' src={ProfileImg}></img>
            </section>
            <section className='hotCardsDetails'>
                <p>{fullName}</p>
                <span>
                    <div><img alt='star' src={star}></img><p>{Rating}</p></div>
                    <div><img alt='rs' src={rs}></img><p>{Price}L</p></div>
                </span>
            </section>
      </main>
    </>)
}
export default HotCards
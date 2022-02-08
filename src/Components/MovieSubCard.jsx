import React from 'react'
import sharukh from "../images/sharukh2.jpg"
import star from "../images/star.png"
import rs from "../images/rs.png"


const MovieSubCard=() =>{
return(
    <>
      <main role="main" className='movieSubCards'>
            <section className='MovieCardProfile'>
                <img alt='profile' src={sharukh}></img>
            </section>
            <section className='MovieCardContents'>
                <div className='movieCardName'>
                    <p>Sharukh Khan</p>
                </div>
                <div className='movieCardRtings'>
                    <div className='movieCardRatingContent'><img alt='star' src={star}></img><p>5</p></div>
                    <div className='movieCardRatingContent'><img alt='rs' src={rs}></img><p>180L</p></div>
                </div>

            </section>
      </main>
    </>)
}
export default MovieSubCard
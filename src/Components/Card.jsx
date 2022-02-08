import React from 'react'
import star from "../images/star.png"
import art from "../images/art1.png"
import art1 from "../images/art2.png"

const Card=({fullName,Genere,profileImg,price,starRating,artRating}) =>{
return(
    <>
            <div className="homeCard">
                <div className="homeCardContentDiv"></div>
                <div className="homeCardSectionContainer">
                  <div className="homeCardSection1">
                    <div className="cardSection1Name">
                      <p>{fullName}</p>
                    </div>
                    <div className="cardSection1Genere">
                      <p>{Genere}</p>
                    </div>
                  </div>
                  <div className="homeCardSection2">
                    <div className="cardProfileImg">
                      <div className="cardProfileImgContainer">
                        <img alt="sharukh khan" src={profileImg}></img>
                      </div>
                    </div>
                    <div className="cardDetails">
                        <div className="cardLogo"></div>
                        <div className="cardPriceDiv">Price ₹.{price}L</div>
                        <div className="cardRatings">
                          <div className="cardRatingStar">
                            <img alt="star" src={star}></img><p>{starRating}</p>
                          </div>
                          <div className="cardRatingArt">
                          <img alt="star" src={art1}></img><img alt="star" src={art}></img><p>{artRating}</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
    </>)
}
export default Card
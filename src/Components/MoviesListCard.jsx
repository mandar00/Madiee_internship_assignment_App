import React from 'react'
import Star from "../images/star.png";
import rs from "../images/rs.png";
import MovieSubCard from "./MovieSubCard";

const MoviesListCard=() =>{
return(
    <>
      <div className="movieListCard">
              <div className="moviesCardTitle">
                <div className="moviesCardStar">
                  <img alt="star" src={Star}></img>
                  <p>5</p>
                </div>
                <div className="moviesCardTitlebalance">
                  <p>Balance: </p>
                </div>
                <div className="moviesCardPrice">
                  <img alt="rs" src={rs}></img>
                  <p>1800L</p>
                </div>
              </div>
              <div className="moviesCardListContainer">
                  <MovieSubCard/>
                  <MovieSubCard/>
                  <MovieSubCard/>
                  <MovieSubCard/>
                  <MovieSubCard/>
              </div>
            </div>
    </>)
}
export default MoviesListCard
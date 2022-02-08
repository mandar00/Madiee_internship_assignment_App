import React, { useEffect, useState } from "react";
import Card from "./Card";
import idoits from "../images/3idots.jpg";
import tare from "../images/tarezameenpar.jpg";
import raj from "../images/rajkumar_.jpg";
import anurag from "../images/anurag kashyapjpg.jpg";
import Sharukh from "../images/Ellipse 64.png";
import amir from "../images/amir .jpg";
import rajpal from "../images/rajpal.jpg";
import jonny from "../images/jonny lever.jpg";
import tseries from "../images/tseries.png";
import yash from "../images/yashraj.jpg";
import varun from "../images/varunD.jpg";
import alia from "../images/alia.jpg";
import HotCards from "./HotCards";
import like from "../images/like.png";
import Sharukh2 from "../images/sharukh2.jpg";
import nawaz from "../images/nawaz.png";
import kareena from "../images/kareena.png";
import MoviesListCard from "./MoviesListCard";

const Home = () => {
  const [addClass, setAddClass] = useState({ name: "Stories" });

  const tabOnClick = (e) => {
    const targetName = e.target.parentElement.attributes.name.value;
    setAddClass((preval) => {
      const ele = document.getElementsByName(`${preval.name}`);
      ele[0].classList.remove("onClickTab");
      return { ...preval, name: `${targetName}` };
    });
    e.target.parentElement.classList.add("onClickTab");
  };

  useEffect(()=>{
    window.addEventListener("scroll",slideUp( ))
  })
  const slideUp=()=>{
    console.log("haa")
  }
  return (
    <>
      <main role="main" className="homeMainContainer">
        <section className="homeTitleSection">
          <div className="titleImgContainer">
            <h1>CARD SELECTION</h1>
          </div>
        </section>
        <section className="homeTabSelectionSection">
          <div className="homeTabSelectionTitle">
            <div
              className="homeTabs onClickTab"
              onClick={tabOnClick}
              name="Stories"
            >
              <p>
                Stories <span></span>
              </p>
            </div>
            <div className="homeTabs" onClick={tabOnClick} name="Directors">
              <p>
                Directors <span></span>
              </p>
            </div>
            <div className="homeTabs" onClick={tabOnClick} name="Lead">
              <p>
                Lead Actors <span></span>
              </p>
            </div>
            <div className="homeTabs" onClick={tabOnClick} name="Side">
              <p>
                Side Actors <span></span>
              </p>
            </div>
            <div className="homeTabs" onClick={tabOnClick} name="Sponsers">
              <p>
                Sponsers <span></span>
              </p>
            </div>
            <div className="homeTabs" onClick={tabOnClick} name="Promotions">
              <p>
                Promotions <span></span>
              </p>
            </div>
          </div>

          <div className="homeCardSelectionContainer">
            {addClass.name === "Stories" ? (
              <>
                <div className="homeCardContainer">
                  <Card
                    fullName="3 Idiots"
                    Genere="Comedy"
                    profileImg={idoits}
                    price="10"
                    starRating="5"
                    artRating="5"
                  />
                  <span name="card1" className="cardSelect"></span>
                </div>
                <div className="homeCardContainer">
                  <Card
                    fullName="Tare Zameen Par"
                    Genere="Drama"
                    profileImg={tare}
                    price="8"
                    starRating="4"
                    artRating="5"
                  />
                  <span name="card2"></span>
                </div>
              </>
            ) : addClass.name === "Directors" ? (
              <>
                <div className="homeCardContainer">
                  <Card
                    fullName="Raj Kumar Hirani"
                    Genere="Drama"
                    profileImg={raj}
                    price="8.5"
                    starRating="4"
                    artRating="5"
                  />
                  <span name="card1" className="cardSelect"></span>
                </div>
                <div className="homeCardContainer">
                  <Card
                    fullName="Anurag Kashyap"
                    Genere="Action"
                    profileImg={anurag}
                    price="8"
                    starRating="5"
                    artRating="5"
                  />
                  <span name="card2"></span>
                </div>
              </>
            ) : addClass.name === "Lead" ? (
              <>
                <div className="homeCardContainer">
                  <Card
                    fullName="Sharukh Khan"
                    Genere="Romance"
                    profileImg={Sharukh}
                    price="10"
                    starRating="5"
                    artRating="4"
                  />
                  <span name="card1" className="cardSelect"></span>
                </div>
                <div className="homeCardContainer">
                  <Card
                    fullName="Amir Khan"
                    Genere="Drama"
                    profileImg={amir}
                    price="9"
                    starRating="5"
                    artRating="5"
                  />
                  <span name="card2"></span>
                </div>
              </>
            ) : addClass.name === "Side" ? (
              <>
                <div className="homeCardContainer">
                  <Card
                    fullName="Raj Pal Yadav"
                    Genere="Comedy"
                    profileImg={rajpal}
                    price="6"
                    starRating="4"
                    artRating="5"
                  />
                  <span name="card1" className="cardSelect"></span>
                </div>
                <div className="homeCardContainer">
                  <Card
                    fullName="Jonny Lever"
                    Genere="Comedy"
                    profileImg={jonny}
                    price="7"
                    starRating="4"
                    artRating="5"
                  />
                  <span name="card2"></span>
                </div>
              </>
            ) : addClass.name === "Sponsers" ? (
              <>
                <div className="homeCardContainer">
                  <Card
                    fullName="T Series"
                    Genere="Action"
                    profileImg={tseries}
                    price="7"
                    starRating="4"
                    artRating="4"
                  />
                  <span name="card1" className="cardSelect"></span>
                </div>
                <div className="homeCardContainer">
                  <Card
                    fullName="Yash Raj"
                    Genere="Action"
                    profileImg={yash}
                    price="6"
                    starRating="4"
                    artRating="4"
                  />
                  <span name="card2"></span>
                </div>
              </>
            ) : addClass.name === "Promotions" ? (
              <>
                <div className="homeCardContainer">
                  <Card
                    fullName="Varun Dhavan"
                    Genere="Comedy"
                    profileImg={varun}
                    price="3"
                    starRating="3"
                    artRating="2"
                  />
                  <span name="card1" className="cardSelect"></span>
                </div>
                <div className="homeCardContainer">
                  <Card
                    fullName="Alia Bhatt"
                    Genere="Drama"
                    profileImg={alia}
                    price="4"
                    starRating="3"
                    artRating="3"
                  />
                  <span name="card2"></span>
                </div>
              </>
            ) : (
              "dasdas "
            )}
          </div>
        </section>
        <section className="homeHotCards">
          <div className="homeHotCardTitle">
            <p>Hot Cards :</p>
            <p>
              <p>
                Time Remaining <span>5:00 mins</span>
              </p>
            </p>
          </div>
          <div className="hotCardsContainer">
            <div className="hotCardDiv">
              <HotCards
                fullName="Sharukh Khan"
                Rating="4"
                Price="180"
                ProfileImg={Sharukh2}
              />
              <div className="hotCardLike">
                <img alt="like" src={like}></img>
                <p>3</p>
              </div>
            </div>
            <div className="hotCardDiv">
              <HotCards
                fullName="Nawazudin"
                Rating="2"
                Price="80"
                ProfileImg={nawaz}
              />
              <div className="hotCardLike">
                <img alt="like" src={like}></img>
                <p>3</p>
              </div>
            </div>
            <div className="hotCardDiv">
              <HotCards
                fullName="Kareena K"
                Rating="1"
                Price="60"
                ProfileImg={kareena}
              />
              <div className="hotCardLike">
                <img alt="like" src={like}></img>
                <p>3</p>
              </div>
            </div>
            <button className="cardSelectButton">
              <p>Select card</p>
            </button>
          </div>
        </section>
        <section className="homeMoviesCardsContainer">
          <span>
            <i  className="fa fa-chevron-down"></i>
          </span>
          <div className="MoviesListContainer">
            <div className="mocieCardListDiv">
              <MoviesListCard />
              <MoviesListCard />
              <MoviesListCard />
            </div>
            <div onClick={slideUp} className="moveUp">
              <i  className="fa fa-chevron-up"></i>
            </div>
            <div className="moiveCardContainerBgcc"></div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;

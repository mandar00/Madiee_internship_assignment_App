import React, { useState } from "react";
import profile1 from "../images/Ellipse 64.png";

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
            <div className="homeCardContainer">
              <div className="homeCard">
                <div className="homeCardContentDiv"></div>
                <div className="homeCardSectionContainer">
                  <div className="homeCardSection1">
                    <div className="cardSection1Name">
                      <p>Sharukh Khan</p>
                    </div>
                    <div className="cardSection1Genere">
                      <p>Romantic</p>
                    </div>
                  </div>
                  <div className="homeCardSection2">
                    <div className="cardProfileImg">
                      <div className="cardProfileImgContainer">
                        <img alt="sharukh khan" src={profile1}></img>
                      </div>
                    </div>
                    <div className="cardDetails">
                        <div className="cardLogo"></div>
                        <div className="cardPriceDiv">Price ₹.50L</div>
                    </div>
                  </div>
                </div>
              </div>
              <span></span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;

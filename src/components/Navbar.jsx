import { useState } from "react";
import "../App.css";
import logo1 from "../assets/clip.png";
import logo2 from "../assets/cliplogo.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isLogo, setIsLogo] = useState(false);

  function toggleButton() {
    setIsActive(!isActive);
  }

  const [navTitle, setNavTitle] = useState("");

  function handleHeaderTitleHover(title) {
    console.log(title);
    setIsLogo(true);

    if (title === "brandstory") {
      setNavTitle(title);
    } else if (title === "education") {
      setNavTitle(title);
    } else if (title === "clipnews") {
      setNavTitle(title);
    } else if (title === "customerservice") {
      setNavTitle(title);
    } else {
      console.log("wrong input");
    }
  }
  console.log(navTitle);

  function handleHeaderTitleLeave() {
    setNavTitle("");
    setIsLogo(false);
  }
  return (
    <header id="main_wrapper">
      <div
        onMouseEnter={() => handleHeaderTitleHover("")}
        onMouseLeave={handleHeaderTitleLeave}
        id="wrapper"
        className=" container "
      >
        <div
          onMouseEnter={() => handleHeaderTitleHover("")}
          onMouseLeave={handleHeaderTitleLeave}
        >
          <a>
            <img
              id="logo"
              src={`${isActive || isLogo ? logo1 : logo2}`}
              alt="the clip"
              height={30}
              width={30}
            />
          </a>
        </div>

        {/* nav content for big screen starts */}
        <nav>
          <ul id="menu">
            <li
              className="header_title"
              onMouseEnter={() => handleHeaderTitleHover("brandstory")}
              onMouseLeave={handleHeaderTitleLeave}
            >
              <a className="bigScreenNavTitle" href="/brand">
                <p>brand story</p>
              </a>
              <div
                id="mysubmenu"
                // className={` ${navTitle === "brandstory" && "navtitleactive"}`}
                style={{
                  display: navTitle === "brandstory" ? "block" : "none",
                }}
              >
                <ul
                  className="bigScreenLiList"
                  style={{
                    display: "flex",
                    gap: "4rem",
                    justifyItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    position: "relative",
                    left: -14,
                    background: "#f4f4f4",
                  }}
                >
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>Introduction to THE</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>CLIP</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleHeaderTitleHover("education")}
              onMouseLeave={handleHeaderTitleLeave}
              className="header_title"
            >
              <a className="bigScreenNavTitle" href="/brand">
                <p>Education program</p>
              </a>
              <div
                id="mysubmenu"
                style={{ display: navTitle === "education" ? "block" : "none" }}
              >
                <ul
                  className="bigScreenLiList"
                  style={{
                    display: "flex",
                    gap: "4rem",
                    justifyItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    left: "-60%",

                    position: "relative",
                    background: "#f4f4f4",
                  }}
                >
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>learning process</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>Courses and Levels</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>Lecture Support System</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>Online Learning</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>test Center</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleHeaderTitleHover("clipnews")}
              onMouseLeave={handleHeaderTitleLeave}
              className="header_title"
            >
              <a className="bigScreenNavTitle" href="/brand">
                <p>THE CLIP News</p>
              </a>
              <div
                id="mysubmenu"
                style={{ display: navTitle === "clipnews" ? "block" : "none" }}
              >
                <ul
                  style={{
                    display: "flex",
                    gap: "4rem",
                    justifyItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    position: "relative",
                    left: "-190%",
                    background: "#f4f4f4",
                  }}
                >
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>announcement</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleHeaderTitleHover("customerservice")}
              onMouseLeave={handleHeaderTitleLeave}
              className="header_title"
            >
              <a className="bigScreenNavTitle" href="/brand">
                <p>customer service center</p>
              </a>
              <div
                id="mysubmenu"
                style={{
                  display: navTitle === "customerservice" ? "block" : "none",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    gap: "4rem",
                    justifyItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    position: "relative",
                    left: "-190%",
                    background: "#f4f4f4",
                  }}
                >
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>FAQ</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>Apply for consultaion</p>
                    </a>
                  </li>
                  <li>
                    <a href="/intro">
                      <p style={{ color: "black" }}>Sample textbook</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* nav bar for mobile screen */}
        {isActive === true && (
          <nav id="mobNav">
            <ul id="mobmenu">
              <li className="mob_header_title">
                <a href="/brand">
                  <p className="mob_navTitle">brand story</p>
                </a>
                <div
                  id=""
                  // className={` ${navTitle === "brandstory" && "navtitleactive"}`}
                >
                  <ul className="mob-ul ">
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>Introduction to THE</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>CLIP</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mob_header_title">
                <a href="/brand">
                  <p className="mob_navTitle">Education program</p>
                </a>
                <div id="">
                  <ul className="mob-ul ">
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>learning process</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>Courses and Levels</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>Lecture Support System</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>Online Learning</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>test Center</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mob_header_title">
                <a href="/brand">
                  <p className="mob_navTitle">THE CLIP News</p>
                </a>
                <div id="">
                  <ul className="mob-ul ">
                    <li>
                      <a href="/intro">
                        <p>announcement</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mob_header_title">
                <a href="/brand">
                  <p className="mob_navTitle">customer service center</p>
                </a>
                <div id="">
                  <ul className="mob-ul ">
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>FAQ</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>Apply for consultaion</p>
                      </a>
                    </li>
                    <li>
                      <a href="/intro">
                        <p style={{ color: "black" }}>Sample textbook</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        )}
        {/* nav button */}
        <div
          onMouseEnter={() => handleHeaderTitleHover("")}
          onMouseLeave={handleHeaderTitleLeave}
          onClick={toggleButton}
          className={` hamburger-icon ${isActive ? "active" : ""}   `}
        >
          <div className="hamburger-line"></div>
        </div>
      </div>
      {/* <div
        id="mysubmenu"
        style={{ display: isSubmenuVisible ? "block" : "none" }}
      >
        <ul>
          <li>
            <a href="/intro">
              <p>Introduction</p>
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
}

export default Navbar;

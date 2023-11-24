import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import "./navbar.css";
import Menu from "./Menu";
// export const HeightContext = createContext(null)
const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  // const refHeight = useRef();

  // const heightHandler = () => {
  //   setHeight(refHeight.current.offsetHeight);
  // }

  // const useValues = {height}

  // console.log(height)
  // useEffect(() => {
  //   heightHandler()
  // }, [refHeight])
  console.log(scrollActive);
  
  window.onscroll = function ScrollActiveFexid()  {
    if (window.scrollY > 0) {
      setScrollActive(true)
    } else {
      setScrollActive(false)

    }
  }
  return (
    <>
      <div className={scrollActive ? "navbard active" : "navbard"}>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid d-flex justify-content-between">
                <img src={logo} alt="" />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                  <Menu />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import Title from "../Title/Title";
import "./say-about-us.css";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import { gapValue, resizeConditions } from "../../utils/getWindowSize";






const SayAboutUs = () => {
    const [width, setWidth] = useState(0);
    const [isActive, setIsActive] = useState('');
    const [numChild, setNumChild] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(gapValue().NumberOfItems);
    const [gap, setGap] = useState(gapValue().gap);
    const carouselRef = useRef();
    
    
    const toggleHamdler = (i, e) => {
    document.querySelectorAll('.btn-show-more span').forEach(item => {
      item.classList.remove('active')
    })
    e.classList.add('active');
    if (i === 0) {
      setIsActive("")
    } else if (i === 1) {
      setIsActive("active")
    } else if (i === 2) {
      setIsActive("active-2")
    } else if (i === 3) {
      setIsActive("active-3")
    } else if (i === 4) {
      setIsActive("active-4")
    } else if (i === 5) {
      setIsActive("active-5")
    }
  }
  
  
  useEffect(() => {
    setWidth(carouselRef.current.offsetWidth);
    window.addEventListener('resize', () => {
      setWidth(carouselRef.current.offsetWidth);
      resizeConditions(setNumberOfItems, setGap)
      setNumChild(carouselRef.current.children[0].children.length)
    })
    setNumChild(carouselRef.current.children[0].children.length)
  }, [carouselRef]);

  return (
    <>
      <div className="say-about-us">
        <div className="container">
          <Title
            h2={"What they say about "}
            span={"Wasit Business"}
            prgh={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elil. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`}
          />
          <div className="btn-view-all">
            <a href="#d">View All</a>
          </div>
          <div className="say-about-users-content" ref={carouselRef}>
            <div className={`say-about-users-items d-flex ${isActive}`}>
              <div className="say-about-user-item" style={{width: (width - gap) / numberOfItems, height: (width - (gap)) / numberOfItems}}>
                <div className="icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim t dolore magna aliqua.
                </p>
                <div className="evalution">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="user-item">
                  <img src={user1} alt="" />
                  <h3>user</h3>
                  <span>content creator</span>
                </div>
              </div>
              <div className="say-about-user-item" style={{width: (width - gap) / numberOfItems, height: (width - (gap)) / numberOfItems}}>
                <div className="icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim t dolore magna aliqua.
                </p>
                <div className="evalution">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="user-item">
                  <img src={user2} alt="" />
                  <h3>user</h3>
                  <span>content creator</span>
                </div>
              </div>
              <div className="say-about-user-item" style={{width: (width - gap) / numberOfItems, height: (width - (gap)) / numberOfItems}}>
                <div className="icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim t dolore magna aliqua.
                </p>
                <div className="evalution">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="user-item">
                  <img src={user1} alt="" />
                  <h3>user</h3>
                  <span>content creator</span>
                </div>
              </div>
              <div className="say-about-user-item" style={{width: (width - gap) / numberOfItems, height: (width - (gap)) / numberOfItems}}>
                <div className="icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim t dolore magna aliqua.
                </p>
                <div className="evalution">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="user-item">
                  <img src={user2} alt="" />
                  <h3>user</h3>
                  <span>content creator</span>
                </div>
              </div>
              <div className="say-about-user-item" style={{width: (width - gap) / numberOfItems, height: (width - (gap)) / numberOfItems}}>
                <div className="icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim t dolore magna aliqua.
                </p>
                <div className="evalution">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="user-item">
                  <img src={user1} alt="" />
                  <h3>user</h3>
                  <span>content creator</span>
                </div>
              </div>
              <div className="say-about-user-item" style={{width: (width - gap) / numberOfItems, height: (width - (gap)) / numberOfItems}}>
                <div className="icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim t dolore magna aliqua.
                </p>
                <div className="evalution">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="user-item">
                  <img src={user2} alt="" />
                  <h3>user</h3>
                  <span>content creator</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-show-more">
            {
              Array.apply(0, Array(numChild / numberOfItems)).map((item, i) => (
                <span key={i} onClick={(e) => toggleHamdler(i, e.target)} className={`${i === 0 ? 'active' : ""}`}></span>
              ))
            }
            {/* <span onClick={() => setIsActive(true)} className={isActive === true ? "active" : ""}></span> */}
          </div>
          {/* <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10400,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
              <SwiperSlide key={''}>
                <div className="icon">
                    ,,
                </div>
                <p></p>
                <div className="evalution">

                </div>
                <img src="" alt="" />
                <h3>user</h3>
                <span>content creator</span>
              </SwiperSlide>
            <div
              className="autoplay-progress"
              ref={progressCircle}
              slot="container-end"
            >
              <span ref={progressContent}></span>
            </div>
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default SayAboutUs;

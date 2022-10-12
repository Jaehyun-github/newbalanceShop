/* eslint-disable */
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

SwiperCore.use([Navigation, Pagination])

function Container(props){

  let [banner1, setBanner1] = useState("");
  let [title1, setTitle1] = useState("");
  let [content1, setContent1] = useState("");

  let [banner2, setBanner2] = useState("");
  let [title2, setTitle2] = useState("");
  let [content2, setContent2] = useState("");

  let [video, setVideo] = useState("");
  let [title3, setTitle3] = useState("");
  let [content3, setContent3] = useState("");
  
  fetch(process.env.PUBLIC_URL + '/data/data.json')
    .then(res => res.json())
    .then(res => {
      setBanner1(res["data"][0]["url"]);
      setTitle1(res["data"][0]["title"]);
      setContent1(res["data"][0]["content"]);
      setBanner2(res["data"][1]["url"]);
      setTitle2(res["data"][1]["title"]);
      setContent2(res["data"][1]["content"]);
      setVideo(res["data"][2]["url"]);
      setTitle3(res["data"][2]["title"]);
      setContent3(res["data"][2]["content"]);
  })

    return(

      <div id="container">
        <section className="row1">
          <a href="#">
            <Swiper modules={[EffectFade]} effect="fade" transformel="true" className="banner" spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} 
                    autoPlay={{ delay: 2000, disableOnInteraction: false}} allowTouchMove={false}
                    loop
                    >
                <SwiperSlide><img src={process.env.PUBLIC_URL + banner1} alt="banner1"/>
                  <p className="title">{title1}</p>
                  <p className="content">{content1}</p> 
                </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + banner2} alt="banner2"/>
                  <p className="title">{title2}</p>
                  <p className="content">{content2}</p> 
                </SwiperSlide>
                <SwiperSlide><video muted autoPlay loop src={process.env.PUBLIC_URL + video} type="video/mp4"></video>
                  <p className="title">{title3}</p>
                  <p className="content">{content3}</p> 
                </SwiperSlide>   
            </Swiper>
          </a>
        </section>
        <div className="text_box">
            <input type="submit" value="더 알아보기" name="more" className="submit_btn"></input>
            <input type="submit" value="구매하기" name="send" className="submit_btn2"></input>
          </div>
      </div>
    );

  }

export default Container;
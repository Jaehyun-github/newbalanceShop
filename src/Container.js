/* eslint-disable */
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useState } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

function Container(){

  let [banner, setBanner] = useState([]);
  let [title, setTitle] = useState([]);
  let [content, setContent] = useState([]);

  let [row2banner, setRow2banner] = useState("");
  let [row2title, setRow2title] = useState("");
  let [row2content, setRow2content] = useState("");

  let [row3banner, setRow3banner] = useState("");
  let [row3title, setRow3title] = useState("");
  let [row3content, setRow3content] = useState("");

  let [newshoes, setNewshoes] = useState([]);
  let [newshoesTitle, setNewshoesTitle] = useState([]);
  let [newshoesPrice, setNewshoesPrice] = useState([]);

  let [row5image, setRow5image] = useState([]);
  let [row5title, setRow5title] = useState([]);
  let [row5content, setRow5content] = useState([]);
  
  let [bestshoes, setBestshoes] = useState([]);
  let [bestshoesTitle, setBestshoesTitle] = useState([]);
  let [bestshoesPrice, setBestshoesPrice] = useState([]);

  let [row7image, setRow7image] = useState([]);
  let [row7title, setRow7title] = useState([]);

  let [row8banner, setRow8banner] = useState("");
  let [row8title, setRow8title] = useState("");
  let [row8content, setRow8content] = useState("");

   fetch(process.env.PUBLIC_URL + "/data/data.json")
    .then(res => res.json())
    .then(res => {
      let banner = [];
      let title = [];
      let content = [];
      let newshoes = [];
      let newshoesTitle = [];
      let newshoesPrice = [];
      let row5image = [];
      let row5title = [];
      let row5content = [];
      let bestshoes = [];
      let bestshoesTitle = [];
      let bestshoesPrice = [];
      let row7image = [];
      let row7title = [];

      for (let i = 0; i < res["data"].length; i++){
        banner.push(res["data"][i]["url"]);
        title.push(res["data"][i]["title"]);
        content.push(res["data"][i]["content"]); 
      }

      for (let i = 0; i < res["data2"].length; i++){
        newshoes.push(res["data2"][i]["url"]);
        newshoesTitle.push(res["data2"][i]["title"]);
        newshoesPrice.push(res["data2"][i]["price"]);
      }

      for (let i = 0; i < res["data3"].length; i++){
        row5image.push(res["data3"][i]["url"]);
        row5title.push(res["data3"][i]["title"]);
        row5content.push(res["data3"][i]["content"]); 
      }

      for (let i = 0; i < res["data4"].length; i++){
        bestshoes.push(res["data4"][i]["url"]);
        bestshoesTitle.push(res["data4"][i]["title"]);
        bestshoesPrice.push(res["data4"][i]["price"]); 
      }

      for (let i = 0; i < res["data5"].length; i++){
        row7image.push(res["data5"][i]["url"]);
        row7title.push(res["data5"][i]["title"]);
        
      }

      setBanner(banner);
      setTitle(title);
      setContent(content);
      setRow2banner(res["data"][3]["url"]);
      setRow2title(res["data"][3]["title"]);
      setRow2content(res["data"][3]["content"]);
      setRow3banner(res["data"][4]["url"]);
      setRow3title(res["data"][4]["title"]);
      setRow3content(res["data"][4]["content"]);
      setNewshoes(newshoes);
      setNewshoesTitle(newshoesTitle);
      setNewshoesPrice(newshoesPrice);
      setRow5image(row5image);
      setRow5title(row5title);
      setRow5content(row5content);
      setBestshoes(bestshoes);
      setBestshoesTitle(bestshoesTitle);
      setBestshoesPrice(bestshoesPrice);
      setRow7image(row7image);
      setRow7title(row7title);
      setRow8banner(res["data6"][0]["url"]);
      setRow8title(res["data6"][0]["title"]);
      setRow8content(res["data6"][0]["content"]);
  })

    return(
      <div id="container">
        <section className="row1">
          <a href="#">
            <Swiper modules={[EffectFade]} effect="fade" transformel="true" className="banner" spaceBetween={0} slidesPerView={1} navigation pagination={{clickable: true}} 
                    autoplay={{delay: 3000, disableOnInteraction: false}} allowTouchMove={false}
                    loop>
              {[1, 2, 3].map((a, i) => {
                return <SwiperSlide key={a}>
                  <img src={process.env.PUBLIC_URL + banner[i]} alt="banner"/>
                  <p className="title">{title[i]}</p>
                  <p className="content">{content[i]}</p>  
                </SwiperSlide>
              })}
            </Swiper>
          </a>
        </section>
        <div className="text_box">
          <input type="submit" value="더 알아보기" name="more" className="submit_btn"></input>
          <input type="submit" value="구매하기" name="send" className="submit_btn2"></input>
        </div>
        <section className="row2">
          <a href="#"><img src={process.env.PUBLIC_URL + row2banner} alt="row2banner" /></a>
          <p className="title">{row2title}</p>
          <p className="content">{row2content}</p>
          <div className="text_box">
            <input type="submit" value="더 알아보기" name="more" className="submit_btn"></input>
            <input type="submit" value="구매하기" name="send" className="submit_btn2"></input>
          </div>
        </section>
        <section className="row3">
          <a href="#"><video muted autoPlay loop src={process.env.PUBLIC_URL + row3banner} alt="row3banner" /></a>
          <p className="title">{row3title}</p>
          <p className="content">{row3content}</p>
          <div className="text_box">
            <input type="submit" value="더 알아보기" name="more" className="submit_btn"></input>
            <input type="submit" value="구매하기" name="send" className="submit_btn2"></input>
          </div>
        </section>
        <section className="row4">
          <div className="title_box">
            <h3>New</h3>
            <ul>
              <li className="tab_button active">All</li>
              <li className="tab_button">Men</li>
              <li className="tab_button">Women</li>
              <li className="tab_button">Kids</li>
            </ul>
          </div>
          <Swiper className="swiper-container" spaceBetween={30} slidesPerView={4}
                   scrollbar={{draggable: true, dragSize:350}}>
            {newshoes.map((a, i) => {
              return <SwiperSlide key={a} className="swiper-slide">                  
                <a href="#">
                  <img src={process.env.PUBLIC_URL + newshoes[i]}/>
                  <p className="new_title">{newshoesTitle[i]}</p>
                  <p className="new_price">{newshoesPrice[i]}원</p>
                </a>
              </SwiperSlide>
            })}
          </Swiper>
        </section>
        <section className="row5">
          <div className="title_box">
            <h3>NB Now</h3>
          </div>          
          <div className="nbnow">
            {row5image.map((a, i) => 
              <ul key={a}>
                <li><a href="#"><img src={process.env.PUBLIC_URL + row5image[i]} alt="row5image"/></a></li>
                <li><p className="title5">{row5title[i]}</p></li>
                <li><p className="content5">{row5content[i]}</p></li>
                <input type="submit" value="더 알아보기" name="more" className="submit_btn5_1"></input>
                <input type="submit" value="구매하기" name="send" className="submit_btn5_2"></input>
              </ul>
            )}
          </div>
        </section>
        <section className="row6">
          <div className="title_box">
            <h3>Best</h3>
            <ul>
              <li className="tab_button active">All</li>
              <li className="tab_button">Men</li>
              <li className="tab_button">Women</li>
              <li className="tab_button">Kids</li>
            </ul>
          </div>
          <Swiper className="swiper-container" spaceBetween={30} slidesPerView={4}
                  scrollbar={{draggable: true, dragSize:350}}>
            {bestshoes.map((a, i) => {
              return <SwiperSlide key={a} className="swiper-slide">                  
                <a href="#">
                  <img src={process.env.PUBLIC_URL + bestshoes[i]}/>
                  <p className="best_title">{bestshoesTitle[i]}</p>
                  <p className="best_price">{bestshoesPrice[i]}원</p>
                </a>
              </SwiperSlide>
            })}
          </Swiper>
        </section>
        <section className="row7">
          <div className="title_box">
            <h3>Show All</h3>
          </div>
          <div className="showall">
            {row7image.map((a, i) => 
              <ul key={a}>
                <li><a href="#"><img src={process.env.PUBLIC_URL + row7image[i]} alt="row7image"/></a></li>
                <li><a href="#"><p className="title7">{row7title[i]}</p></a></li>
              </ul>
            )}
          </div>      
        </section>
        <section className="row8">
        <a href="#"><img src={process.env.PUBLIC_URL + row8banner} alt="row8banner" /></a>
          <p className="title">{row8title}</p>
          <p className="content">{row8content}</p>
          <div className="text_box">
            <input type="submit" value="더 알아보기" name="more" className="submit_btn"></input>
          </div>
        </section>
      </div>
    );
  }

export default Container;
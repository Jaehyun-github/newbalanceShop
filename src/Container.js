/* eslint-disable */
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './store.js';

SwiperCore.use([Navigation, Pagination, Scrollbar])

function Container(){

  // let content = useSelector(( state )=>{ return state })

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
  
   fetch(process.env.PUBLIC_URL + '/data/data.json')
    .then(res => res.json())
    .then(res => {
      let banner = [];
      let title = [];
      let content = [];
      let newshoes = [];
      let newshoesTitle = [];
      let newshoesPrice = [];

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
  })

    return(

      <div id="container">
        <section className="row1">
          <a href="#">
            <Swiper modules={[EffectFade]} effect="fade" transformel="true" className="banner" spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} 
                    autoPlay={{ delay: 2000, disableOnInteraction: false}} allowTouchMove={false}
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
      </div>
    );
  }

export default Container;
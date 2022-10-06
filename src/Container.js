/* eslint-disable */
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination])

function Container(props){
    return(
      <div id="container">
        <section className="row1">
          <a href="#">
            <Swiper modules={[EffectFade]} effect="fade" className="banner" spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} 
                    autoPlay={{ delay: 1000, disableOnInteraction: false}} allowTouchMove={false} loop>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/images/row1banner.gif"} alt="banner1"/></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/images/row1banner2.jpg"} alt="banner2"/></SwiperSlide>
                <SwiperSlide><video muted autoPlay loop src={process.env.PUBLIC_URL + "/videos/row1video.mp4"} type="video/mp4"></video></SwiperSlide>   
            </Swiper>
          </a>
        </section>
      </div>
    );
  }

export default Container;
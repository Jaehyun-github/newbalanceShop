https://jaehyun-github.github.io/newbalanceShop/

<br>

** 현재 제작중입니다. (미완성) **

<br>

NewBalance 리뉴얼 <br>

- Visual Studio Code
- React, CSS
- 사용한 라이브러리 : Swiper

<br>

React를 독학하면서 리뉴얼 해보는 "NewBalance" 웹사이트입니다. <br>
현재 미완성이며, 깃허브에 매일 그날의 기록들을 업로드하고 있습니다. <br><br>
data.json 파일을 만들어서 fetch를 통해 데이터를 불러오고 usestate로 코드를 작성하였습니다. <br><br>

// Container.js

      import { useState } from 'react';
      import { Swiper, SwiperSlide } from 'swiper/react';
      
      let [banner, setBanner] = useState([]);
      let [title, setTitle] = useState([]);
      let [content, setContent] = useState([]);

      fetch(process.env.PUBLIC_URL + '/data/data.json')
        .then(res => res.json())
        .then(res => {
            let banner = [];
            let title = [];
            let content = [];
            
            for (let i = 0; i < res["data"].length; i++){
              banner.push(res["data"][i]["url"]);
              title.push(res["data"][i]["title"]);
              content.push(res["data"][i]["content"]);
            }
            
            setBanner(banner);
            setTitle(title);
            setContent(content);
      })
      
       <Swiper>
        {[1, 2, 3].map((a, i) => {
         return <SwiperSlide key={a}>
          <img src={process.env.PUBLIC_URL + banner[i]} alt="banner"/>
           <p className="title">{title[i]}</p>
           <p className="content">{content[i]}</p>  
         </SwiperSlide>
        })}
       </Swiper>
      
      
// data.json
      
      {
        "data": [
          {
            "id": 1,
            "url": "/images/row1banner.gif",
            "name": "banner1",
            "title": "세상의 모든 바람막이",
            "content": "NB WINDBREAKER"
          },

            /* ...중략 */

        ]
      }
      
![슬라이드](https://user-images.githubusercontent.com/105622596/195623262-48f537d8-74b9-4a6c-9b99-7096d88a8615.gif) <br>
정상적으로 구현이 된 모습입니다.

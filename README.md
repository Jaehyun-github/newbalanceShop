https://jaehyun-github.github.io/newbalanceShop/

<br>

** 현재 제작중입니다. (미완성) **

<br>

NewBalance 리뉴얼 <br>

- 사용한 라이브러리 : Swiper

<br>

React를 독학하면서 리뉴얼 해보는 "NewBalance" 웹사이트입니다. 현재 미완성이며, 깃허브에 매일 그날의 기록들을 업로드하고 있습니다. <br><br>
data.json 파일을 만들어서 fetch를 통해 데이터를 불러오고 usestate로 코드를 작성하였습니다.

      // Container.js

      import { useState } from 'react';
      
      let [banner1, setBanner1] = useState("");
      let [title1, setTitle1] = useState("");
      let [content1, setContent1] = useState("");

      fetch(process.env.PUBLIC_URL + '/data/data.json')
        .then(res => res.json())
        .then(res => {
          setBanner1(res["data"][0]["url"]);
          setTitle1(res["data"][0]["title"]);
          setContent1(res["data"][0]["content"]);
      })
          
      <SwiperSlide><img src={process.env.PUBLIC_URL + banner1} alt="banner1"/>
        <p className="title">{title1}</p>
        <p className="content">{content1}</p> 
      </SwiperSlide>
      
      
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
      
![배너슬라이드](https://user-images.githubusercontent.com/105622596/195616569-466fbf6a-06bf-4fc9-87ea-d4ee4e5088cc.gif) <br>
정상적으로 구현이 된 모습입니다.

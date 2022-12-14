/* eslint-disable */
import './App.css';

function Header(){
    return(
      <div id="header">
        <header id="header">
          <div className="header_topmenu">
            <ul>
              <li><a href="#">매장찾기</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">FAQS</a></li>
              <li><a href="#">이벤트</a></li>
            </ul>
          </div>
          <div className="header_in">
            <div className="header_left">
              <p className="logo"><a href="#">뉴발란스</a></p>
            </div>
            <div className="gnb">
                <ul>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#" className='launchcalendar'>런칭캘린더</a></li>
                </ul>
            </div>
            <div className="header_right">
              <div className="util">
                <ul>
                  <li className="search"><a href="#">검색</a></li>
                  <li className="my_page"><a href="#">마이페이지</a></li>
                  <li className="login"><a href="#">로그인</a></li>
                  <li className="join"><a href="#">회원가입</a></li>
                  <li className="cart">
                      <a href="#">
                        장바구니
                      </a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

  export default Header;
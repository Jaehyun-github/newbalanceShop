import './App.css';

function Footer(){
    return(
        <div id="footer">
            <div className="footer_in">
                <div className="footer_link">
                    <ul>
                        <li><a href="#">FIND A STORE</a>
                            <p className="link_content">매장안내</p>
                        </li>
                        <li><a href="#">TEAM WEAR</a>
                            <p className="link_content">팀 / 단체복 구매</p>
                        </li>
                        <li><a href="#">MEMBER JOIN</a>
                            <p className="link_content">회원가입</p>
                        </li>
                        <li><a href="#">DOWNLOAD APP</a>
                            <p className="link_content">App 다운로드</p>
                        </li>
                    </ul>
                </div>
                <div className="footer_inner">
                    <div className="footer_left">
                        <ul>
                            <li>
                                <p>NEED HELP</p>
                                <a href="#">고객센터</a>
                                <a href="#">FAQs</a>
                                <a href="#">공지사항</a>
                                <a href="#">1:1 문의</a>
                                <a href="#">매장 찾기</a>
                                <a href="#">App 다운로드</a>
                            </li>
                            <li>
                                <p>INFORMATION</p>
                                <a href="#">통합 마일리지 안내</a>
                                <a href="#">팀/단체복 주문안내</a>
                                <a href="#">배송 및 교환 반품 안내</a>
                                <a href="#">세탁 및 손질 방법 안내</a>
                                <a href="#">이용약관</a>
                                <a href="#">SITE MAP</a>
                            </li>
                            <li>
                                <p>INSIDE NB</p>
                                <a href="#">INSIDE NB</a>
                                <a href="#">MADE IN USA/UK</a>
                                <a href="#">NBx GUIDE</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_right">
                        <div className="sns">
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#">NB LIFE STYLE</a>
                            <a href="#">NB KIDS</a>
                        </div>
                        <div className="info">
                            <p><a href="#" className="pi">개인정보 처리방침</a> / <a href="#">이용약관</a> / ㈜이랜드월드패션사업부 / 서울특별시 금천구 가산디지털1로 159 이랜드월드</p>
                            <p>온라인 고객센터 : 1566-0086, AS/오프라인 고객센터 : 080-999-0456</p>
                            <p>대표 이메일 : <a href="#" className="email">webmaster@nbkorea.com</a></p>
                            <p>호스팅 서비스 제공자 : ㈜라드씨엔에스</p>
                            <br/>
                            <p>대표이사 : 최운식 &nbsp;&nbsp;&nbsp; 사업자등록번호 : 113-85-19030 &nbsp;&nbsp;&nbsp; 통신판매업신고 : 금천구청 제 2005-01053</p>
                            <p>개인정보보호책임자 : 최운식 &nbsp;&nbsp;&nbsp;<a href="#" className="bic">사업자정보조회</a></p>
                            <p>온라인디지털콘텐츠산업발전법에 의한 <a href="#" className="cpg">콘텐츠보호안내 자세히보기</a></p>
                        </div>
                        <div className="copyright">
                            <p>Copyright 2018. New Balance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

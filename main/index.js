$(function(){
  document.cookie = 'cross-site-cookie=bar; SameSite=Lax';

  //IIFE
  (function studyList(){//bootstrap, template 목록 호출
    let htmlTitle = [
                      '부트스트랩 개념', '디바이스별 크기', 'col-size-number',
                      '레이아웃 실습', 'offset, pull, push', 'table',
                      'button', 'image', '도움이 되는 클래스',
                      '디바이스 크기별로 요소를 보이고 숨기기', '글리피콘, 드랍다운, 네비게이션', '네비게이션 바, 스크롤스파이',
                      '경로(breadcrumbs), 페이지네이션(pagination), 라벨(label), 배지(dadge), 점보트론(jumbotron)', '썸네일, 진행바', '패널, 반응성 임베디 컴포넌트',
                      '자바스크립트로 동작하는 요소(모달창)', '툴팁, 팝오버, 체크박스/라디오', '컬랩스(Collapse), 아코디온(Accordion)',
                      '캐러셀(Carousel) - 이미지 슬라이드', '메뉴(Affix)'
                    ];

    htmlTitle.forEach(function(e, i) {
      let htmlNumber = i+1;

      if(htmlNumber<10) htmlNumber = "0" + htmlNumber;
      let childTag = `<tr>
                        <th scope="row">${i+1}</th>
                        <td><a class="text-decoration-none" href="./main/bootstrap/ex${htmlNumber}.html" target="_blank">${e}</a></td>
                      </tr>`;
      $('#studyList').append(childTag);
      //template 목록 호출
      templateList();
    });//forEach end

  })();// IIFE

});//function end

function templateList(){
  //template 목록 구현 예정
}

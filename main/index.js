$(function(){
  document.cookie = 'cross-site-cookie=bar; SameSite=Lax';

  //IIFE
  (function studyList(){
    let htmlTitle = [
                      '부트스트랩 개념', '디바이스별 크기', 'col-size-number',
                      '레이아웃 실습', 'offset, pull, push', 'table',
                      'button', 'image', '도움이 되는 클래스',
                      '디바이스 크기별로 요소를 보이고 숨기기', '글리피콘, 드랍다운, 네비게이션',
                      '네비게이션 바, 스크롤스파이','경로(breadcrumbs), 페이지네이션, 라벨(label), 배지, 점보트론(jumbotron)'
                    ];

    htmlTitle.forEach(function(e, i) {
      let htmlNumber = i+1;

        if(htmlNumber<10) htmlNumber = "0" + htmlNumber;

        let childTag = '<div class="col-xs-12"><a href="./main/ex'+htmlNumber+'.html">'+e+'</a></div>';
        $('#studyList').append(childTag);

    });//forEach end

  })();// IIFE

});//function end

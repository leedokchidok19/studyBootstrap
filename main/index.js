$(function(){
  document.cookie = 'cross-site-cookie=bar; SameSite=Lax';

  //IIFE
  (function studyList(){
    let htmlTitle = ['부트스트랩 개념', '디바이스별 크기', 'col-size-number', '레이아웃 실습', 'offset, pull, push'];

    htmlTitle.forEach(function(e, i) {
      let htmlNumber = i+1;

        if(htmlNumber<10) htmlNumber = "0" + htmlNumber;

        let childTag = '<div class="col-xs-12"><a href="./main/ex'+htmlNumber+'.html">'+e+'</a></div>';
        $('#studyList').append(childTag);

    });//forEach end

  })();// IIFE

});//function end

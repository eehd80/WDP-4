$(document).ready(function(){

  // header sticky
  $('#header').each(function(){

    let $this = $(this),
          $window = $(window)

    // #header의 높이값(padding, border 값이 포함 된)
    // https://www.w3schools.com/jquery/html_outerheight.asp
    console.log('#header의 높이값 : ' + $this.outerHeight())

    // #header의 위치값
    // https://www.w3schools.com/jquery/css_offset.asp
    console.log('#header의 위치값 : ' + $this.offset().top)

    // 윈도우가 스크롤 됐을 때
    $window
    .scroll(function(){

      let $header = $('#header')

      // 윈도우의 스크롤 값
      console.log('윈도우의 스크롤 값 : ' + $window.scrollTop())

      // 만약 (윈도우의 스크롤 값 > 100) 경우
      // 참 : #header에 sticky 클래스 추가
      // 거짓 : #header에 sticky 클래스 삭제
      if( $window.scrollTop() > $header.outerHeight() ){
        $header.addClass('sticky')
      }else{
        $header.removeClass('sticky')
      }
    })
    .trigger('scroll')

  })

  // gnb 클릭시 해당 해쉬태그로 애니메이션 되면 이동
  $('#gnb a').click(function(event){

    // a링크 기능 없애기
    event.preventDefault()

    // 만약에 링크에 해쉬태그가 비어있지 않다면...
    if(this.hash !== ""){

      let hash = this.hash /* #banner */

      $('html, body').animate({
        scrollTop : $(hash).offset().top - 20 /* gnb의 높이값을 빼주삼 */
      }, 800)


    }


  })



  // swiper-intro
  var swiper = new Swiper(".slide-intro", {
    // spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // slide-banner1
  var swiper = new Swiper(".slide-bnr1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  // slide-bnr2
  var swiper = new Swiper(".slide-bnr2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next-out",
      prevEl: ".swiper-button-prev-out",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        // centeredSlides: false,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
        // centeredSlides: false,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,        
        centeredSlides: true,
      },
    },
  });









    

});
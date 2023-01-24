import styled from "@emotion/styled";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperPracticePage() {
  // const swiper1 = new Swiper('.swiper1', {
  //     //기본 셋팅
  //     //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  //     direction: 'horizontal',
  //     //한번에 보여지는 페이지 숫자
  //     slidesPerView: 1,
  //     //페이지와 페이지 사이의 간격
  //     spaceBetween: 0,
  //     //드레그 기능 true 사용가능 false 사용불가
  //     debugger: true,
  //     //마우스 휠기능 true 사용가능 false 사용불가
  //     mousewheel: true,
  //     //반복 기능 true 사용가능 false 사용불가
  //     loop: true,
  //     //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  //     centeredSlides: true,
  //     // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  //     // effect: 'fade',
  //     speed: 1000,
  //     //자동 스크를링
  //     autoplay: {
  //         //시간 1000 이 1초
  //         delay: 3500,
  //         disableOnInteraction: false,
  //     },
  //     //페이징
  //     pagination: {
  //         //페이지 기능
  //         el: '.swiper-pagination',
  //         //클릭 가능여부
  //         clickable: true,
  //     },
  // });
  // const swiper2 = new Swiper('.swiper2', {
  //     //기본 셋팅
  //     //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  //     direction: 'horizontal',
  //     //한번에 보여지는 페이지 숫자
  //     slidesPerView: 1,
  //     //페이지와 페이지 사이의 간격
  //     spaceBetween: 0,
  //     //드레그 기능 true 사용가능 false 사용불가
  //     debugger: true,
  //     //마우스 휠기능 true 사용가능 false 사용불가
  //     mousewheel: true,
  //     //반복 기능 true 사용가능 false 사용불가
  //     loop: false,
  //     //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  //     centeredSlides: true,
  //     // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  //     // effect: 'fade',
  //     speed: 1000,
  //     //자동 스크를링
  //     autoplay: {
  //         //시간 1000 이 1초
  //         delay: 3500,
  //         disableOnInteraction: false,
  //     },
  //     //페이징
  //     pagination: {
  //         //페이지 기능
  //         el: '.swiper-pagination',
  //         //클릭 가능여부
  //         clickable: true,
  //         type: 'bullets',
  //     },
  // });

  // 상세 예시
  //   const swiper= new Swiper(".swiper-container", {
  //     //기본 셋팅
  //     //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  //     direction: "horizontal",
  //     //한번에 보여지는 페이지 숫자
  //     slidesPerView: 1,
  //     //페이지와 페이지 사이의 간격
  //     spaceBetween: 16,
  //     watchOverflow: true,
  //     //마우스 휠기능 true 사용가능 false 사용불가
  //     mousewheel: true,
  //     touchEventsTarget: "wrapper",
  //     //반복 기능 true 사용가능 false 사용불가
  //     loop: true,
  //     //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  //     centeredSlides: true,
  //     // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  //     // effect: 'fade',
  //     speed: 1000,
  //     //자동 스크를링
  //     autoplay: {
  //       //시간 1000 이 1초
  //       delay: 3500,
  //       disableOnInteraction: false,
  //     },
  //     //페이징
  //     pagination: {
  //       //페이지 기능
  //       el: ".swiper-pagination",
  //       //클릭 가능여부
  //       clickable: true,
  //     },
  //     //방향표
  //  9
  //     observer: true, // 추가
  //     observeParents: true, // 추가
  //   });
  const Wrapp = styled(Swiper)`
    width: 500px;
    height: 400px;
  `;
  const Header = styled.header`
    display: flex;
    justify-content: center;
    h1:nth-child(1) {
      color: blue;
      @import url("https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      font-family: "Solitreo", cursive, sans-serif;
      font-size: 32px;
      font-family: "Sofia Sans", sans-serif;
      font-style: italic;
    }
  `;
  const swiper: any = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    onSwiper: (swiper: any) => console.log(swiper),
    onSlideChange: () => console.log("slide change"),
    className: "wrapper", //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
    //     direction: "horizontal",
    //     //한번에 보여지는 페이지 숫자
    slidesPerView: 1,
    //     //페이지와 페이지 사이의 간격
    spaceBetween: 1,
    watchOverflow: true,
    //     //마우스 휠기능 true 사용가능 false 사용불가
    mousewheel: true,
    touchEventsTarget: "wrapper",
    //     //반복 기능 true 사용가능 false 사용불가
    loop: true,
    //     //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
    centeredSlides: true,
    //     // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
    effect: "fade",
    speed: 500,
    //     //자동 스크를링
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    observer: true, // 추가
    observeParents: true, // 추가
  };

  const SwiperMains = styled.img`
    width: 400px;
    height: 400px;
    object-fit: contain;
  `;
  const SwiperMainsBox = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <script
          type="text/javascript"
          src="https://unpkg.com/swiper/swiper-bundle.js"
        ></script>
        <script
          type="text/javascript"
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
        ></script>
      </Head> */}
      <Header className="header">
        <h1>Swiperjs Slider</h1>
        <span>Hello</span>
      </Header>
      <Wrapp {...swiper}>
        <div className="swiper-wrapper">
          <SwiperMainsBox className="swiper-slide">
            <SwiperMains src="/swiper_test_img.png" />
          </SwiperMainsBox>
          <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
          <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
        </div>

        {/* <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
        {/* <div className="custom-fraction">
            <span className="current">1</span>/<span className="all">9</span>
          </div> */}

        {/* <div className="btn-wrapper">
          <button className="auto-start" onClick={autoplay}>
            slide autoplay start
          </button>
          <button className="auto-stop" onClick={autoplayStop}>
            slide autoplay stop
          </button>
        </div> */}
      </Wrapp>
      <footer>
        <div></div>
      </footer>
    </>
  );
}

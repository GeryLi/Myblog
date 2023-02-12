import React, { memo } from "react";
import styled from "styled-components";
import swpng from "../../../assets/images/swiper_01.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation } from "swiper";
import "swiper/css/navigation";
import { shallowEqual, useSelector } from "react-redux";

const HeaderSwiper = memo((props) => {
  const { imagesData } = useSelector(
    (state) => ({ imagesData: state.home.imagesData }),
    shallowEqual
  );

  return (
    <HeaderSwiperWapper>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        navigation={true}
        autoplay={true}
        loop={true}

        // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
      >
        {imagesData?.data?.map((item) => (
          <SwiperSlide className="item" key={item.imgName}>
            <img
              src={`http://175.24.179.193:3000${item.imgUrl}`}
              alt={item.imgName}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className="item">
          <img src={swpng} alt="轮播" />
        </SwiperSlide>
        {/* <SwiperSlide className="item">
          <img src={swpng} alt="轮播" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={swpng} alt="轮播" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={swpng} alt="轮播" />
        </SwiperSlide>
        <SwiperSlide className="item">
          <img src={swpng} alt="轮播" />
        </SwiperSlide> */}
      </Swiper>
    </HeaderSwiperWapper>
  );
});
const HeaderSwiperWapper = styled.div`
  width: 1400px;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  .mySwiper {
    width: 100%;
    height: 600px;

    --swiper-theme-color: #fff;
    --swiper-navigation-color: rgba(255, 255, 255, 0.6); //设置按钮颜色
    --swiper-navigation-size: 45px; //设置按钮大小

    /* .swiper-pagination-bullet-active-main {
    background-color:rgb(255,255,255); }*/
  }
  .swiper-pagination-bullet {
    /* 改变小圆点大小 */

    width: 15px;
    height: 15px;
  }
  .swiper-pagination {
    bottom: 40%;
  }

  .item {
    width: 1600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default HeaderSwiper;

import React, { memo } from 'react'
import styled from 'styled-components'
// import { Carousel } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import 'swiper/css/autoplay'

import { Navigation } from "swiper";
import "swiper/css/navigation";



const HeaderSwiper = memo((props) => {

    return (
        <HeaderSwiperWapper>
            {/* <Carousel autoplay>
                <div className='item' ></div>
                <div className='item' ></div>
                <div className='item' ></div>
                <div className='item' ></div>
              
                
            </Carousel> */}
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
                navigation={true}
                autoplay={true}
                loop={true}
                
                // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
            >


                <SwiperSlide className='item'>
                    <img src={require('@/assets/images/swiper_01.jpg')} alt="轮播" />
                </SwiperSlide><SwiperSlide className='item'>
                    <img src={require('@/assets/images/swiper_01.jpg')} alt="轮播" />
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <img src={require('@/assets/images/swiper_01.jpg')} alt="轮播" />
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <img src={require('@/assets/images/swiper_01.jpg')} alt="轮播" />
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <img src={require('@/assets/images/swiper_01.jpg')} alt="轮播" />
                </SwiperSlide>
                <SwiperSlide className='item'>
                    <img src={require('@/assets/images/swiper_01.jpg')} alt="轮播" />
                </SwiperSlide>
                

            </Swiper>




        </HeaderSwiperWapper>
    )
})
const HeaderSwiperWapper = styled.div`
width: 1400px;
height:600px;
border-radius:10px;
overflow:hidden;
.mySwiper {
    width:100%;
    height: 600px;


    --swiper-theme-color: #fff;
    --swiper-navigation-color: rgba(255,255,255,.6); //设置按钮颜色
    --swiper-navigation-size: 45px;   //设置按钮大小
    
    /* .swiper-pagination-bullet-active-main {
    background-color:rgb(255,255,255); }*/
}
.swiper-pagination-bullet {
    /* 改变小圆点大小 */

    width: 15px;
    height: 15px;
}
.swiper-pagination {
    bottom:40%;
}





.item {
    width: 1600px;
    img {
        width: 100%;
        height:100%;
        object-fit:cover;
    }
    
}

`



export default HeaderSwiper
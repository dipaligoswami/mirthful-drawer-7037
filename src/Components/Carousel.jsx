import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Image } from '@chakra-ui/react';
import './Carousel.css'

const Carousel = () => {
    var menu = ['Offer on', 'Fresho', 'Fresho', 'Flavored', 'Snacking', 'Fresho', 'Tasties', 'Home']
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay= {{delay: 5000,disableOnInteraction: false}}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true, type: 'bullets',
      renderBullet: function(index,className){
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      } }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src='/homeCarousel/1.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/2.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/3.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/4.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/5.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/6.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/7.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/homeCarousel/8.webp' width='100%' borderRadius='20px'/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
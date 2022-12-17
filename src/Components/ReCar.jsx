import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Image } from '@chakra-ui/react';

const ReCar = ({arr}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay= {{delay: 5000,disableOnInteraction: false}}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, type: 'progressbar'}}
    >
        {arr.map((item,ind) => (
          <SwiperSlide key={ind}>
            <Image src={`/${arr[0]}/${ind+1}.webp`} width='100%' borderRadius='20px'/>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ReCar
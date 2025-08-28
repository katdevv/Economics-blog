"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";

import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'

const BigSwiper = () => {
    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{delay: 3000}}
                navigation={{}}
                pagination={{clickable: true}}
                className="w-full h-full"
            >
                <SwiperSlide className="relative h-screen" key={0}>
                    <Image
                        src={"/images/big-swiper-photos/main.jpg"}
                        alt={"main"}
                        fill
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="relative h-screen" key={1}>
                    <Image
                        src={"/images/big-swiper-photos/lecture.jpg"}
                        alt={"lecture"}
                        fill
                        className="object-cover"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default BigSwiper

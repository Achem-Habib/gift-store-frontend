"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

// data
const workSlides = {
  images: [
    {
      title: "title",
      path: "/banner.jpg",
    },
    {
      title: "title",
      path: "/banner1.jpg",
    },
    {
      title: "title",
      path: "/banner.jpg",
    },
    {
      title: "title",
      path: "/banner1.jpg",
    },
  ],
};

const Promotions = () => {
  return (
    <div className="my-4 lg:mx-20 xl:mx-28">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        //autoplay={{ delay: 2000 }}
        modules={[Pagination, Navigation]} //include Autoplay for automatic slideplay
        className="w-full "
      >
        {workSlides.images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="relative  overflow-hidden flex items-center justify-center group"
              >
                <div className="flex relative group w-full h-[300px] lg:h-[400px] ">
                  {/* image */}
                  <Image
                    className=""
                    src={image.path}
                    fill
                    styles={{ width: "auto", height: "auto" }}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Promotions;

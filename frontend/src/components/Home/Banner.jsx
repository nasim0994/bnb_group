import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <section>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="h-[50vh] md:h-[70vh] lg:h-[85vh] relative">
            <div className="absolute -z-0 top-0 left-0 w-full h-full">
              <img
                src="/images/banner.jpg"
                alt="banner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] md:h-[70vh] lg:h-[85vh] relative">
            <div className="absolute -z-0 top-0 left-0 w-full h-full">
              <img
                src="/images/banner2.png"
                alt="banner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function BNBResort2() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
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
                <div className="h-60 sm:h-80">
                  <img
                    src="/images/resort1.jpg"
                    alt="banner"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-60 sm:h-80">
                  <img
                    src="/images/resort3.jpg"
                    alt="banner"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-60 sm:h-80">
                  <img
                    src="/images/resort4.jpg"
                    alt="banner"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-5xl text-neutral font-bold">
              BNB processing units 2{" "}
              <span className="text-secondary">Sitakund </span>
            </h2>

            <div className="mt-4 text-neutral/90 flex flex-col gap-1 text-[17px]">
              BNB Group stands as a multi-line business leader in Bangladesh,
              with a robust track record and commitment to quality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

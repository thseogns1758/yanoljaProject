"use client";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./mainSwiperCarousel.css";
import { GoDotFill } from "react-icons/go";
import { SliderData } from "@/type/slideType";

const SwiperCarousel = ({ sliderData }: { sliderData: SliderData[] }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <div className="swiper-container-wrapper">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, EffectCards]}
        effect="cards"
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 0,
          rotate: false,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          el: ".custom_pagination .swiper-pagination",
        }}
        navigation={{
          prevEl: ".custom_pagination .swiper-pagination-prev",
          nextEl: ".custom_pagination .swiper-pagination-next",
        }}
        loop={true}
        loopAdditionalSlides={5}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} style={{ cursor: "pointer" }}>
            <div className="swiper-item">
              <div className="main_slide_text">
                <div className="flex items-center gap-1">
                  <GoDotFill size={8} />
                  <span className="main_slide_sub_title">{slide.subTitle}</span>
                </div>
                <h3 className="main_slide_title">{slide.title}</h3>
                <a href={slide.linkUrl}>
                  <button className="detail_button">자세히보기</button>
                </a>
              </div>

              {!loadedImages.has(slide.id) && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundColor: "#e5e5e5",
                  }}
                />
              )}

              <Image
                src={slide.backgroundImageUrl}
                alt={slide.alt}
                fill
                style={{
                  zIndex: -1,
                  objectFit: "cover",
                  objectPosition: "center 80%",
                  opacity: loadedImages.has(slide.id) ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
                onLoad={() => handleImageLoad(slide.id)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 페이지네이션 컨트롤 */}
      <div className="custom_pagination">
        <button className="swiper-pagination-prev main_prev">
          <span className="main_icon_left"></span>
        </button>

        <div className="swiper-pagination"></div>

        <button
          className="swiper-pagination-play"
          onClick={() => setIsPlaying(true)}
        >
          <span className="icon_play"></span>
        </button>
        <button
          className="swiper-pagination-pause"
          onClick={() => setIsPlaying(false)}
        >
          <span className="icon_pause"></span>
        </button>

        <button className="swiper-pagination-next main_next">
          <span className="main_icon_right"></span>
        </button>
      </div>
    </div>
  );
};

export default SwiperCarousel;

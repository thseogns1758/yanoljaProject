"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Scrollbar, A11y, Pagination } from "swiper/modules";
import {
  SlideData,
  isCardData,
  isImageCardData,
  isSimpleImageCardData,
} from "@/type/slideType";

import CardItem from "./slideItems/CardItem";
import ImageCardItem from "./slideItems/ImageCardItem";
import SimpleImageCardItem from "./slideItems/SimpleImageCardItem";

import CustomCarouselButton from "./CustomCarouselButton";
import { MdArrowForwardIos } from "react-icons/md";

import "./slideCarousel.css";

const SlideCarouel = ({
  slideData,
  pageLink,
  isScroll = false,
  sectionTitle,
  breakpoints,
}: {
  slideData: SlideData[];
  pageLink: string;
  isScroll?: boolean;
  sectionTitle?: string;
  breakpoints?: Record<number, { slidesPerView: number }>;
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div>
      <a className="section_title" href={pageLink}>
        <h4>{sectionTitle}</h4>
        <MdArrowForwardIos size={20} style={{ marginBottom: "5px" }} />
      </a>

      <Swiper
        modules={[Scrollbar, A11y, Pagination]}
        spaceBetween={30}
        scrollbar={isScroll ? { draggable: true, hide: false } : false}
        pagination={!isScroll ? { clickable: true } : false} // ✅ 닷 표시
        onSwiper={setSwiperInstance}
        className="slideSwiper"
        breakpoints={breakpoints}
      >
        {slideData.slice(0, 5).map((slide) => (
          <SwiperSlide key={slide.id}>
            {isCardData(slide) ? (
              <CardItem {...slide} />
            ) : isImageCardData(slide) ? (
              <ImageCardItem {...slide} />
            ) : isSimpleImageCardData(slide) ? (
              <SimpleImageCardItem {...slide} />
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomCarouselButton swiper={swiperInstance} pageLink={pageLink} />
    </div>
  );
};

export default SlideCarouel;

"use client";

import { Swiper as SwiperType } from "swiper";
import { useRouter } from "next/navigation"; // Next.js 13+ 전용
import "./customCarouselButton.css";

const CustomCarouselButton = ({
  swiper,
  pageLink,
}: {
  swiper: SwiperType | null;
  pageLink: string;
}) => {
  const router = useRouter();

  const handleNext = () => {
    if (!swiper) return;

    const isLast = swiper.isEnd;
    if (isLast) {
      router.push(pageLink); // ✅ 이동할 경로 지정
    } else {
      swiper.slideNext();
    }
  };

  return (
    <div className="custom_carousel_button">
      <button
        className="swiper-pagination-prev custom_prev"
        onClick={() => swiper?.slidePrev()}
      >
        <span className="custom_icon_left"></span>
      </button>
      <button
        className="swiper-pagination-next custom_next"
        onClick={handleNext}
      >
        <span className="custom_icon_right"></span>
      </button>
    </div>
  );
};

export default CustomCarouselButton;

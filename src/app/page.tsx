import { sliderData } from "@/data/slideData";
import { cardData } from "@/data/slideData";
import { imageCardData } from "@/data/slideData";
import { simpleImageCardData } from "@/data/slideData";

import MainLayout from "@/components/MainLayout";
import MainSwiperCarousel from "@/components/MainSwiperCarousel";
import LinkItem from "@/components/common/LinkItem";
import SlideCarousel from "@/components/common/SlideCarousel";
import SectionLayoutBG from "@/components/SectionLayoutBG";
import NewsBoard from "@/components/NewsBoard";
import UseDataComponent from "@/components/UseDataComponent";
import SnsComponent from "@/components/SnsComponent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <MainLayout
        isMain
        leftChildren={<MainSwiperCarousel sliderData={sliderData} />}
        rightChildren={
          <ul className="right_link">
            <li>
              <LinkItem
                title="야놀자 매력도 지수"
                link="https://www.yanolja-research.com/brand/attractiveness"
                imageUrl="/asset/bg_chart.svg"
                backgroundColor="#F54B1E"
              />
            </li>
            <li>
              <LinkItem
                title="야놀자 브랜드자산 지수"
                link="https://www.yanolja-research.com/brand/background"
                imageUrl="/asset/bg_glass.svg"
                backgroundColor="#E43608"
              />
            </li>
            <li>
              <LinkItem
                title="데이터랩"
                link="https://www.yanolja-research.com/datalab/tourism/about"
                backgroundColor="#F54B1E"
                imageUrl="/asset/datalab.svg"
              />
            </li>
          </ul>
        }
      />
      <MainLayout
        leftChildren={
          <SlideCarousel
            slideData={cardData}
            pageLink="https://www.yanolja-research.com/insight/list"
            isScroll={true}
            sectionTitle="인사이트 / 브리프"
            breakpoints={{
              0: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.3 },
              1280: { slidesPerView: 3.18 },
            }}
          />
        }
        rightChildren={
          <SlideCarousel
            slideData={imageCardData}
            pageLink="https://www.yanolja-research.com/trend/list"
            sectionTitle="동향보고서"
            breakpoints={{
              0: { slidesPerView: 1.5 },
              480: { slidesPerView: 3.1 },
              768: { slidesPerView: 1 },
            }}
          />
        }
        overflow="visible"
      />
      <SectionLayoutBG>
        <SlideCarousel
          slideData={simpleImageCardData}
          pageLink="https://www.yanolja-research.com/report/list"
          isScroll={true}
          sectionTitle="연구보고서"
          breakpoints={{
            0: { slidesPerView: 1.8 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4.5 },
          }}
        />
      </SectionLayoutBG>
      <MainLayout
        leftChildren={<NewsBoard />}
        rightChildren={<UseDataComponent />}
      />
      <SectionLayoutBG>
        <SnsComponent />
      </SectionLayoutBG>

      <Footer />
    </main>
  );
}

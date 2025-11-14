export type SliderData = {
  id: number;
  subTitle: string;
  title: string;
  backgroundImageUrl: string;
  linkUrl: string;
  alt: string;
};
export type CardData = {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
  alt: string;
  linkUrl: string;
  date: string;
};
export type ImageCardData = {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
  linkUrl: string;
  date: string;
};
export type SimpleImageCardData = {
  id: number;
  imageUrl: string;
  alt: string;
  linkUrl: string;
  date: string;
};
export type SlideData = CardData | ImageCardData | SimpleImageCardData;

// 타입 가드
export const isCardData = (slide: SlideData): slide is CardData => {
  return "subTitle" in slide;
};

export const isImageCardData = (slide: SlideData): slide is ImageCardData => {
  return !("subTitle" in slide) && "title" in slide;
};

export const isSimpleImageCardData = (
  slide: SlideData
): slide is SimpleImageCardData => {
  return !("title" in slide) && !("subTitle" in slide);
};

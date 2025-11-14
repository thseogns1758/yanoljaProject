export type MediaReportData = {
  id: number;

  title: string;
  date: string;
  link: string;
  source: string;
};
export type PressReleaseData = {
  id: number;
  title: string;
  date: string;
  link: string;
};

export type NewsData = MediaReportData | PressReleaseData;

export const isMediaReportData = (news: NewsData): news is MediaReportData => {
  return "source" in news;
};

export const isPressReleaseData = (
  news: NewsData
): news is PressReleaseData => {
  return !("source" in news);
};

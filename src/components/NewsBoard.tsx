"use client";

import {
  NewsData,
  isMediaReportData,
  isPressReleaseData,
} from "@/type/newsType";
import { mediaReportData, pressReleaseData } from "@/data/newsData";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import "./newsBoard.css";
const NewsBoard = () => {
  const [newsData, setNewsData] = useState<NewsData[]>(mediaReportData);
  const [selectedTitle, setSelectedTitle] = useState<string>("언론보도");
  useEffect(() => {
    if (selectedTitle === "언론보도") {
      setNewsData(mediaReportData);
    } else {
      setNewsData(pressReleaseData);
    }
  }, [selectedTitle]);
  return (
    <div>
      <div className="news_tab_container">
        <ul className="news_tab">
          <li
            className={selectedTitle === "언론보도" ? "active" : ""}
            onClick={() => setSelectedTitle("언론보도")}
          >
            <h4>언론보도</h4>
          </li>
          <li
            className={selectedTitle === "보도자료" ? "active" : ""}
            onClick={() => setSelectedTitle("보도자료")}
          >
            <h4>보도자료</h4>
          </li>
        </ul>
        <div>
          <a
            href="https://www.yanolja-research.com/media/list"
            className="news_tab_more"
          >
            <span>더보기</span>
            <MdArrowForwardIos size={16} style={{ marginBottom: "5px" }} />
          </a>
        </div>
      </div>
      <div className="news_list">
        {newsData.slice(0, 5).map((news) => (
          <div key={news.id} className="news_item">
            <a href={news.link}>
              <span>{`[${
                (isMediaReportData(news) && news.source) ||
                (isPressReleaseData(news) && "보도자료")
              }] ${news.title}`}</span>
              <p>{news.date}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;

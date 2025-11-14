"use client";

import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="header_top">
      <a className="header_logo" href="">
        <img src="/asset/logo.svg" alt="" />
      </a>

      <nav className="header_nav">
        <a href="https://www.yanolja-research.com/insight/list">ReSearch</a>
        <a href="https://www.yanolja-research.com/datalab/tourism/about">
          Datalab
        </a>
        <a href="https://www.yanolja-research.com/brand/attractiveness">
          Indexes
        </a>
        <a href="https://www.yanolja-research.com/intro">About</a>
      </nav>

      <div className="right_box">
        <select name="" id="" className="lang">
          <option value="">KR</option>
          <option value="">EN</option>
        </select>

        <button
          className="burger_button"
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`burger_menu_field_container ${
          isBurgerOpen ? "active" : ""
        }`}
      >
        <button
          className="burger_close_button"
          onClick={() => setIsBurgerOpen(false)}
        >
          ✕
        </button>
        <div className="burger_menu_field">
          <ul>
            <li>
              <a href="https://www.yanolja-research.com/">HOME</a>
            </li>
            <li>
              <a href="https://www.yanolja-research.com/insight/list">
                RESEARCH
              </a>
            </li>
            <li>
              <a href="https://www.yanolja-research.com/brand/attractiveness">
                INDEXES
              </a>
            </li>
            <li>
              <a href="https://www.yanolja-research.com/intro">ABOUT</a>
            </li>
            <li>
              <select name="" id="" className="burger_lang">
                <option value="">KR</option>
                <option value="">EN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* 서브 네비 */}
      <div className="header_sub_nav">
        <div className="header_sub_area">
          <div className="sub_nav_box">
            <ul>
              <li>
                <a href="https://www.yanolja-research.com/insight/list">
                  인사이트
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/brief/list">브리프</a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/trend/list">
                  동향보고서
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/report/list">
                  연구보고서
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/brief/inquiry">
                  구독신청
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.yanolja-research.com/datalab/tourism/about">
                  국내 숙박업 실적 지표
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/datalab/tourism/dashboard">
                  관광지표 대시보드
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/datalab/download">
                  데이터 다운로드
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.yanolja-research.com/brand/attractiveness">
                  야놀자 매력도 지수
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/brand/background">
                  야놀자 브랜드자산 지수
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.yanolja-research.com/intro">연구원 소개</a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/greeting">인사말</a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/event/end/list">
                  연구원 소식
                </a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/media/list">미디어</a>
              </li>
              <li>
                <a href="https://www.yanolja-research.com/notice/list">
                  공지사항
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

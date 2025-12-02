"use client";

import React, { useState } from "react";

import "./header.css";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="header_top">
      <a className="header_logo" href="#">
        {/* <img src="/asset/logo.svg" alt="" /> */}
        <div style={{ color: "#f25430", fontSize: "34px", fontWeight: "bold" }}>
          Toy-Yanolja
        </div>
      </a>

      <nav className="header_nav">
        <a href="#">ReSearch</a>
        <a href="#">Datalab</a>
        <a href="#">Indexes</a>
        <a href="#">About</a>
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
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">RESEARCH</a>
            </li>
            <li>
              <a href="#">INDEXES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
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
                <a href="#">인사이트</a>
              </li>
              <li>
                <a href="#">브리프</a>
              </li>
              <li>
                <a href="#">동향보고서</a>
              </li>
              <li>
                <a href="#">연구보고서</a>
              </li>
              <li>
                <a href="#">구독신청</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">국내 숙박업 실적 지표</a>
              </li>
              <li>
                <a href="#">관광지표 대시보드</a>
              </li>
              <li>
                <a href="#">데이터 다운로드</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">야놀자 매력도 지수</a>
              </li>
              <li>
                <a href="#">야놀자 브랜드자산 지수</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">연구원 소개</a>
              </li>
              <li>
                <a href="#">인사말</a>
              </li>
              <li>
                <a href="#">연구원 소식</a>
              </li>
              <li>
                <a href="#">미디어</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

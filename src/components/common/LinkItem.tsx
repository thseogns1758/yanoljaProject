import React from "react";
// title은 'process' 모듈에서 가져올 필요가 없습니다.
// import { title } from "process";
import "./linkItem.css";

const LinkItem = ({
  title,
  link,
  imageUrl,
  backgroundColor,
}: {
  title: string;
  link: string;
  imageUrl: string;
  backgroundColor: string;
}) => {
  return (
    <div
      className="link-item-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <h6>{title}</h6>
      <a href={link}>바로가기</a>
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default LinkItem;

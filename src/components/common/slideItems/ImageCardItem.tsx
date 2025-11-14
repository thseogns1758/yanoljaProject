"use client";
import { ImageCardData } from "@/type/slideType";
import Image from "next/image";
import "./imageCardItem.css";
const ImageCardItem = ({
  imageUrl,
  alt,
  linkUrl,
  date,
  title,
}: ImageCardData) => {
  return (
    <div className="image_card">
      <a href={linkUrl}>
        <Image className="image_card_image" src={imageUrl} alt={alt} fill />
        <div className="image_card_info">
          <h5>{title}</h5>
          <small>{date}</small>
        </div>
      </a>
    </div>
  );
};
export default ImageCardItem;

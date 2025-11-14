"use client";
import { CardData } from "@/type/slideType";
import Image from "next/image";
import "./cardItem.css";
const CardItem = ({
  title,
  subTitle,
  imageUrl,
  linkUrl,
  alt,
  date,
}: CardData) => {
  return (
    <div>
      <a href={linkUrl}>
        <Image
          className="card_image"
          src={imageUrl}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
        />
        <div>
          <p className="card_sub_title">{subTitle}</p>
          <h5 className="card_title">{title}</h5>
          <small className="card_date">{date}</small>
        </div>
      </a>
    </div>
  );
};

export default CardItem;

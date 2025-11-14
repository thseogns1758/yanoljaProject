import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

import "./useDataComponent.css";
const UseDataComponent = () => {
  return (
    <div>
      <div>
        <a className="use_data_more" href="#">
          <span>데이터</span>
          <MdArrowForwardIos size={20} style={{ marginBottom: "5px" }} />
        </a>
      </div>
      <button className="use_data_button">
        <Image
          className="use_data_image"
          src="/asset/icon_mail.svg"
          alt=""
          width={0}
          height={0}
        />
        <p className="use_data_text">
          야놀자 리서치가 활용한 데이터를
          <br />
          편하게 사용해보세요!
        </p>
      </button>
    </div>
  );
};

export default UseDataComponent;

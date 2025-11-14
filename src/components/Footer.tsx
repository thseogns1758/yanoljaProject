"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";
import "./footer.css";

const Footer = () => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue !== "none") {
      window.open(selectedValue, "_blank");
    }
  };

  // 옵션 배열
  const familySites = [
    { label: "Family site", value: "none" },
    { label: "경희대 H&T 애널리틱스 센터", value: "http://khta.khu.ac.kr/" },
    {
      label: "Purdue CHRIBA",
      value: "https://www.purdue.edu/hhs/htm/research/CHRIBA/index.html",
    },
    { label: "야놀자", value: "https://www.yanolja.com/" },
    {
      label: "야놀자클라우드",
      value: "https://business.yanolja.com/web/kr/solutions/solutions1",
    },
    {
      label: "인터파크",
      value: "https://www.interpark.com/malls/index.html?gateTp=1",
    },
    { label: "산하정보기술", value: "https://www.sanhait.co.kr/" },
    { label: "트리플", value: "https://triple.guide/" },
    { label: "데일리호텔", value: "https://www.dailyhotel.com/" },
    { label: "데이블", value: "https://dable.io/ko/" },
    { label: "eZee Technosys", value: "https://www.ezeetechnosys.com/" },
  ];

  return (
    <footer>
      <a
        className="sticky_button"
        href="https://www.yanolja-research.com/brief/inquiry"
      >
        <div className="icon_circle">
          <VscBellDot size={24} color="#F54B1E" />
        </div>
        <div>구독신청</div>
      </a>

      <div className="footer_left">
        <div className="footer_top_left">
          <img src="/asset/logo_white.svg" alt="" />
        </div>
        <div className="footer_bottom_left">
          <ul>
            <li>
              <a
                className="privacy_link"
                href="https://www.yanolja-research.com/agreement/privacy"
              >
                개인정보 처리방침
              </a>
            </li>
          </ul>
          <ul>
            <li>(주)야놀자리서치</li>
            <li>대표이사. 박성식</li>
            <li>사업자등록번호. 308-86-02788</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.kbei.org/whistle/center/?code=yanolja"
                target="_blank"
                style={{ color: "#ffd800" }}
              >
                Y-Siren (Compliance/Whistleblowing)
              </a>
            </li>
            <li>
              E-mail.
              <a href="mailto:yanoljaresearch@yanolja.com">
                yanoljaresearch@yanolja.com
              </a>
            </li>
            <li>서울특별시 강남구 테헤란로 108길 42 MDM타워 4층</li>
          </ul>
          <p>© YANOLJA RESEARCH. All rights reserved.</p>
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_select">
          <select onChange={handleSelectChange}>
            {familySites.map((site) => (
              <option key={site.value} value={site.value}>
                {site.label}
              </option>
            ))}
          </select>
          <div className="footer_plus">
            <AiOutlinePlus color="#fff" size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

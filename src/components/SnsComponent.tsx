import { snsData } from "@/data/snsData";
import "./snsComponent.css";
const SnsComponent = () => {
  return (
    <div className="sns_container">
      <div className="sns_content">
        <h2>야놀자리서치의 더 많은 소식을 SNS로 만나보세요.</h2>
        <ul className="sns_list">
          {snsData.map((sns) => (
            <li key={sns.id}>
              <a href={sns.linkUrl}>
                <img src={sns.imageUrl} alt={sns.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="https://www.yanolja-research.com/brief/inquiry">
        <button className="subscribe_button">구독신청하기</button>
      </a>
    </div>
  );
};

export default SnsComponent;

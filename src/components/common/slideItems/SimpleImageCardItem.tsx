import "./simpleImageCardItem.css";

const SimpleImageCardItem = ({
  imageUrl,
  alt,
  linkUrl,
  date,
}: {
  imageUrl: string;
  alt: string;
  linkUrl: string;
  date: string;
}) => {
  return (
    <div className="simple_image_card_item">
      <a href={linkUrl}>
        <img src={imageUrl} alt={alt} />
        <small className="simple_image_card_item_date">{date}</small>
      </a>
    </div>
  );
};

export default SimpleImageCardItem;

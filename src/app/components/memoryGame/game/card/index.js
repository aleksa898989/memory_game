const Card = (props) => {
  const imageSource = `${window.location.origin}/images/${props.image}.jpg`;
  const backPath = `${window.location.origin}/images/back_of_the_card.jpg`;

  let className = "card flip-card";
  if (props.matched) {
    className = className + " matched";
  }
  const classNameWithAnimation = className + " animate";

  return (
    <div
      onClick={() => {
        if (!props.matched && !props.showImage) {
          props.onClick(props.id);
        }
      }}
      className={props.showImage ? classNameWithAnimation : className}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={`${backPath}`} draggable="false" alt="" />
        </div>
        <div className="flip-card-back">
          <img src={`${imageSource}`} draggable="false" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;

const SliderItem = ({ image, title1, title2, description, number, style }) => {
  return (
    <div className='slider__item' style={style}>
      <span className='slider__item-number'>{number}</span>
      <div className='slider__item-img'>
        {" "}
        <img src={image} alt='' />
      </div>
      <div className='slider__item-desc'>
        <h2>
          <span>{title1}</span>
          <span>{title2}</span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SliderItem;

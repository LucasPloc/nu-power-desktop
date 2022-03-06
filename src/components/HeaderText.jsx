import checkIcon from "../icons/check-circle.svg";

const HeaderText = ({ currentSlide }) => {
  return (
    <div className='header__text'>
      <h1 className='header__title'>
        <span className='header__title--first'>{currentSlide.firstTitle}</span>
        <span className='header__title--second'>
          {currentSlide.secondTitle}
        </span>
      </h1>
      <span className='header__description'>{currentSlide.description}</span>
      <div className='header__features'>
        <span>
          <img src={checkIcon} alt='check circle' />
          {currentSlide.feature1}
        </span>
        <span>
          {" "}
          <img src={checkIcon} alt='check circle' />
          {currentSlide.feature2}
        </span>
      </div>
    </div>
  );
};

export default HeaderText;

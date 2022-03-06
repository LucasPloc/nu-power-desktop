import { useRef } from "react";

const HeaderSlider = ({ changeSlide, slides }) => {
  const btnRef = useRef();
  const moveButton = (number) => {
    if (number === 0) {
      btnRef.current.style.left = "3%";
    }
    if (number === 1) {
      btnRef.current.style.left = "37%";
    }
    if (number === 2) {
      btnRef.current.style.left = "60%";
    }
    if (number === 3) {
      btnRef.current.style.left = "80%";
    }
  };
  return (
    <div className='header__slider'>
      <a className='header__slider-btn' ref={btnRef}>
        Odkryj wyprawę
      </a>
      <div
        className='header__slider-dot header__slider-dot-0'
        onClick={() => {
          changeSlide(0);
          moveButton(0);
        }}
      ></div>
      <div
        className='header__slider-dot header__slider-dot-1'
        onClick={() => {
          changeSlide(1);
          moveButton(1);
        }}
      ></div>
      <div
        className='header__slider-dot header__slider-dot-2'
        onClick={() => {
          changeSlide(2);
          moveButton(2);
        }}
      ></div>
      <div
        className='header__slider-dot header__slider-dot-3'
        onClick={() => {
          changeSlide(3);
          moveButton(3);
        }}
      ></div>
    </div>
  );
};

export default HeaderSlider;

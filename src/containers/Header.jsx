import { useState } from "react";
import slide1 from "../images/header-img-1.jpg";
import slide2 from "../images/mountains.jpg";
import { InfoBar, HeaderNav, HeaderText, HeaderSlider } from "../components";

const headerSlidesArray = [
  {
    image: slide1,
    firstTitle: "KULINARNE RPA",
    secondTitle: " z Grześkiem Zawieruchą",
    description: "Kucharska przygoda, którą zapamiętasz na całe życie",
    feature1: " Wspólne gotowanie ze zwycięzcą VIII edycji MasterChef",
    feature2:
      "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
  },
  {
    image: slide2,
    firstTitle: "GÓRSKA WSPINACZKA",
    secondTitle: " z Joanną Mróz",
    description: "Górska przygoda, którą zapamiętasz na całe życie",
    feature1: " Wspólna wspinaczka z mistrzynią świata",
    feature2:
      "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
  },
  {
    image: slide1,
    firstTitle: "Slajd 3",
    secondTitle: " Slajd 3",
    description: "Kucharska przygoda, którą zapamiętasz na całe życie",
    feature1: " Wspólne gotowanie ze zwycięzcą VIII edycji MasterChef",
    feature2:
      "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
  },
  {
    image: slide2,
    firstTitle: "Slajd 4",
    secondTitle: "Slajd 4",
    description: "Górska przygoda, którą zapamiętasz na całe życie",
    feature1: " Wspólna wspinaczka z mistrzynią świata",
    feature2:
      "Dwa tygodnie na wyspach południowo-zachodniej części Oceanu Indyjskiego",
  },
];

const Header = () => {
  const [slides, setSlides] = useState(headerSlidesArray);
  const [currentSlide, setCurrentSlide] = useState(headerSlidesArray[0]);

  const changeSlide = (number) => {
    setCurrentSlide(headerSlidesArray[number]);
  };

  return (
    <header
      className='header'
      style={{ background: `url(${currentSlide.image})` }}
    >
      <InfoBar
        text='Check out our Coronavirus information
       for traveleres'
        additionalClass='info-bar--top'
      />
      <HeaderNav />
      <HeaderText currentSlide={currentSlide} />
      <HeaderSlider changeSlide={changeSlide} slides={slides} />
    </header>
  );
};

export default Header;

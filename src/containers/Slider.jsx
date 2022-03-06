import { SliderItem } from "../components";
import image1 from "../images/Image-slider-1.jpg";

const Slider = () => {
  return (
    <div className='slider'>
      <div
        className='main-carousel '
        data-flickity='{ "cellAlign": "center",
         "freeScroll": true,
          "percentPosition": false, "pageDots": false
        }'
      >
        {" "}
        <SliderItem
          image={image1}
          number='01'
          title1='FINO ALLA FINE'
          title2='Włoska robota'
          description='Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmo
         d tempor incididunt ut labore et dolore magn
         a aliqua. Ut enim ad minim veniam, quis nostru
         d exercitation ullamco laboris nisi ut aliquip '
        />
        <SliderItem
          image={image1}
          number='01'
          title1='FINO ALLA FINE'
          title2='Włoska robota'
          description='Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmo
         d tempor incididunt ut labore et dolore magn
         a aliqua. Ut enim ad minim veniam, quis nostru
         d exercitation ullamco laboris nisi ut aliquip '
        />
        <SliderItem
          image={image1}
          number='01'
          title1='FINO ALLA FINE'
          title2='Włoska robota'
          description='Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmo
         d tempor incididunt ut labore et dolore magn
         a aliqua. Ut enim ad minim veniam, quis nostru
         d exercitation ullamco laboris nisi ut aliquip '
        />
        <SliderItem
          image={image1}
          number='01'
          title1='FINO ALLA FINE'
          title2='Włoska robota'
          description='Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmo
         d tempor incididunt ut labore et dolore magn
         a aliqua. Ut enim ad minim veniam, quis nostru
         d exercitation ullamco laboris nisi ut aliquip '
        />
      </div>
    </div>
  );
};

export default Slider;

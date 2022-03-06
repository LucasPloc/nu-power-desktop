import ovalImg from "../images/oval-footer.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__top'>
        <h3 className='footer__title'>
          <span>Chcesz przeżyć</span>
          <span>niepowtarzalne</span>
          <span> - chwile?</span>
        </h3>
        <div className='footer__social'>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
        <div className='footer__lang'>
          <span>PL</span>
          <span>EN</span>
          <span>RU</span>
        </div>
      </div>
      <div className='footer__mid'>
        <div className='footer__columns'>
          <div className='footer__column footer__column--1'>
            <h2>NuLuxury</h2>
            <span>Hotele</span>
            <span>Safari</span>
            <span>Rejsy</span>
            <span>Wellbeing</span>
            <span>Specjalne</span>
          </div>
          <div className='footer__column footer__column--2'>
            {" "}
            <h2>NuPower</h2>
            <span>Wyprawy</span>
          </div>
          <div className='footer__column footer__column--3'>
            {" "}
            <h2>Sprawdź też</h2>
            <span>O nas</span>
            <span>Inspiracje</span>
            <span>Blog</span>
            <span>Kontakt</span>
          </div>
          <div className='footer__column footer__column--4'>
            {" "}
            <h2>Skontaktuj się</h2>
            <span>000 000 000</span>
            <span>biuro@nupowerhouse.pl</span>
          </div>
        </div>
        <div className='footer__oval'>
          <img src={ovalImg} alt='' />
        </div>
      </div>
      <div className='footer__bot'>
        {" "}
        <div className='footer__copyrights'>
          <div className='footer__copyrights--left'>
            <span>© 2020 NuPowerHouse — all rights reserved.</span>
            <span>Polityka prywatności</span>
          </div>
          <div className='footer__copyrights--right'>
            <span>12:32 pm</span>
            <span>Realizacja:</span>
            <span>EMPRESSIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

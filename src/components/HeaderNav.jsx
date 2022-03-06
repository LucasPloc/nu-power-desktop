import logo from "../images/logo-placeholder.svg";
import menuIcon from "../icons/menu-icon.svg";

const HeaderNav = () => {
  return (
    <nav className='header__nav'>
      <div className='header__nav--left'>
        <span>t: 000 000 000</span>
        <span>m: biuro@nupowerhouse.pl</span>
        <span>PL</span>
      </div>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='header__nav--right'>
        <span>NuPower</span>
        <img src={menuIcon} alt='menu button' />
      </div>
    </nav>
  );
};

export default HeaderNav;

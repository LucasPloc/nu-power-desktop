const InfoBar = ({ text, additionalClass }) => {
  return (
    <div className={`info-bar ${additionalClass}`}>
      <span>{text}</span>
    </div>
  );
};

export default InfoBar;

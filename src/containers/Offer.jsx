import offer1 from "../images/offer-1.jpg";
import offer2 from "../images/offer-2.jpg";

const Offer = () => {
  return (
    <section className='offer'>
      <div className='offer__left'>
        <img src={offer1} alt='camping' />
      </div>
      <div className='offer__right'>
        <h2 className='offer__title'>
          <span>Podróże — </span>
          <span>wychodzące</span>
          <span> poza nawias</span>
        </h2>
        <p className='offer__description'>
          <span>Poznaj naszą ofertę wypraw oraz</span>
          <span> niepowtarzalnych, szytych na miarę</span>
          <span>doświadczeń</span>
        </p>

        <img src={offer2} alt='holidays on the beach' />
      </div>
    </section>
  );
};

export default Offer;

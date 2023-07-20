import { OFFER_ICON } from "../utils/constant";

const Offers = (props) => {
  // const info = props.offer.info;
  const { header, couponCode, description, offerLogo } = props.offer.info;
  return (
    <>
      <div className="offer-div">
        <div className="offer-heading-continer">
          <img className="offer-icon" src={OFFER_ICON + offerLogo} />
          <div>{header}</div>
        </div>
        <div className="offer-description">
          {couponCode} | {description}
        </div>
      </div>
    </>
  );
};

export default Offers;

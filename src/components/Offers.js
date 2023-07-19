import { OFFER_ICON } from "../utils/constant";

const Offers = (props) => {
  // const info = props.offer.info;
  // const [header, couponCode, description] = info;
  return (
    <>
      <div className="offer-div">
        <div className="offer-heading-continer">
          <img
            className="offer-icon"
            src={OFFER_ICON + props.offer.info.offerLogo}
          />
          <div>{props.offer.info.header}</div>
        </div>
        <div className="offer-description">
          {props.offer.info.couponCode} | {props.offer.info.description}
        </div>
      </div>
    </>
  );
};

export default Offers;

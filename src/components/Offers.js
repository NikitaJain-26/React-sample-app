import { OFFER_ICON } from "../utils/constant";

const Offers = (props) => {
  const { header, couponCode, description, offerLogo } = props.offer.info;
  return (
    <>
      <div className="border-[1px] border-solid border-gray-400 rounded-md mr-4 p-2 mb-4">
        <div className="flex items-center">
          <img className="offer-icon" src={OFFER_ICON + offerLogo} />
          <div className="text-sm px-2 font-semibold text-gray-500">
            {header}
          </div>
        </div>
        <div className="text-xs pt-2 text-semibold text-gray-400">
          {couponCode} | {description}
        </div>
      </div>
    </>
  );
};

export default Offers;

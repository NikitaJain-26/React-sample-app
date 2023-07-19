import { IMAGE_URL } from "../utils/constant";

const Item = (props) => {
  //const [name, description, price, imageId] = props.card;
  return (
    <div className="itemCard">
      <div className="itemDescription">
        <h3 className="item-heading">{props.card.name}</h3>
        <div>Rs. {props.card.price / 100}</div>
        <p className="description">{props.card.description}</p>
      </div>
      <div className="btn-img">
        <button className="add-btn"> Add </button>
        <img className="item-img" src={IMAGE_URL + props.card.imageId} />
      </div>
    </div>
  );
};

export default Item;

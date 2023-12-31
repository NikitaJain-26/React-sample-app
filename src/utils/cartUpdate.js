const findItemCount = (cartDetails, item) => {
  let count = 0;
  if (cartDetails.resId == "") {
    count = 0;
  } else if (cartDetails.items.length == 0) {
    count = 0;
  } else {
    cartDetails.items.map((i) => {
      if (i.item.card.info.id == item.card.info.id) {
        count = i.count;
      }
    });
  }
  return count;
};

export default findItemCount;

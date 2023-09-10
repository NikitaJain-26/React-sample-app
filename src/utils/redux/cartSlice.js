import { createSlice } from "@reduxjs/toolkit";
import findItemCount from "../cartUpdate";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantName: "",
    resId: "",
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      if (state.resId == "" || state.resId == action.payload.resId) {
        state.resId = action.payload.resId;
        state.restaurantName = action.payload.restaurantName;
        let initialcount = findItemCount(state, action.payload.item);
        if (initialcount == 0) {
          state.items.push({
            count: initialcount + 1,
            item: action.payload.item,
          });
        } else {
          state.items.map((i) => {
            if (i.item.id == action.payload.item.id) {
              i.count = i.count + 1;
            }
          });
        }
      }
    },
    removeItem: (state, action) => {
      let initialcount = findItemCount(state, action.payload.item);
      if (initialcount > 1) {
        state.items.map((i) => {
          if (i.item.id == action.payload.item.id) {
            i.count = i.count - 1;
          }
        });
      }
      if (initialcount == 1) {
        let itemIndex;
        state.items.map((i, index) => {
          if (i.item.id == action.payload.item.id) {
            i.count = i.count - 1;
            itemIndex = index;
          }
          return i;
        });
        state.items.splice(itemIndex, 1);
        if (state.items.length == 0) {
          state.resId = "";
          state.restaurantName = "";
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

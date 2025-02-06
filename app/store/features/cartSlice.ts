import { productType } from "@/components/product/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  cartItems: productType[];
  totalPrice: number;
};
const initialState: initialStateType = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddProduct: (state, action: PayloadAction<productType>) => {
      const findItem = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );
      if (findItem) {
        findItem.qty++;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      state.totalPrice = state.cartItems.reduce((acc, cur) => {
        return (acc = acc + cur.price * cur.qty);
      }, 0);
    },
    RemoveProduct: (state, action: PayloadAction<productType>) => {
      const findItem = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );
      if (findItem?.qty > 1) {
        findItem.qty--;
      } else {
        state.cartItems = state.cartItems.filter(
          (p) => p.slug !== action.payload.slug
        );
      }
      state.totalPrice = state.cartItems.reduce((acc, cur) => {
        return (acc = acc + cur.price * cur.qty);
      }, 0);
    },
  },
});

export const { AddProduct, RemoveProduct } = cartSlice.actions;
export default cartSlice.reducer;

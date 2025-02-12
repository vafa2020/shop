import Product, { productType } from "@/components/product/Product";
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
      const findProduct = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );
      if (!findProduct) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems = state.cartItems.map((product) =>
          product.slug === findProduct.slug ? action.payload : product
        );
      }

      state.totalPrice = state.cartItems.reduce((acc, cur) => {
        return (acc = acc + cur.price * cur?.qty!);
      }, 0);
    },
    RemoveProduct: (state, action: PayloadAction<string>) => {
      const checkProduct = state.cartItems.find(
        (product) => product.slug === action.payload
      );
      if (checkProduct?.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (product) => product.slug !== action.payload
        );
      } else {
        state.cartItems = state.cartItems.map((product) =>
          product.slug === action.payload
            ? { ...product, qty: product.qty! - 1 }
            : product
        );
      }
      state.totalPrice = state.cartItems.reduce((acc, cur) => {
        return (acc = acc + cur.price * cur.qty!);
      }, 0);
    },
  },
});

export const { AddProduct, RemoveProduct } = cartSlice.actions;
export default cartSlice.reducer;

"use client";
import { useAppDispatch, useAppSelector } from "@/app/hook/reduxHooks";
import { commafy } from "@/utils/commafy";
import React from "react";
import { productType } from "../product/Product";
import { AddProduct } from "@/app/store/features/cartSlice";
import { RootState } from "@/app/store/store";
import { toast } from "react-toastify";

const Summery = ({ product }: { product: productType }) => {
  const { cartItems, totalPrice } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();

 const addToCartHandler = () => {
     const checkProduct = cartItems.find((item) => item.slug === product.slug);
     if (!checkProduct && product.count > 0) {
       toast.success("Product Add To cart", {
         position: "top-center",
       });
       dispatch(AddProduct(product));
     }
     if (!checkProduct && product.count === 0) {
       toast.error("Product Is Not Available", {
         position: "top-center",
       });
       return;
     }
     if (checkProduct && product.count < checkProduct?.qty) {
       toast.error("Product Is Not Available", {
         position: "top-center",
       });
       return;
     }
     if (checkProduct && product.count > checkProduct?.qty) {
       toast.success("Product Add To cart", {
         position: "top-center",
       });
       dispatch(AddProduct(product));
     }
   };

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl px-4 py-5 gap-5 w-60 h-40 shadow-md">
      <div className="flex items-center justify-between gap-2">
        <strong>Price</strong>
        <p className="">{commafy(product?.price!)}</p>
      </div>
      <button
        className="w-full bg-green-600 rounded-xl text-white py-2"
        onClick={addToCartHandler}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Summery;

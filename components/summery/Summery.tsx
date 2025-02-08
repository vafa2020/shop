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
  const checkProduct = cartItems.find((item) => item.slug === product.slug);
  const addToCartHandler = () => {
    if (!checkProduct && product?.count > 0) {
      dispatch(AddProduct(product));
      toast.success("Product Add To cart", {
        position: "top-right",
      });
    } else if (checkProduct && checkProduct?.count > 0) {
      dispatch(AddProduct(product));
      toast.success("Product Add To cart", {
        position: "top-right",
      });
    } else {
      toast.error("Product Is Not Available", {
        position: "top-right",
      });
    }
  };
  const checkDisableButton = (): boolean => {
    if (checkProduct && checkProduct.count === 0) {
      return true;
    } else if (product.count === 0) {
      return true;
    }
    return false;
  };
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl px-4 py-5 gap-5 w-60 h-40 shadow-md">
      <div className="flex items-center justify-between gap-2">
        <strong>Price</strong>
        <p className="">{commafy(product?.price!)}</p>
      </div>
      <button
        className="w-full bg-green-600 rounded-xl text-white py-2 disabled:cursor-not-allowed"
        onClick={addToCartHandler}
        disabled={checkDisableButton()}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Summery;

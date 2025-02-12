"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/hook/reduxHooks";
import { commafy } from "@/utils/commafy";
import { productType } from "../product/Product";
import { AddProduct } from "@/app/store/features/cartSlice";
import { RootState } from "@/app/store/store";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const Summery = ({
  product,
  cart = false,
}: {
  product?: productType;
  cart: boolean;
}) => {
  const { cartItems, totalPrice } = useAppSelector(
    (state: RootState) => state.cart
  );
  console.log('after-render', totalPrice)
  const dispatch = useAppDispatch();
  const addToCart = () => {
    const checkProduct = cartItems.find((item) => item.slug === product?.slug);
    const qty: number = checkProduct ? checkProduct?.qty! + 1 : 1;
    if (product?.count! >= qty) {
      dispatch(AddProduct({ ...product!, qty }));
      toast.success("Product Add To cart", {
        position: "top-center",
      });
      redirect("/cart");
    } else {
      toast.error("Product Is Not Available", {
        position: "top-center",
      });
      return;
    }
  };
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl px-4 py-5 gap-5 w-60 h-40 shadow-md">
      <div className="flex items-center justify-between gap-2">
        <strong>Price</strong>
        {cart ? (
          <p className="">{commafy(totalPrice)}</p>
        ) : (
          <p className="">{commafy(product?.price!)}</p>
        )}
      </div>
      {cart ? (
        <button
          className="w-full bg-green-600 rounded-xl text-white py-2"
          onClick={() => redirect("/checkout")}
        >
          CheckOut
        </button>
      ) : (
        <button
          className="w-full bg-green-600 rounded-xl text-white py-2"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Summery;

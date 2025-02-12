"use client";
import { useAppDispatch, useAppSelector } from "@/app/hook/reduxHooks";
import { commafy } from "@/utils/commafy";
import React from "react";
import { productType } from "../product/Product";
import { AddProduct } from "@/app/store/features/cartSlice";
import { RootState } from "@/app/store/store";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const Summery = ({ product }: { product?: productType }) => {
  const { cartItems, totalPrice } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();
  const ActionHandler = (value: boolean) => {
    const checkProduct = cartItems.find((item) => item.slug === product?.slug);
    const qty: number = checkProduct ? checkProduct?.qty! + 1 : 1;
    if (value) {
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
    } else {
      redirect("/checkout");
    }
  };
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl px-4 py-5 gap-5 w-60 h-40 shadow-md">
      <div className="flex items-center justify-between gap-2">
        <strong>Price</strong>
        <p className="">{commafy(product ? product?.price! : totalPrice)}</p>
      </div>
      <button
        className="w-full bg-green-600 rounded-xl text-white py-2"
        onClick={() => ActionHandler(product ? true : false)}
      >
        {product ? "Add To Cart" : "CheckOut"}
      </button>
    </div>
  );
};

export default Summery;

"use client";
import { useAppDispatch } from "@/app/hook/reduxHooks";
import { commafy } from "@/utils/commafy";
import React from "react";
import { productType } from "../product/Product";
import { AddProduct } from "@/app/store/features/cartSlice";

const Summery = ({ product }: { product: productType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl px-4 py-5 gap-5 w-60 h-40 shadow-md">
      <div className="flex items-center justify-between gap-2">
        <strong>Price</strong>
        <p className="">{commafy(product?.price!)}</p>
      </div>
      <button
        className="w-full bg-green-600 rounded-xl text-white py-2"
        onClick={() => dispatch(AddProduct(product))}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Summery;

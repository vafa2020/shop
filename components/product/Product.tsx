"use client";
import { useAppDispatch } from "@/app/hook/reduxHooks";
import { AddProduct } from "@/app/store/features/cartSlice";
import { commafy } from "@/utils/commafy";
import Link from "next/link";
import React from "react";

export type productType = {
  title: string;
  price: number;
  description: string;
  slug: string;
  image: string;
  cat: string;
  count: number;
  color: string;
  qty?:number
};
const Product = ({ product }: { product: productType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white border-1 border-black shadow-sm mb-5 block overflow-hidden hover:shadow-xl hover:scale-[1.01]  p-5">
      <div className="">
        <Link href={`/product/${product.slug}`} className="">
          <img
            src={product.image}
            alt={product.slug}
            className="h-60 m-auto hover:scale-[1]"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>
        <p className="p-2">{commafy(product.price)}</p>
        <button
          className="bg-green-600 text-white rounded-xl px-4 py-2"
          onClick={() => dispatch(AddProduct(product))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

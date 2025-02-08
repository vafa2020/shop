"use client";
import { useAppDispatch, useAppSelector } from "@/app/hook/reduxHooks";
import { AddProduct } from "@/app/store/features/cartSlice";
import { RootState } from "@/app/store/store";
import { commafy } from "@/utils/commafy";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

export type productType = {
  title: string;
  price: number;
  description: string;
  slug: string;
  image: string;
  cat: string;
  count: number;
  color: string;
  qty?: number;
};
const Product = ({ product }: { product: productType }) => {
  const { cartItems, totalPrice } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();

  const checkProduct = cartItems.find((item) => item.slug === product.slug);
  const addToCartHandler = () => {
    if (!checkProduct && product?.count > 0) {
      dispatch(AddProduct({ ...product, qty: 1, count: product.count - 1 }));
      toast.success("Product Add To cart", {
        position: "top-right",
      });
    } else if (checkProduct && checkProduct?.count > 0) {
      dispatch(
        AddProduct({
          ...product,
          qty: checkProduct?.qty! + 1,
          count: checkProduct.count - 1,
        })
      );
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
          className="bg-green-600 text-white rounded-xl px-4 py-2 disabled:cursor-not-allowed"
          onClick={addToCartHandler}
          disabled={checkDisableButton()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

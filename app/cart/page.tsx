"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { RootState } from "../store/store";
import { commafy } from "@/utils/commafy";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { AddProduct, RemoveProduct } from "../store/features/cartSlice";
import { toast } from "react-toastify";
import { productType } from "@/components/product/Product";
import Summery from "@/components/summery/Summery";
import dynamic from "next/dynamic";

const Cart = () => {
  const { cartItems, totalPrice } = useAppSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useAppDispatch();
  if (cartItems.length === 0) {
    return (
      <p className="bg-red-500 animate-pulse text-white w-40 flex justify-center m-auto p-3 rounded-lg">
        Cart Is Empty
      </p>
    );
  }
  const incrementHandler = (product: productType) => {
    const checkProduct = cartItems.find((item) => item.slug === product.slug);
    const qty: number = checkProduct ? checkProduct?.qty! + 1 : 1;
    console.log("qty", qty);
    if (product.count >= qty) {
      dispatch(AddProduct({ ...product, qty }));
    } else {
      toast.error("Product Is Not Available", {
        position: "top-center",
      });
      return;
    }
  };
  const decrementHandler = (id: string) => {
    dispatch(RemoveProduct(id));
  };
  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      <div className="overflow-x-auto md:col-span-3">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-5">Product</th>
              <th className="p-5">Quantity</th>
              <th className="p-5">Price</th>
              <th className="p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <tr key={product.slug} className="border-b">
                <td className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.slug}
                    className="h-28"
                  />
                </td>
                <td className="text-center">{product.qty}</td>
                <td className="text-center">{commafy(product.price)}</td>
                <td>
                  <div className="flex justify-center items-center gap-5">
                    <button onClick={() => incrementHandler(product)}>
                      <BiPlus />
                    </button>
                    <span>{product.qty}</span>
                    <button
                      className=""
                      onClick={() => decrementHandler(product.slug)}
                    >
                      {product.qty > 1 ? (
                        <BiMinus />
                      ) : (
                        <BiTrash className="text-red-500" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Summery />
      </div>
    </div>
  );
};

export default Cart

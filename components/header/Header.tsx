"use client"
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/app/hook/reduxHooks";
import { RootState } from "@/app/store/store";

const Header = () => {
  const { cartItems, totalPrice } = useAppSelector(
      (state: RootState) => state.cart
    );
    console.log('totalPrice', totalPrice)
  console.log('cartItems', cartItems)
  return (
    <header>
      <nav className="flex h-14 px-8 justify-between items-center border-b-2 bg-white">
        <Link href="/" className="font-bold text-lg">
          Shopping
        </Link>
        <div className="">
          <Link href="/cart" className="p-2">
            Cart-
          </Link>
          <Link href="/login" className="p-2">
            Login
          </Link>
          <Link href="/" className="p-2">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

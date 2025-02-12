"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/app/hook/reduxHooks";
import { RootState } from "@/app/store/store";
import { BiCart } from "react-icons/bi";
const Header = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);
  const [countCart, setCountCart] = useState<number>(0);

  useEffect(() => {
    setCountCart(cartItems.reduce((acc, cur) => acc + cur.qty!, 0));
  }, [cartItems]);
  return (
    <header>
      <nav className="flex h-14 px-8 justify-between items-center border-b-2 bg-white">
        <Link href="/" className="font-bold text-lg">
          Shopping
        </Link>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center relative">
            <Link href="/cart" className="">
              <BiCart size="25" />
            </Link>
            <span className="w-5 h-5 bg-red-500 text-white rounded-full p-1 flex justify-center items-center absolute -top-2 -right-3">
              {countCart}
            </span>
          </div>
          <Link href="/login" className="">
            Login
          </Link>
          <Link href="/" className="">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

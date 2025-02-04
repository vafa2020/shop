import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex h-14 px-8 justify-between items-center border-b-2 bg-white">
        <Link href="/" className="font-bold text-lg">Shopping</Link>
        <div className="">

          <Link href='/cart' className="p-2">Cart</Link>
          <Link href='/login' className="p-2">Login</Link>
          <Link href='/' className="p-2">Home</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

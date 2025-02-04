
import Link from "next/link";
import React from "react";

type productProps = {
  title: string;
  price: number;
  description: string;
  slug: string;
  image: string;
  cat: string;
  count: number;
};
const Product = ({ product }: { product: productProps }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm mb-5 block overflow-hidden">
      <div className="">
        <Link href={`/product/${product.slug}`} className="">
          <img
            src={product.image}
            alt={product.slug}
            className="w-full"
            
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>
        <p className="p-2">{product.price}</p>
        <button className="bg-gray-700 text-white rounded-xl px-4 py-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

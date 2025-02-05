import React, { useState } from "react";
import productsData from "../../../data/products.json";
import { Metadata } from "next";
import ProductDescription from "@/components/productDescription/ProductDescription";
import { commafy } from "@/utils/commafy";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const product = productsData.find((product) => product.slug === slug);

  return {
    title: product?.title,
  };
}
const ProductPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const product = productsData.find((product) => product.slug === slug);
  return (
    <div className="flex justify-center items-center gap-2">
    <div className="flex flex-1">
    <div className="grid md:grid-cols-3 bg-white shadow-md p-10 rounded-xl md:gap-3">
        <div className="col-span-1">
          <img src={product?.image} className="rounded-xl h-72" />
        </div>
        <ProductDescription product={product!} />
      </div>
    </div>
      <div className="flex flex-col justify-between bg-white rounded-xl px-4 py-5 gap-5 w-60 h-40 shadow-md">
        <div className="flex items-center justify-between gap-2">
          <strong>Price</strong>
          <p className="">{commafy(product?.price!)}</p>
        </div>
        <button className="w-full bg-green-600 rounded-xl text-white py-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

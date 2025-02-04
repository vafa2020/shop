import React from "react";
import productsData from "../../../data/products.json";
import { Metadata } from "next";

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
    <div className="flex items-start gap-2">
      <div className="grid md:grid-cols-3 bg-white shadow-md p-10 rounded-xl md:gap-5">
        <div className="col-span-1">
          <img src={product?.image} className="rounded-xl h-72" />
        </div>
        <div className="flex flex-col justify-between col-span-2">
          <div className="flex items-center gap-2">
            <strong>Title:</strong>
            <p className="text-slate-400">{product?.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <strong>Description:</strong>
            <p className="text-slate-400">{product?.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <strong>Category:</strong>
            <p className="text-slate-400">{product?.cat}</p>
          </div>

          <div className="flex items-center gap-2">
            <strong>Count:</strong>
            <p className="text-slate-400">
              {product?.count}
              {product?.count! > 0 ? "✅" : "🚫"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white flex-1 rounded-xl px-2 py-5 gap-5">
        <div className="flex items-center justify-between gap-2">
          <strong>Price</strong>
          <p className="text-slate-400">{product?.price}</p>
        </div>
        <button className="w-full bg-gray-700 rounded-xl text-white py-2">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;

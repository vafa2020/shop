

import React from "react";
import productsData from "../../../data/products.json";
import { Metadata } from "next";
import ProductDescription from "@/components/productDescription/ProductDescription";
import Summery from "@/components/summery/Summery";

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
      <Summery product={product!} />
    </div>
  );
};

export default ProductPage;

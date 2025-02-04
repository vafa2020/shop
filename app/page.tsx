import { Metadata } from "next";
import productsData from "../data/products.json";
import Product from "@/components/product/Product";
export const metadata: Metadata = {
  title: "Home Page - shopping",
};
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {productsData.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";

type PropsComponent = {
  product: {
    color: string;
    title: string;
    description: string;
    cat: string;
    count: number;
  };
};
const ProductDescription = ({ product }: PropsComponent) => {
  const [color, setColor] = useState(false);
  return (
    <div className="col-span-2">
      <div className="flex flex-col justify-between ">
        <div className="mb-1">
          <p className="font-bold">{product?.title}</p>
        </div>

        <hr className="w-full mb-1" />
        <div className="flex items-center gap-2">
          <strong>Color:</strong>
          <p className="text-slate-400">{product?.color}</p>
        </div>
        <div className="rounded-full w-10 h-10 ">
          <span
            style={{ background: product?.color }}
            className="inline-flex justify-between items-center w-8 h-8 rounded-full border-2 text-white cursor-pointer pl-1"
            onClick={() => setColor((prev) => !prev)}
          >
            {color && <BiCheck size="1.5rem"/>}
          </span>
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
            {product?.count! > 0
              ? "Product Is Available✅"
              : "Product Is Not Available🚫"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

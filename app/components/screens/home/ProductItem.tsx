import { url } from "inspector";
import Image from "next/image";
import React, { FC } from "react";
import { IProduct } from "../../../store/product/products.types";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div
      style={{ width: "48%", backgroundColor: "#E5F0EA" }}
      className="rounded-xl mb-5 p-3 shadow-sm"
    >
      <div className="flex justify-center">
        <div
          style={{
            width: 100,
            height: 150,
            backgroundImage: `url(${product.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5">
          {product.title}
        </div>
        <div className="text-sm text-green-600">${product.price}</div>
      </div>
      <button className="text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200">
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;

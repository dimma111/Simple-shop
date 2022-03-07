import React, { FC } from "react";
import { useGetProductsQuery } from "../../../store/product/product.api";
import CartDropdown from "./cart-dropdown/CartDropdown";
import ProductItem from "./ProductItem";

const Home: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(10);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-green-900 font-medium">
          Let's find your products
        </h1>
        <CartDropdown />
      </div>

      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div className="text-red">{error}</div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {data?.map((product: any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

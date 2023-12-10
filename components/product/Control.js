"use client";

// This component have two functionality. One is to control the quantity of the product and another is add to cart button
import { useCartContext } from "@/context/CartContext";
import { apiUrl } from "@/lib/constant";
import { useState } from "react";

export default function Control({ product }) {
  const { addItemToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const { slug, name, discounted_price, primary_image, stock_quantity } =
    product;

  const handleIncrease = () => {
    if (quantity < stock_quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    addItemToCart({
      slug: slug,
      name: name,
      price: discounted_price,
      image: `${apiUrl}${primary_image}`,
      stock: stock_quantity,
      quantity: quantity,
    });
  };

  return (
    <div className="flex flex-col gap-y-6">
      {/* Quantity control button */}
      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">Quantity</h3>
        <div className="quantity-control flex items-center justify-between w-32 px-2 py-1 bg-gray-100 rounded-full">
          <button
            className="text-gray-700 text-2xl focus:outline-none"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="text-gray-700 text-xl">{quantity}</span>
          <button
            className="text-gray-700 text-2xl focus:outline-none"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <button
        onClick={addToCartHandler}
        className=" flex min-w-max max-w-xs items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add to bag
      </button>
    </div>
  );
}

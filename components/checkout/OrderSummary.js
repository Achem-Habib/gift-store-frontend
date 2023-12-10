"use client";

import { useCartContext } from "@/context/CartContext";

function calculateTotalPrice(products) {
  let totalPrice = 0;
  products.map((product) => {
    const price = parseFloat(product.price);
    const quantity = parseFloat(product.quantity);
    totalPrice += price * quantity;
  });
  return totalPrice;
}

export default function OrderSummary() {
  const { cart } = useCartContext();

  const totalPrice = !cart
    ? 0
    : cart.cartItems
    ? calculateTotalPrice(cart.cartItems)
    : 0;
  const shippingCost = 10;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="bg-gray-100 rounded-md px-4 py-6 mx-3 my-5">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xl font-semibold pb-3 text-center">
          ORDER SUMMARY
        </h2>
        <div className="flex justify-between border-b border-b-slate-200 pb-3">
          <p className="font-medium">PRODUCT</p>
          <p className="font-medium">SUBTOTAL</p>
        </div>

        {cart?.cartItems?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-b-slate-200 pb-3 text-sm"
          >
            <p className="text-gray-700">
              {item.name} &times; {item.quantity}
            </p>
            <p className=" text-gray-500">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="flex justify-between border-b border-b-slate-200 pb-3 text-sm">
          <p className="text-gray-700 ">Subtotal</p>
          <p className="text-gray-900">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-b border-b-slate-200 pb-3 text-sm">
          <p className="text-gray-700 ">Shipping cost</p>
          <p className="text-gray-900">${shippingCost.toFixed(2)}</p>
        </div>

        <div className="flex justify-between text-xl font-semibold">
          <p>Total</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-purple-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-lime-500"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}

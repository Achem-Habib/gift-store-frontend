"use client";

// components
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Cart() {
  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900"> Shopping cart </h2>

        <div className="flex flex-col md:flex-row gap-y-6 gap-x-6">
          {/* Cart items */}
          <ul
            role="list"
            className="w-full -my-6 mt-4 divide-y divide-gray-200 border-b border-b-gray-200"
          >
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>

          {/* order summary */}
          <div className="w-full my-auto">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

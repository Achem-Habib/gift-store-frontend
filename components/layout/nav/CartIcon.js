"use client";

import { useCartContext } from "@/context/CartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CartIcon() {
  const { cart } = useCartContext();
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Link href="/cart" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart?.cartItems?.length || 0}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Link>
    </div>
  );
}

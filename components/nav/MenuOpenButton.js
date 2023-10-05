"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";

// context
import { useNavContext } from "@/context/NavContext";

export default function MenuOpenButton() {
  const { setOpen } = useNavContext();
  return (
    <button
      type="button"
      className="relative rounded-md bg-white p-2 text-gray-600"
      onClick={() => setOpen(true)}
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

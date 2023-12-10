"use client";

import { useNavContext } from "@/context/NavContext";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

// components

import Disclose from "./Disclose";

export default function MobileNav({ categories, occasions, recipients }) {
  const { open, setOpen } = useNavContext();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="py-5 mx-5">
                {/* Categories */}
                {categories.length > 0 &&
                  categories.map((category, index) => (
                    <Disclose
                      key={category.id}
                      title={category.name}
                      data={category.subcategories}
                    />
                  ))}

                {/* Occasions list */}
                <Disclose title="Shop by Occasion" data={occasions} />

                {/* recipient list */}
                <Disclose title="Shop by Recipient" data={recipients} />
              </div>

              {/* sign in and up */}
              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

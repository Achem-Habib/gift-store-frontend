import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

// components
import MenuOpenButton from "./MenuOpenButton";
import MobileNav from "./MobileNav";
import UserAccount from "./UserAccount";

// context
import NavContextProvider from "@/context/NavContext";

// api request
import { getCategories, getOccasions, getRecipients } from "@/data";

export default async function Navbar() {
  const categories = await getCategories();
  const occasions = await getOccasions();
  const recipients = await getRecipients();

  return (
    <NavContextProvider>
      <div className="bg-white">
        {/* Mobile menu */}
        <MobileNav
          categories={categories}
          occasions={occasions}
          recipients={recipients}
        />

        {/* Header */}
        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* button to open moble menu */}
                <MenuOpenButton />

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Create account
                    </a>
                  </div>

                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>

                  {/* User Account */}
                  <div className="flex my-auto ml-4 lg:ml-6">
                    <UserAccount />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </NavContextProvider>
  );
}

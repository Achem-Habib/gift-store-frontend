import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// components
import MenuOpenButton from "./MenuOpenButton";
import MobileNav from "./MobileNav";
import UserAccount from "./UserAccount";

// context
import NavContextProvider from "@/context/NavContext";

// api request
import {
  getCategoriesAndSubcategories,
  getOccasions,
  getRecipients,
} from "@/lib/data/getData";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default async function Navbar() {
  const categories = await getCategoriesAndSubcategories();
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
                  <Link href="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link
                      href="/auth/sign-in"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link
                      href="/auth/sign-up"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Create account
                    </Link>
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
                  <CartIcon />

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

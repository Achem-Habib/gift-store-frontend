"use client";

import { useFilterContext } from "@/context/FilterContext";
import { FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import SortOptions from "./SortOptions";

export default function Header() {
  const { setMobileFiltersOpen } = useFilterContext();

  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        New Arrivals
      </h1>

      <div className="flex items-center">
        {/* sort options goes here */}
        <SortOptions />

        <button
          type="button"
          className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
        >
          <span className="sr-only">View grid</span>
          <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

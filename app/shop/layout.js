// context
import FilterContextProvider from "@/context/FilterContext";

// data
import { getOccasions, getRecipients } from "@/data";

//components
import AllFilters from "./_components/AllFilters";
import Header from "./_components/Header";
import MobileFilter from "./_components/MobileFilter";

export default async function ShopLayout({ children }) {
  const occasions = await getOccasions();
  const recipients = await getRecipients();

  return (
    <FilterContextProvider>
      <div>
        {/* Mobile filter dialog */}
        <MobileFilter occasions={occasions} recipients={recipients} />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header of this page */}
          <Header />

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="flex gap-x-8">
              {/* Filters */}
              <div className="hidden lg:block w-1/4">
                <AllFilters occasions={occasions} recipients={recipients} />
              </div>

              {/* Product grid */}
              <div>{children}</div>
            </div>
          </section>
        </main>
      </div>
    </FilterContextProvider>
  );
}

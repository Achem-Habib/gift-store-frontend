// data
import {
  getOccasions,
  getProductsByCategory,
  getRecipients,
} from "@/lib/data/getData";

// context
import FilterContextProvider from "@/context/FilterContext";

//components
import AllFilters from "@/components/shop/AllFilters";
import Header from "@/components/shop/Header";
import MobileFilter from "@/components/shop/MobileFilter";
import Products from "@/components/shop/Products";
import SubcategoryList from "@/components/shop/SubcategoryList";

export default async function ShopByCategory({ params }) {
  const { category } = params;
  const products = await getProductsByCategory(category);
  const occasions = await getOccasions();
  const recipients = await getRecipients();

  return (
    <FilterContextProvider>
      <div>
        {/* Mobile filter dialog */}
        <MobileFilter occasions={occasions} recipients={recipients}>
          <SubcategoryList category_slug={category} />
        </MobileFilter>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header of this page */}
          <Header />

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="flex gap-x-8">
              {/* Filters */}
              <div className="hidden lg:block w-1/4">
                <AllFilters occasions={occasions} recipients={recipients}>
                  <SubcategoryList category_slug={category} />
                </AllFilters>
              </div>

              {/* Product grid */}
              <div>
                <Products products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </FilterContextProvider>
  );
}

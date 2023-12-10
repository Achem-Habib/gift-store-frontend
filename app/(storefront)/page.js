import FeaturedProducts from "@/components/storefront/FeaturedProducts";
import ProductCategories from "@/components/storefront/ProductCategories";
import Promotions from "@/components/storefront/Promotions";

import { getCategories, getFeaturedProducts } from "@/lib/data/getData";

export default async function Home() {
  const categories = await getCategories();
  const featuredProducts = await getFeaturedProducts();
  console.log(featuredProducts.length);
  return (
    <div className="">
      <Promotions />
      {categories?.length > 0 && <ProductCategories categories={categories} />}

      {featuredProducts?.length > 0 && (
        <FeaturedProducts featuredProducts={featuredProducts} />
      )}
    </div>
  );
}

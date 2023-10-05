// components
import Products from "../../_components/Products";

// data
import { getProductsByCategory } from "@/data";

export default async function ShopBySubcategory({ params }) {
  const { subcategory } = params;
  const products = await getProductsByCategory(subcategory);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

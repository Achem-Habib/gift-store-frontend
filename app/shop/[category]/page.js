// components
import Products from "../_components/Products";

// data
import { getProductsByCategory } from "@/data";

export default async function ShopByCategory({ params }) {
  const { category } = params;
  const products = await getProductsByCategory(category);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

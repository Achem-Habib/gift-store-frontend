// components
import Products from "./_components/Products";

// data
import { getProductsByCategory } from "@/data";

export default async function Shop() {
  const products = await getProductsByCategory();

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

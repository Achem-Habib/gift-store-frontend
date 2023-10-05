import ProductCard from "@/components/ProductCard";
import { apiUrl } from "@/lib/constant";

async function getFeaturedProducts() {
  const res = await fetch(`${apiUrl}/api/featured-products/`, {
    next: { revalidate: 5 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="mx-6 md:mx-10 my-10">
      <h2 className="text-3xl font-bold text-slate-800 pb-2 border-b border-slate-200 ">
        Featured Products
      </h2>
      <div className="flex overflow-x-scroll lg:overflow-hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

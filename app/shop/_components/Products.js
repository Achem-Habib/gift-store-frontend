"use client";

// components
import ProductCard from "@/components/ProductCard";

// context api
import { useFilterContext } from "@/context/FilterContext";

export default function Products({ products }) {
  const { selectedOccasions, selectedRecipients } = useFilterContext();

  const filterProducts = () => {
    return products.filter((product) => {
      const matchesOccasions = selectedOccasions.some((selectedSlug) =>
        product.occasions.some((occasion) => occasion.slug === selectedSlug)
      );

      const matchesRecipientTypes = selectedRecipients.some((selectedSlug) =>
        product.recipient_types.some(
          (recipientType) => recipientType.slug === selectedSlug
        )
      );

      return matchesOccasions || matchesRecipientTypes;
    });
  };

  if (selectedOccasions.length > 0 || selectedRecipients.length > 0) {
    var filteredProducts = filterProducts();
  } else {
    var filteredProducts = products;
  }

  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 mx-auto">
      {filteredProducts &&
        filteredProducts.map((product) => (
          <div key={product.id} className="">
            <ProductCard product={product} />
          </div>
        ))}
    </div>
  );
}

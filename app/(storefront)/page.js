import FeaturedProducts from "./FeaturedProducts";
import ProductCategories from "./ProductCategories";
import Promotions from "./Promotions";

export default function Home() {
  return (
    <div className="">
      <Promotions />
      <ProductCategories />
      <FeaturedProducts />
    </div>
  );
}

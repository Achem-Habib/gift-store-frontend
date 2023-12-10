import { apiUrl } from "@/lib/constant";
import Link from "next/link";
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdStarRate,
  MdVisibility,
} from "react-icons/md";

const ProductCard = ({ product }) => {
  const {
    category_slug,
    subcategory_slug,
    name,
    slug,
    image,
    price,
    discounted_price,
  } = product;

  const discountPercentage = Math.round(
    (100 * (price - discounted_price)) / price
  );

  return (
    <div className="relative mt-10 flex w-full  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {/* Product image */}
      <Link
        className="relative mx-auto  flex h-60 overflow-hidden rounded-xl"
        href={`/shop/${category_slug}/${subcategory_slug}/${slug}`}
      >
        <img
          className="object-cover"
          src={image ? `${apiUrl}${image}` : "/no-image.jpg"}
          alt="product image"
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        {/* product name */}
        <Link href={`/shop/${category_slug}/${subcategory_slug}/${slug}`}>
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </Link>
        <div className="mt-2 mb-5 flex flex-col gap-y-1 ">
          {/* product price */}
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${discounted_price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${price}
            </span>
          </p>
          {/* Rating */}
          <div className="flex items-center">
            <MdStarRate className="h-5 w-5 text-yellow-300" />
            <MdStarRate className="h-5 w-5 text-yellow-300" />
            <MdStarRate className="h-5 w-5 text-yellow-300" />
            <MdStarRate className="h-5 w-5 text-yellow-300" />
            <MdStarRate className="h-5 w-5 text-yellow-300" />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <MdAddShoppingCart className="w-6 h-6 mr-2" />
          <span>Add to cart</span>
        </a>
      </div>
      <div className="absolute top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white">
        {discountPercentage}% OFF
      </div>

      {/* wishlist and quick view button */}
      <div className="absolute top-0 right-0 m-2  flex flex-col gap-y-2">
        <button>
          <MdFavoriteBorder className="w-7 h-7 text-slate-600" />
        </button>
        <button>
          <MdVisibility className="w-8 h-7 text-sky-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

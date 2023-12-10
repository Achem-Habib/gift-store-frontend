import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

// function for fetching data
import { getProductDetail, getReviews } from "@/lib/data/getData";

// components
import ProductImages from "@/components/product/ProductImages";
import ProductInfo from "@/components/product/ProductInfo";
import ReviewForm from "@/components/product/ReviewForm";
import ReviewSummary from "@/components/product/ReviewSummary";
import Reviews from "@/components/product/Reviews";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default async function ProductDetail({ params }) {
  const { product_slug } = params;
  const product = await getProductDetail(product_slug);
  const reviews = await getReviews(product_slug);
  const {
    id,
    name,
    description,
    details,
    price,
    discounted_price,
    primary_image,
    more_images,
  } = product;

  let convertedDescription;
  if (description) {
    const cleanedDescription = DOMPurify.sanitize(description);
    convertedDescription = parse(cleanedDescription);
  }

  let convertedDetails;
  if (details) {
    const cleanedDetails = DOMPurify.sanitize(details);
    convertedDetails = parse(cleanedDetails);
  }

  const discountPercentage = Math.round(
    (100 * (price - discounted_price)) / price
  );

  // Reviews related calculations
  const totalReviews = reviews.length;
  const ratingCounts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  reviews.forEach((review) => {
    ratingCounts[review.rating]++;
  });

  let totalSum = 0;

  // Calculate the sum of all ratings multiplied by their counts
  for (const rating in ratingCounts) {
    const count = ratingCounts[rating];
    totalSum += parseInt(rating) * count; // Multiply rating by its count and add to totalSum
  }

  // Calculate the average rating
  const averageRating = (totalSum / totalReviews).toFixed(1);

  return (
    <div className=" pt-16">
      <div className=" flex flex-col gap-y-10 md:flex-row gap-x-16 lg:gap-x-24">
        {/* Image gallery */}
        <div className="w-full relative">
          <ProductImages
            main_image={primary_image}
            other_images={more_images}
          />
          <div className="absolute top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white">
            {discountPercentage}% OFF
          </div>
        </div>

        {/* Product info */}
        <ProductInfo
          name={name}
          discounted_price={discounted_price}
          price={price}
          averageRating={averageRating}
          convertedDescription={convertedDescription}
          product={product}
        />
      </div>

      {/* Product Details */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-700 pl-3 border-l-4 border-l-violet-800">
          Product Details
        </h2>

        <div className="mt-8 content prose md:prose-lg  leading-loose antialiased">
          {convertedDetails}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-700 pl-3 border-l-4 border-l-violet-800">
          Customer Reviews
        </h2>

        {/* Review submission */}
        <div>
          <ReviewForm productId={id} />
        </div>

        {/* Reviews summary */}
        {totalReviews > 0 && (
          <div>
            <ReviewSummary
              totalReviews={totalReviews}
              averageRating={averageRating}
              ratingCounts={ratingCounts}
            />
          </div>
        )}

        {/* Reviews */}
        {totalReviews > 0 ? (
          <div>
            <Reviews reviews={reviews} />
          </div>
        ) : (
          <div className="mt-8 px-8 font-semibold">
            There are no reviews yet
          </div>
        )}
      </div>
    </div>
  );
}

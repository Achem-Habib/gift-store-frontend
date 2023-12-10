import { StarIcon } from "@heroicons/react/20/solid";
import Control from "./Control";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo({
  name,
  discounted_price,
  price,
  averageRating,
  convertedDescription,
  product,
}) {
  return (
    <div className="w-full">
      <div className="">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {name}
        </h1>

        {/* Options */}
        <div className="mt-4 ">
          <h2 className="sr-only">Product information</h2>
          {/* product price */}
          <p>
            <span className="text-3xl font-bold text-red-600">
              ${discounted_price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${price}
            </span>
          </p>

          {/* Reviews */}
          {averageRating > 0 ? (
            <div className="mt-6 flex gap-x-2">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      averageRating > rating
                        ? "text-yellow-500"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span>{averageRating} out of 5</span>
            </div>
          ) : (
            "No reviews yet"
          )}

          {convertedDescription && (
            <div className="mt-8 content prose md:prose-lg  leading-loose antialiased">
              {convertedDescription}
            </div>
          )}
          <div className="mt-6">
            <Control product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

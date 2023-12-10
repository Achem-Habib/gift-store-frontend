import { apiUrl } from "@/lib/constant";
import Link from "next/link";

export default async function ProductCategories({ categories }) {
  return (
    <section className="mx-6 md:mx-10 my-8">
      <div className="">
        <h2 className="text-3xl font-bold text-slate-800 pb-2 border-b border-slate-200 ">
          Shop by Category
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`categories/${category.name}`}
              className="flex flex-col gap-y-2"
            >
              {/* category image */}
              <div>
                <img
                  className="object-contain  overflow-hidden transform 
                            hover:scale-105 transition duration-300 "
                  src={
                    category.image
                      ? `${apiUrl}${category.image}`
                      : "/no-image.jpg"
                  }
                />
              </div>

              {/* category name */}
              <div className="flex flex-col gap-y-2 mx-auto text-lg font-semibold text-slate-700">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

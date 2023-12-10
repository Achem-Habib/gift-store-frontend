import { getSubCategoriesByCategory } from "@/lib/data/getData";
import Link from "next/link";

export default async function SubcategoryList({ category_slug }) {
  const subcategories = await getSubCategoriesByCategory(category_slug);
  return (
    <div className="mt-10">
      {subcategories?.length > 0 && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold text-slate-800 pb-3 border-b border-b-slate-200">
            Shop By its Subcategory
          </h1>
          <div className="flex flex-col gap-y-2">
            {subcategories?.map((subcategory) => (
              <Link
                href={`/shop/${category_slug}/${subcategory.slug}`}
                className="text-slate-500"
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

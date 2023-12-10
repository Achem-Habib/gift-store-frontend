import { getCategories } from "@/lib/data/getData";
import Link from "next/link";

export default async function CategoryList() {
  const categories = await getCategories();
  return (
    <div className="mt-10">
      {categories?.length > 0 && (
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold text-slate-800 pb-3 border-b border-b-slate-200">
            Shop By Category
          </h1>
          <div className="flex flex-col gap-y-2">
            {categories?.map((category) => (
              <Link href={`/shop/${category.slug}`} className="text-slate-500">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

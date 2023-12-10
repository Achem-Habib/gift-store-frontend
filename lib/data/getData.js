import { apiUrl } from "@/lib/constant";

const revalidationTime = 5;

// get all the categories as well as subcategories list
export async function getCategoriesAndSubcategories() {
  const res = await fetch(`${apiUrl}/api/categories-subcategories`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the categories list
export async function getCategories() {
  const res = await fetch(`${apiUrl}/api/categories`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the sub categories list under a specified category
export async function getSubCategoriesByCategory(category_slug) {
  const res = await fetch(
    `${apiUrl}/api/subcategories-by-category/${category_slug}`,
    {
      next: { revalidate: revalidationTime },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

//get all the featured products
export async function getFeaturedProducts() {
  const res = await fetch(`${apiUrl}/api/featured-products/`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the products
export async function getAllProducts() {
  const res = await fetch(`${apiUrl}/api/all-products`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get the products by category
export async function getProductsByCategory(category_slug) {
  const res = await fetch(`${apiUrl}/api/category/${category_slug}`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get the products by sub category
export async function getProductsBySubcategory(subcategory_slug) {
  const res = await fetch(`${apiUrl}/api/subcategory/${subcategory_slug}`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the occasion list
export async function getOccasions() {
  const res = await fetch(`${apiUrl}/api/occasions`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get all the recipients list
export async function getRecipients() {
  const res = await fetch(`${apiUrl}/api/recipients`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get the product details
export async function getProductDetail(slug) {
  const res = await fetch(`${apiUrl}/api/products/${slug}`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// get reviews by product
export async function getReviews(product_slug) {
  const res = await fetch(`${apiUrl}/api/reviews/${product_slug}`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

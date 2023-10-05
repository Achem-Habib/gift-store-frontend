import { apiUrl } from "@/lib/constant";

const revalidationTime = 5;

export async function getCategories() {
  const res = await fetch(`${apiUrl}/api/categories`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProductsByCategory(slug = "all") {
  const res = await fetch(`${apiUrl}/api/category/${slug}`, {
    next: { revalidate: revalidationTime },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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

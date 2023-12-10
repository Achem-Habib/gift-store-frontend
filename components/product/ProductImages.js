"use client";
import { apiUrl } from "@/lib/constant";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductImages({ main_image, other_images }) {
  const mainImage = [
    {
      original: `${apiUrl}${main_image}`,
      originalAlt: "product image",
      thumbnail: `${apiUrl}${main_image}`,
      thumbnailAlt: "product image",
      thumbnailHeight: 40,
      thumbnailWidth: 40,
    },
  ];

  const otherImages = other_images.map((item) => ({
    original: `${apiUrl}${item.image}`,
    originalAlt: item.description || "product image",
    thumbnail: `${apiUrl}${item.image}`,
    thumbnailAlt: item.description || "product image",
    thumbnailHeight: 40,
    thumbnailWidth: 40,
  }));

  // Combine the predefined images with the mapped API images
  const allImages = mainImage.concat(otherImages);
  return <ImageGallery items={allImages} />;
}

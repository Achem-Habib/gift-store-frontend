"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    thumbnail:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    alt: "Two each of gray, white, and black shirts laying flat.",
  },
  {
    original:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    thumbnail:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    alt: "Model wearing plain black basic tee.",
  },
  {
    original:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    thumbnail:
      "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    alt: "Model wearing plain black basic tee.",
  },
];

export default function ProductImages() {
  return <ImageGallery items={images} />;
}

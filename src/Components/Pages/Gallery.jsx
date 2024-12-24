import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://i.ibb.co/Dzb9Ckx/burger-with-melted-cheese.webp",
    "https://i.ibb.co/hYsrMh8/default-pasta.jpg",
    "https://i.ibb.co/VxFCmK7/Corndogs-7832ef6.jpg",
    "https://i.ibb.co/sgMxjxt/ai-generated-tcookie-plate-dessert-food-photo.jpg",
    "https://i.ibb.co/qWS6ckF/KH-020624-MDWL0264-FINAL-copy2-preview-48597259de2941d8bbef7abadb8ed041.jpg",
    "https://i.ibb.co/7zyL2QB/choc-shutterstock-394680466-1200x944.jpg",
    "https://i.ibb.co/C6D0ppB/paneer-veggie-platter.jpg",
    "https://i.ibb.co/b3jCTc8/altaf-chillies-restaurant-cooke-town-bangalore-home-delivery-restaurants-12s79c7.jpg",
    "https://i.ibb.co/TqhszhV/Indian-Food-Main.jpg",
    "https://www.thedailymeal.com/img/gallery/the-best-restaurant-for-breakfast-in-every-state/0-Utah-MAIN2.jpg",
  ];

  // Open lightbox with the selected image
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className=" py-10">

        <div>
<div
  className="hero min-h-40"
  style={{
    backgroundImage: `url(https://i.ibb.co/0jhJGDm/360-F-297677001-z-X7-Zz-Rq8-DOb-UV5-IWTHAIh-Aae6-Dui-EQh4.jpg)`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Food Gallery</h1>
    </div>
  </div>
</div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-5 w-11/12 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox for viewing images */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((image) => ({ src: image }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;

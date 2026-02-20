import React, { useState } from 'react';
import image_1 from "../assets/1.jpg"
import image_2 from "../assets/2.jpg"
import image_3 from "../assets/3.jpg"
import image_4 from "../assets/4.jpg"
import image_6 from "../assets/6.jpg"
import image_5 from "../assets/5.jpg"
import image_7 from "../assets/7.jpg"

const images = [
  image_3,
  image_2,
  image_1,
  image_4,
  image_5,
  image_6,
  image_7,
  image_1
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id='gallery' className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4 tracking-tight">
            Moments of Hope
          </h2>
          <p className="text-charity-muted text-lg md:text-xl font-light">
            Glimpses into our field activities and impact zones.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((url, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(url)}
              className="group relative h-64 md:h-72 overflow-hidden rounded-2xl md:rounded-3xl shadow-soft hover:shadow-hover cursor-pointer border border-white transition-all duration-300 ease-out"
            >
              <img
                src={url}
                alt="Impact Activity"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-bold tracking-wide border-2 border-white/50 bg-white/10 px-6 py-2.5 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

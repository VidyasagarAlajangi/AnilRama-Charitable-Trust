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
    <section id='gallery' className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-2">
              Moments of Hope
            </h2>
            <p className="text-charity-muted">
              Glimpses into our field activities and impact zones.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((url, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(url)}
              className="group relative h-64 overflow-hidden rounded-2xl shadow-sm cursor-pointer"
            >
              <img
                src={url}
                alt="Impact Activity"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium border border-white px-4 py-2 rounded-full">
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

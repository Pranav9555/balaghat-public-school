import { useState } from "react";

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const images = [
    "/balaghat_school.png",
    "/Gallery1.jpeg",
    "/Gallery3.jpeg",
    "/Gallery19.jpeg",
    "/Gallery8.jpeg",
    "/Gallery11.jpeg",
    "/Gallery5.jpeg",
    "/Gallery13.jpeg",
    "/Gallery6.jpeg",
    "/Gallery9.jpeg",
    "/Gallery10.jpeg",
    "/Gallery12.jpeg",
    "/Gallery7.jpeg",
    "/Gallery14.jpeg",
    "/Gallery15.jpeg",
    "/Gallery16.jpeg",
    "/Gallery20.jpeg",
    "/Gallery17.jpeg",
    "/Gallery2.jpeg",
    "/Gallery4.jpeg",
    "/Gallery18.jpeg",
  ];

  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <section
      id="gallery"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(120deg,#ffffff 0%,#f6f8fc 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              color: "#1a1a1a",
              fontWeight: "700"
            }}
          >
            School Gallery
          </h2>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-20 h-px bg-blue-500" />
            <span className="text-orange-500 text-lg">✦</span>
            <div className="w-20 h-px bg-blue-500" />
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >

              <img
                src={img}
                alt={`School Gallery ${index + 1}`}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest">
                  View
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Show More Button */}
        {images.length > 8 && (
          <div className="text-center mt-12">

            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-md font-semibold tracking-widest transition duration-300 hover:-translate-y-1"
              style={{
                background: "#ff7a00",
                color: "#fff",
              }}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>

          </div>
        )}

      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}

export default Gallery;

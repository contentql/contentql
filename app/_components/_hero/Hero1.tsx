import React from "react";

const Hero1 = () => {
  const products = [
    {
      _id: "1",
      label: "Electronics",
      title: "Smartphone X",
      caption: "The latest and greatest smartphone.",
      coverUrl:
        "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    },
    {
      _id: "2",
      label: "Fashion",
      title: "Stylish Watch",
      caption: "Enhance your style with this elegant watch.",
      coverUrl:
        "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    },
  ];

  return (
    <div>
      <div className="carousel w-full relative">
        {products.map((product, index) => {
          return (
            <div
              key={product._id}
              id={`slide${index + 1}`}
              className="carousel-item w-full h-screen flex justify-center items-center relative"
            >
              <div className="card lg:card-side bg-base-100 shadow-xl mx-4 rounded">
                <div className="flex justify-between absolute top-1/2 left-5 right-5 transform -translate-y-1/2">
                  <a
                    href={`#slide${index === 0 ? products.length : index}`}
                    className="btn btn-circle text-white"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      index === products.length - 1 ? 1 : index + 2
                    }`}
                    className="btn btn-circle text-white"
                  >
                    ❯
                  </a>
                </div>
                <figure>
                  <img
                    src={product.coverUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600">{product.caption}</p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero1;

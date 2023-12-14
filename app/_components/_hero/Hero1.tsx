import React from "react";

const Hero1 = () => {
  const products = [
    {
      _id: "1",
      label: "Electronics",
      title: "Smartphone X",
      caption: "The latest and greatest smartphone.",
      coverUrl: "/assets/images/products/product_1.png",
    },
    {
      _id: "2",
      label: "Fashion",
      title: "Stylish Watch",
      caption: "Enhance your style with this elegant watch.",
      coverUrl: "/assets/images/products/product_2.png",
    },
    {
      _id: "3",
      label: "Home Decor",
      title: "Modern Wall Art",
      caption: "Transform your living space with this contemporary wall art.",
      coverUrl: "/assets/images/products/product_3.png",
    },
    {
      _id: "4",
      label: "Sports",
      title: "Running Shoes",
      caption:
        "Achieve your fitness goals with these high-performance running shoes.",
      coverUrl: "/assets/images/products/product_4.png",
    },
    {
      _id: "5",
      label: "Beauty",
      title: "Luxury Perfume",
      caption: "Indulge in the captivating fragrance of this luxury perfume.",
      coverUrl: "/assets/images/products/product_5.png",
    },
    {
      _id: "6",
      label: "Books",
      title: "Bestseller Novel",
      caption:
        "Immerse yourself in a gripping story with this bestselling novel.",
      coverUrl: "/assets/images/products/product_6.png",
    },
    {
      _id: "7",
      label: "Toys",
      title: "Interactive Robot",
      caption: "A fun and educational toy that sparks creativity in kids.",
      coverUrl: "/assets/images/products/product_7.png",
    },
    {
      _id: "8",
      label: "Kitchenware",
      title: "Professional Chef's Knife",
      caption: "Upgrade your kitchen with this high-quality chef's knife.",
      coverUrl: "/assets/images/products/product_8.png",
    },
    {
      _id: "9",
      label: "Tech Gadgets",
      title: "Wireless Earbuds",
      caption:
        "Experience music like never before with these wireless earbuds.",
      coverUrl: "/assets/images/products/product_9.png",
    },
    {
      _id: "10",
      label: "Outdoor Gear",
      title: "Camping Tent",
      caption: "Embark on outdoor adventures with this durable camping tent.",
      coverUrl: "/assets/images/products/product_10.png",
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
                <div className="flex justify-between absolute top-1/2 -left-5 -right-5 transform -translate-y-1/2">
                  <a
                    href={`#slide${index === 0 ? products.length : index}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      index === products.length - 1 ? 1 : index + 2
                    }`}
                    className="btn btn-circle"
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

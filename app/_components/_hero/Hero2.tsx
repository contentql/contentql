"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Hero2 = () => {
  const hero2DemoData = {
    _id: "1",
    title: "Box Office News!",
    caption:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae eta id nisi.",
    coverUrl:
      "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    buttonName: "Ged Started",
  };

  const hero1Data = useQuery(api.hero2.get) || hero2DemoData;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={hero1Data.coverUrl}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{hero1Data.title}</h1>
          <p className="py-6">{hero1Data.caption}</p>
          <button className="btn btn-primary">{hero1Data.buttonName}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

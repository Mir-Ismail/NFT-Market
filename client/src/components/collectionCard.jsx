import React from "react";
import "./collectioncard.css";

function CollectionCard({ image, title, owner }) {
  return (
    <div
      className="card hover:shadow-2xl hover:shadow-purple-500/40 group"
      style={{ height: "13rem", width: "16rem" }}
    >
      <div className="image_container w-100">
        <img
          src={image}
          alt={title}
          className="image"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        />
      </div>

      <div className="w-full p-3">
        <div className="title text-white text-left">
          <span>{title}</span>
        </div>
        <div className="size flex flex-row items-center text-left gap-2">
          <span className="font-medium  text-gray-400">Owner :</span>
          <span className="text-sm  text-white">{owner}</span>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;

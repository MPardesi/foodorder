import React from "react";
import './style.css';

export default function Foodtile({recipe}) {
  return (
    <div className="foodtile">
      <img
        className="foodtile-image"
        src={recipe["recipe"]["image"]}
        alt="tile-image"
        onClick={()=>window.open(recipe["recipe"]["url"])}
      />
      <p className="foodtile-name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, deletePlant }) {
  const plantCards = plants.map((plant) => {
    return <PlantCard key={plant.id} {...plant} deletePlant={deletePlant} />;
  });
  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;

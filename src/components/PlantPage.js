import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function addNewPlant(newObj) {
    setPlants([...plants, newObj]);
  }

  function deletePlant(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <PlantList plants={filteredPlants} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;

import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newPrice, setNewPrice] = useState(0.0);

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: newName,
      image: newImage,
      price: parseFloat(newPrice),
    };

    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then(() => addNewPlant(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

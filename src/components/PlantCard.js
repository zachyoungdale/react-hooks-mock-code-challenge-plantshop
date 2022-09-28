import React, { useState } from "react";

function PlantCard({ name, id, image, price, deletePlant }) {
  const [stockStatus, setStockStatus] = useState(true);

  function handleClick() {
    setStockStatus((stockStatus) => !stockStatus);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => deletePlant(id));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockStatus ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;

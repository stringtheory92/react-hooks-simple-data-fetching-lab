import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, []);

  return (
    <div>
      <h2>{image === "" ? "Loading" : ""}</h2>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;

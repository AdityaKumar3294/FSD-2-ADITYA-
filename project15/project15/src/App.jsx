import React, { useState } from "react";

function FormExample() {

  // State for radio
  const [gender, setGender] = useState("Male"); // default selected

  // State for dropdown
  const [city, setCity] = useState("Delhi"); // default selected

  return (
    <div>

      <h2>Radio Button Example</h2>

      {/* Radio Buttons */}
      <input
        type="radio"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <br />

      <input
        type="radio"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <br /><br />

      <p>Selected Gender: {gender}</p>

      {/* Dropdown */}
      <h2>Dropdown Example</h2>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Jaipur">Jaipur</option>
      </select>

      <p>Selected City: {city}</p>

    </div>
  );
}

export default FormExample;
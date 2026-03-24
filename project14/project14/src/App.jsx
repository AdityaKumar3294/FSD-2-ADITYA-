import React, { useState } from "react";

function CheckboxExample() {
  const [skills, setSkills] = useState([]);

  // Handle checkbox change
  const handleCheckbox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // Add value
      setSkills([...skills, value]);
    } else {
      // Remove value
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h2>Select Skills</h2>

      <label>
        <input
          type="checkbox"
          value="HTML"
          onChange={handleCheckbox}
        />
        HTML
      </label>

      <label>
        <input
          type="checkbox"
          value="CSS"
          onChange={handleCheckbox}
        />
        CSS
      </label>

      <label>
        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleCheckbox}
        />
        JavaScript
      </label>

      <h3>Selected Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxExample;
import { user, skills } from "./data.js";

function App() {

  // User variable with JSX
  const title = "JSX with Curly Braces Demo";

  // Function with JSX
  const greet = (name) => {
    return `Hello, ${name}`;
  };

  // Operations inside JSX
  const a = 10;
  const b = 20;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* Variable inside JSX */}
      <h1>{title}</h1>

      {/* Function inside JSX */}
      <h2>{greet(user.name)}</h2>

      {/* Condition inside JSX */}
      <p>
        Status: {user.isStudent ? "Student" : "Not a Student"}
      </p>

      {/* Operations inside JSX */}
      <p>
        Sum of {a} and {b} is <strong>{a + b}</strong>
      </p>

      {/* Object with JSX */}
      <p>
        Name: {user.name} <br />
        Age: {user.age}
      </p>

      {/* Array with JSX */}
      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* HTML tags property with JSX */}
      <img
        src="https://reactjs.org/logo-og.png"
        alt="React Logo"
        width={200}
      />

      {/* Interview Question Example */}
      <p>
        {/*
          Q: Why curly braces are used in JSX?
          A: To embed JavaScript expressions inside JSX
        */}
        Interview Tip: JSX uses <strong>{"{}"}</strong> to execute JavaScript.
      </p>

    </div>
  );
}

export default App;
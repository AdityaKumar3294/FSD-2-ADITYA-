import React, { useState } from "react";

function Login() {
  // State to store form data
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  // Validate form
  const validate = () => {
    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful ✅");
      console.log(form);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <br />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"} Password
          </button>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
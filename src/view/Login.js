import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setSuccessMessage("Login successful!");
      setTimeout(() => {
        navigate("/products");
        setFormData({
          email: "",
          password: "",
        });
      }, 1000);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md border">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>

          <p className="mt-4 text-gray-700">
            Not registered yet?{" "}
            <a href="/" className="text-blue-500">
              Register now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

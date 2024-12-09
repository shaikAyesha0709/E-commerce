import React, { useState } from 'react';
import './Login.css';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { CiPhone } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Validate form data
    const validationErrors = {};
    
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <div className="form-container">
        {isSignUp ? (
          <form onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            <label>
              <IoPersonOutline className="icon" />
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
            <label>
              <HiOutlineMail className="icon" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>
              <CiPhone className="icon" />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
            <label>
              <HiOutlineLockClosed className="icon" />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </label>
            <button type="submit" className="btn">Sign Up</button>
            <button type="button" onClick={() => setIsSignUp(false)}>Already have an account? Sign In</button>
          </form>
        ) : (
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <label>
              <HiOutlineMail className="icon" />
              <input type="email" name="email" required placeholder="Email" />
            </label>
            <label>
              <HiOutlineLockClosed className="icon" />
              <input type="password" name="password" required placeholder="Password" />
            </label>
            <button type="submit" className="btn">Sign In</button>
            <button type="button" onClick={() => setIsSignUp(true)}>Don't have an account? Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;

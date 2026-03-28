import React from "react";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  setErrors,
  submitStart,
  submitSuccess,
  resetForm,
} from "../features/user/userSlice";

import { validateSignup } from "../features/user/validate";

const Signup = () => {
  const dispatch = useDispatch();

  const { form, errors, isSubmitting, success } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    dispatch(
      updateField({
        field: name,
        value: type === "checkbox" ? checked : value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateSignup(form);

    if (Object.keys(validationErrors).length > 0) {
      dispatch(setErrors(validationErrors));
      return;
    }

    dispatch(setErrors({}));
    dispatch(submitStart());

    // simulate API call
    setTimeout(() => {
      dispatch(submitSuccess());

      setTimeout(() => {
        dispatch(resetForm());
      }, 2000);
    }, 1500);
  };

 return (
  <div className="signup-container">
    <div className="signup-card">
      <h2>Create Your Account</h2>

      {success && (
        <div className="success-msg">Signup Successful 🎉</div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <span className="error">{errors.name}</span>
        </div>

        <div className="form-group">
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>
        </div>

        <div className="form-group">
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <span className="error">{errors.phone}</span>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <span className="error">{errors.password}</span>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <span className="error">{errors.confirmPassword}</span>
        </div>

        <div className="form-group">
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span className="error">{errors.gender}</span>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          <label>Accept Terms & Conditions</label>
        </div>
        <span className="error">{errors.terms}</span>

        <button className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

      </form>
    </div>
  </div>
);
};

export default Signup;
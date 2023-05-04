import React, { useState } from "react";
import "../styles/components/MetabolismCalculator.scss";
import PropTypes from "prop-types";
import CalculatorInput from "./CalculatorInput";

function MetabolismCalculator({
  setIsMetabolismCalculatorVisible,
  setIsBodyScrollable,
}) {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmr, setBmr] = useState(0);
  const handleButtonClick = () => {
    setIsMetabolismCalculatorVisible(false);
    setIsBodyScrollable(true);
  };
  setIsBodyScrollable(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (gender === "male") {
      setBmr(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age);
    } else if (gender === "female") {
      setBmr(447.593 + 9.247 * weight + 3.098 * height - 4.33 * age);
    }
  };

  return (
    <div className="metabolism-container ">
      <div
        className="metabolism-filter"
        onClick={handleButtonClick}
        aria-hidden
      />
      <form className="metabolism-calculator" onSubmit={handleSubmit}>
        <div className="mobile-drag" onClick={handleButtonClick} aria-hidden />
        <h2>Metabolism calculator</h2>
        <label className="label-calculator">
          Gender:
          <select
            className="input-calculator label-calculator"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" selected disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <CalculatorInput
          label="Age"
          type="number"
          value={age}
          onChange={(e) => {
            if (e.target.value >= 1) {
              setAge(e.target.value);
            } else {
              setAge("");
            }
          }}
        />
        <CalculatorInput
          label="Weight (in kg)"
          type="number"
          value={weight}
          onChange={(e) => {
            if (e.target.value >= 1) {
              setWeight(e.target.value);
            } else {
              setWeight("");
            }
          }}
        />
        <CalculatorInput
          label="Height (in cm)"
          type="number"
          value={height}
          onChange={(e) => {
            if (e.target.value >= 1) {
              setHeight(e.target.value);
            } else {
              setHeight("");
            }
          }}
        />
        <div className="metabolism-value">
          <button type="submit">Calculate BMR</button>
        </div>
        {bmr !== 0 && (
          <p>
            Your BMR is {bmr.toFixed(2)} calories
            <i className="bi bi-fire" />
          </p>
        )}
      </form>
    </div>
  );
}
MetabolismCalculator.propTypes = {
  setIsMetabolismCalculatorVisible: PropTypes.func.isRequired,
};

export default MetabolismCalculator;

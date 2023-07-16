import { useState } from "react";
import styles from "./CalculatorForm.module.css";

const CalculatorForm = ({ calculateHandler }) => {
  const [formData, setFormData] = useState({
    currentSavings: 0,
    yearlySavings: 0,
    expectedInterest: 0,
    investmentDuration: 0,
  });
  const currentSavingsHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      currentSavings: event.target.value,
    }));
  };

  const yearlySavingsHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      yearlySavings: event.target.value,
    }));
  };

  const expectedInterestHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      expectedInterest: event.target.value,
    }));
  };

  const investmentDurationHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      investmentDuration: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.investmentDuration > 0) {
      calculateHandler(formData);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;

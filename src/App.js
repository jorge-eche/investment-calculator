import { useState } from "react";
import Header from "./components/UI/Header";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultsTable from "./components/Results/ResultsTable";

function App() {
  const [finalCalculation, setFinalCalculation] = useState([]); // results for all years

  // const updateYearlyData = (inputData) => {
  //   setYearlyData((prevState) => ({ prevState, inputData }));
  // };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    let totalInterest = 0;
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
      });
    }

    // do something with yearlyData ...
    setFinalCalculation(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorForm calculateHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultsTable finalCalculation={finalCalculation} />
    </div>
  );
}

export default App;

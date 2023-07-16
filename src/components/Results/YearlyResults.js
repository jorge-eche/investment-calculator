const YearlyResults = ({ yearlyData }) => {
  const {
    year,
    savingsEndOfYear,
    yearlyInterest,
    yearlyContribution,
    totalInterest,
  } = yearlyData;
  return (
    <tr>
      <td>{year}</td>
      <td>{savingsEndOfYear}</td>
      <td>{yearlyInterest}</td>
      <td>{totalInterest}</td>
      <td>{yearlyContribution * year}</td>
    </tr>
  );
};

export default YearlyResults;

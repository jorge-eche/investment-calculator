import YearlyResults from "./YearlyResults";
import styles from "./ResultsTable.module.css";

const ResultsTable = () => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <YearlyResults />
      </tbody>
    </table>
  );
};

export default ResultsTable;

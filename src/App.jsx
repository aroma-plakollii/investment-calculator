import './App.css';
import { useState } from "react";
import Header from './components/Header';
import InvestmentParameters from './components/InvesmentParameters';
import ResultsTable from './components/ResultsTable';
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [investment, setInvestment] = useState({
        initialInvestment: undefined,
        annualInvestment: undefined,
        expectedReturn: undefined,
        duration: undefined
  });

  const investmentResults = calculateInvestmentResults(investment);

  const handleChange = (e, name) => {
      const value = +e.target.value;
      setInvestment((prevInvestment) => {
          return {
              ...prevInvestment,
              [name] : value
          }
      });
  }

  return (
      <>
        <Header />
        <InvestmentParameters investment={investment} handleChange={handleChange} />
        <ResultsTable investmentResults={investmentResults} />
      </>
  );
}

export default App;

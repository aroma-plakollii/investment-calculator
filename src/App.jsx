import './App.css';
import { useState } from "react";
import Header from './components/Header';
import InvestmentParameters from './components/InvesmentParameters';
import ResultsTable from './components/ResultsTable';

function App() {
  const [investment, setInvestment] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
  });

  const inputIsValid = investment.duration > 0;

  const handleChange = (name, value) => {
      setInvestment((prevInvestment) => {
          return {
              ...prevInvestment,
              [name] : +value
          }
      });
  }

  return (
      <>
        <Header />
        <InvestmentParameters investment={investment} handleChange={handleChange} />
        {inputIsValid ? <ResultsTable investment={investment} /> : <p className='center'>Write a duration greater thatn zero</p>}
      </>
  );
}

export default App;

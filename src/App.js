import { useEffect, useState } from "react";
import Header from "./Header";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";

export default function App() {
  const [income, setIncome] = useState([]);
  const [totoalIncome, setTotoalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotoalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <Header totoalIncome={totoalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

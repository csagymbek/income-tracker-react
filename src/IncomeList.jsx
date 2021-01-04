import IncomeItem from "./IncomeItem";

export default function IncomeList({ income, setIncome }) {
  const removeIncome = (i) => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
  };

  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  return (
    <div className="income-list">
      {income.sort(sortByDate).map((value, index) => (
        <IncomeItem
          removeIncome={removeIncome}
          key={index}
          index={index}
          income={value}
        />
      ))}
    </div>
  );
}

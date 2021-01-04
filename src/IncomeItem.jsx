export default function IncomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (index) => {
    removeIncome(index);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        X
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price">${income.price}</div>
      <div className="date">{`${month}/${day}/${year}`}</div>
    </div>
  );
}

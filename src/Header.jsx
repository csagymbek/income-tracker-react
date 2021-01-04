export default function Header({ totoalIncome }) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">${totoalIncome}</div>
    </header>
  );
}

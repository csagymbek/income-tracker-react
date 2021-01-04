import { useRef } from "react";

export default function IncomeForm({ setIncome, income }) {
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const addIncome = (e) => {
    e.preventDefault();
    // console.log(desc?.current.value);
    let d = date?.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);
    setIncome([
      ...income,
      {
        desc: desc?.current.value,
        price: price?.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form action="" className="income-form" onSubmit={addIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="description"
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="date"
          ref={date}
        />
        <input type="submit" value="add" />
      </div>
    </form>
  );
}

import "./index.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1>Todolist</h1>
      <Todolist />
    </div>
  );
}

function Todolist() {
  const [state, setState] = useState("");
  const [change, setChange] = useState([]);
  function handleChange(event) {
    setState(event.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setChange((prevState) => {
      return [...prevState, state];
    });
    setState("");
  }
  return (
    <form className="todolist" onSubmit={handleClick}>
      <div className="todolist-heading">
        <input
          type="text"
          placeholder="input todolist"
          value={state}
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </div>
      <ul>
        {change.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </ul>
    </form>
  );
}

function List({ item }) {
  return <li>{item}</li>;
}

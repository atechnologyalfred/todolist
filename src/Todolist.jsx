import { useState } from "react";
import List from './List.jsx';
export default function Todolist() {
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
	function deletedItem (id) {
		setChange(prevItems => {
			return prevItems.filter(
				(item, index) => {
					return index !== id;
				}
			)
		})
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
        {change.map((item, index) => ( <List key={index} id =  {index} item={item} onChecked={deletedItem} />
        ))}
      </ul>
    </form>
  );
}
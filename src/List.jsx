import { useState } from "react"

function List({ item, onChecked, id }) {
	const [color, setColor] = useState("")
  return  (
		<div>
			<li onClick = {() => onChecked(id)}><span>✔</span>{item} <span className = 'delete'>&times;</span></li>
		</div>
	)
}
export default List;
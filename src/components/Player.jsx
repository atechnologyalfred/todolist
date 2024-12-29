import { useState } from "react"

export default function Player ({initialName, symbol, isActive}) {
	const [isEditing, setIsEditing] = 	useState(false)
	const [PlayerName, setPlayerName] = useState(initialName)
	
	function handleEditClick() {
			setIsEditing(editing => !editing)
	}
	function handleChange(event) {
		setPlayerName(event.target.value)
}
	let p  =  <span className = "player-name">{PlayerName}</span>
	if (isEditing) {
		p =  <input type = "text" required value = {PlayerName} onChange={handleChange} />
	}
	return (
		<li className = {isActive ? 'active' : undefined}>
			<span className = "player">
				{p}
				<span className = "player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Add' : 'Edit'}</button>
			</li>
		)

		
}
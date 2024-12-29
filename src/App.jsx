import { useState } from "react"

const assignment = [
  {
    topic: 'Physics',
    hint: 'The study of thermodynamics came about as man quest for energy increases. This study resulted as a result of the experience students has acquired in physics. Physics give them the methods for how thing move and the reason behind it',
  },
  {
    topic: 'Chemistry ',
    hint: "The study of the properties, uses and composition of matter brought about chemistry as it helps in the study of all the elements. Elements are essentials features in chemistry since they are needed for providing man's solution to sickness in the chemical industry",
  },
  {
    topic: 'Mathematics',
    hint: 'The boy who understand how to calculate the total cost of items in the supermarket and all his customers are happy with him must have study alot of addition, subtraction, multiplication and addition. The understand of how numbers work and it manupulation to generate a solution to complex mathematical problem is may have all induced in his brain',
  },
 
]

export default function App () {
  return (
    <main>
      <h1>Accordion</h1>
      <AccordionChild />
    </main>
  )
}

function AccordionChild () {

  return (
  <div className = "accordion">
      {assignment.map((item, index) => <Accordion key = {index} topic = {item.topic} hint =  {item.hint} num = {index} />)}
  </div>
  )
}

function Accordion({topic, hint, num}) {
  const [state, setState] = useState(false)

  function handleClick () {
    setState(prevState => !prevState)
  }
  return (
    <div onClick = {handleClick}  className = {state ? "change" : "item"}>   
    <span>{`0${num +1}`}</span> 
    <span className = "topic">{topic}</span>
    <span>{state ? '-' : '+'}</span>
    <div className= "content" >
    <span className =  "hint">{ state ? hint : null}</span>
    </div>
  </div>

  )
}
import { useState } from "react";
export default function Dropdown({selections, choose}) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  }
  const chooseGoal = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    choose(e.target.innerText)
    toggleOpen();
  }
  return (
    <div>
      <label>Does this action belong to a goal?</label>
        <button type="button" onClick={toggleOpen}>select a goal</button>
        {open && selections.map(selection => <li onClick={chooseGoal} key={selection} display={false}>{selection}</li>)}
    </div>
  )
}
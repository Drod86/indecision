import { useState } from "react";
export default function Action ({options, setState}) {
  const [showEnergy, toggleShowEnergy] = useState(false);
  const [showTime, toggleShowTime] = useState(false);
  const [topDecisions, setTopDecisions] = useState([]);
  const onDecision = () => {
    const randomNum = Math.floor(Math.random()*options.length);
    const highestRank = options.reduce((acc, option) => option.getRank() > acc ? acc = option.getRank() : acc = acc, 0)
    const topOptions = options.filter(option => option.getRank() === highestRank);
    setTopDecisions(topOptions);
    toggleShowEnergy(!showEnergy);
  }
  const filterEnergy = (e) => {
    e.preventDefault();
    setTopDecisions(topDecisions.filter(decision => decision.getEnjoyment() <= e.target.elements.energy.value));
    console.log(topDecisions);
    toggleShowEnergy(!showEnergy);
    toggleShowTime(!showTime);
  }

  const filterTime = (e) => {
    e.preventDefault();
    setTopDecisions(topDecisions.filter(decision => decision.getRequiredTime() === null || decision.getRequiredTime() <= e.target.elements.time.value));
    console.log(topDecisions);
    toggleShowTime(!showTime);
    setState(prev => {
      return {
        ...prev,
        decision: topDecisions
      }
    })
  }

  return (
    <div>
      <button onClick={onDecision} disabled={options.length === 0 && true}>What should I do?</button>
      {showEnergy && <form onSubmit={filterEnergy}>
        <label>On a scale of 1 to 5, what is your energy level?</label>
        <input type="number" name="energy" min={1} max={5} />
        <button type="submit" >enter</button>
      </form>}
      {showTime && <form onSubmit={filterTime}>
        <label>How much time in minutes do you havedo you have?</label>
        <input type="number" name="energy" min={15} max={180} />
        <button type="submit" >enter</button>
      </form>}
    </div>
  )
}
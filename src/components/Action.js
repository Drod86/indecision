export default function Action ({options, setState}) {
  const onDecision = () => {
    const randomNum = Math.floor(Math.random()*options.length);
    setState(prev => {
      return {
        ...prev,
        decision: options[randomNum]
      }
    })
  }
  return (
    <button onClick={onDecision} disabled={options.length === 0 && true}>What should I do?</button>
  )
}
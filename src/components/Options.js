import Option from "./Option"
export default function Options ({options, setState}) {
  const removeAll = (e) => {
    e.preventDefault();
    if (options.length > 0){
      setState(prev => {
        return {
          ...prev,
          options: [],
          decision: ''
        }
      })
    }
  }

  const removeOption = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setState(prev => {
      return {
        ...prev,
        options: prev.options.filter(option => option.getText() !== options[index].getText())
      }
    })
  }

  const completeOption = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setState(prev => {
      return {
        ...prev,
        options: prev.options.filter(option => option.getText() !== options[index].getText()),
        completed: [...prev.completed, options[index]]
      }
    })
  }

  return (
    <section>
      <p>{options.length > 0 ? `Here are your options:`: `No options`}</p>
      <button onClick={removeAll}>Clear Options</button>
      <ol>
        {options.map((item, i) => (
          <Option key={item.getText()} item={item} i={i} removeOption={removeOption} completeOption={completeOption}/>
        ))}
      </ol>
    </section>
  )
}
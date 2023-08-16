export default function AddOption({setState}) {
  const addOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if (option){
      setState(prev => {
        return {
          ...prev,
          options: [...prev.options, option]
        }
      })
      e.target.elements.option.value = '';
    }
  }
  return (
    <form onSubmit={addOption}>
      <input type="text" name="option"/>
      <button type="submit">Add Option</button>
    </form>
  )
}
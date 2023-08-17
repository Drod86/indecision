export default function Option({item, removeOption, completeOption, i}) {
  return (
    <li key={i}>
      {item.getText()}
      <button id={i} onClick={removeOption}>Remove</button>
      <button id={i} onClick={completeOption}>Complete</button>
    </li>
  )
}
export default function Option({item, removeOption, i}) {
  return (
    <li key={item}>
      {item}
      <button id={i} onClick={removeOption}>Remove</button>
    </li>
          )
}
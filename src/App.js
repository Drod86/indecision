import { useState } from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";

export function App() {
  const [state, setState] = useState({
    title: 'Indescision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    decision: ''
  });
  
  const {title, subtitle, options, decision} = state;
  
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action options={options} setState={setState}/>
      <p>{decision}</p>
      <Options options={options} setState={setState}/>
      <AddOption setState={setState}/>
    </div>
  );
} 
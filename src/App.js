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
    completed:[],
    goals: ['general', 'play'],
    decision: []
  });
  
  const {title, subtitle, options, completed, goals, decision} = state;
  
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action options={options} setState={setState}/>
      {decision.map(dec => <p key={decision.length > 0 && dec.getText()}>{decision.length > 0 ? dec.getText() : ''}</p>) }
      <Options options={options} setState={setState}/>
      <AddOption goals={goals} setState={setState}/>
    </div>
  );
} 
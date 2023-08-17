class Action {
  constructor(text, goal, delegate='', dueDate='', enjoyment=3, requiredTime=null, optional=true){
    this._text = text;
    this._goal = goal;
    this._delegate = delegate;
    this._dueDate = dueDate;
    this._enjoyment = enjoyment;
    this._requiredTime = requiredTime;
    this._optional = optional;
    this._rank = this.calculateRank();
    console.log(this);
  }

  calculateRank(){
    let count = 0;
    this._goal && count++;
    this._delegate && count--;
    this._dueDate && count++;
    this._optional && count--;
    return count + this._enjoyment;
  }

  getRank(){
    return this._rank;
  }

  getText() {
    return this._text;
  }

  setText(newText) {
    this._text = newText;
  }

  getGoal() {
    return this._goal;
  }

  setGoal(newGoal) {
    this._goal = newGoal;
  }

  getDelegate() {
    return this._delegate;
  }

  setDelegate(newDelegate) {
    this._delegate = newDelegate;
  }

  getDueDate() {
    return this._dueDate;
  }

  setDueDate(newDueDate) {
    this._dueDate = newDueDate;
  }

  getEnjoyment() {
    return this._enjoyment;
  }

  setEnjoyment(newEnjoyment) {
    this._enjoyment = newEnjoyment;
  }

  getRequiredTime() {
    return this._requiredTime;
  }

  setRequiredTime(newRequiredTime) {
    this._requiredTime = newRequiredTime;
  }

  getOptional() {
    return this._optional;
  }

  setOptional(newOptional) {
    this._optional = newOptional;
  }
}

import Dropdown from "./Dropdown";
import { useState } from "react";

export default function AddOption({goals, setState}) {
  const [goal, setGoal] = useState('');
  const addOption = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const option = new Action(e.target.elements.option.value, goal);
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
      <label>What do you need to do?</label>
      <input type="text" name="option" required />
      <Dropdown name="goals" selections={goals} choose={setGoal} />
      <button type="submit">Add Option</button>
    </form>
  )
}
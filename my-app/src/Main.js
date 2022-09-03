//rafc React Functional Component
//rafce React Functional Component + export
import React, { useState} from 'react'
import { FirstComponents } from './components/FirstComponents';
import { ShowCounter } from './components/ShowCounter';
import { AddCounter } from './components/AddCounter';
import { RemoveCounter } from './components/RemoveCounter';
import './styles.css'

export const Main = () => {

  const [number, setNumber] = useState(0);
  // setNumber(45)
  const onAdd = () =>{
    setNumber(number + 1);
    console.log('I added one');
  }
  const onRemove = () =>{
    setNumber(number - 1);
    console.log('I removed one');
  }
  return (
    <>
      <ShowCounter 
        number={number}/>
      <AddCounter onAddPress={onAdd}/>
      <RemoveCounter onRemovePress={onRemove}/>
    </>
  );
}

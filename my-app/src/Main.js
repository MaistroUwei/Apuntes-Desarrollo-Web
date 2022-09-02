//rafc React Functional Component
//rafce React Functional Component + export
import React from 'react'
import { FirstComponents } from './components/FirstComponents';
import './styles.css'

export const Main = () => {
  return (
    <>
        <ShowCounter number={5}/>
        <AddCounter number={5}/>
    </>
    //<FirstComponents
    //title="Mi titulo"
    //subtitle="Subtitulooooo"
    ///>
  );
}

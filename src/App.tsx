import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ShowData from './classdata';

export default class App extends React.Component{
  

  render(){

    const d = {
      name : "patel dev",
      age : "20",
      db : "25-08-2002",
      additional : {
        a1 : "check"
      }
    }
    return (
      <ShowData data = {d}/>
    )
  }
}

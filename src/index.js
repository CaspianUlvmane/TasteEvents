import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

const myFirstElement = <body><h1>Hello React!</h1><button id='btn'>Click me</button></body>


const root = ReactDOM.createRoot(document.getElementById('root'));




function Garage() {
  return (
    <>
    <h1>Who lives in my garage?</h1>
    <Car name="Volvo" model="V70"/>
    </>
  )
}

class Header {
  constructor(){
    this.color = "Red"
  }

  // changeColor = () => { document.getElementById("demo").innerHTML += this}
}

const myHeader = new Header()

window.addEventListener("load", myHeader.changeColor)

document.getElementById("btn")
root.render(
  <Garage />
);
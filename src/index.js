import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Counter from "./Components/Counter";
import * as serviceWorker from './serviceWorker';


let sec = 0;
let min = 0;
let hour = 0;

let counter = setInterval(() => {
  ReactDOM.render(
  <Counter segundos={sec} minutos={min} horas={hour} />,
   document.querySelector("#root"));
   sec++;
   if (sec == 59) {
     sec = 0;
     min ++;
   } else if (min == 59) {
     min = 0;
     hour ++;
   } else if (hour == 24) {
     hour = 0;
     min = 0;
     sec = 0;
    clearInterval(counter);
   }
}, 1000)

// let countdown = () => {
// sec = 
//  }
//



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

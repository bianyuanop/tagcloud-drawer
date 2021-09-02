import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pressure from 'pressure';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Pressure.set('#root', {
  change: (force, ev) => {
    window.force = force;
  } 
});

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var start = false;

canvas.addEventListener('mousedown', (ev) => {
  start = true;
});

canvas.addEventListener('mousemove', (ev) => {
  if(!start) return;
  ctx.beginPath();
  let startX = ev.clientX - ev.movementX;
  let startY = ev.clientY - ev.movementY;
  ctx.moveTo(startX, startY);

  let x = ev.clientX;
  let y = ev.clientY;
  ctx.lineWidth = window.force * 50;
  ctx.lineTo(x, y);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
});

canvas.addEventListener('mouseup', (ev) => {
  start = false;
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

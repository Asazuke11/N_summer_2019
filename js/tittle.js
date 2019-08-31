"use strict";

const startButton = document.getElementById('bokasi_id');
const tittleText = document.getElementById('tittle');
const clickText = document.getElementById('start-text');
const bokasi = document.getElementById('bokasi_id');
const main = document.getElementById('main');

startButton.addEventListener('click',() =>{
  osyaberi("ぼーっといきていたいんや・・","",0,5000,0)
  startButton.style.display = "none";
  tittleText.style.display = "none";
  clickText.style.display = "none";
  bokasi.style.display = "none";
  main.style.filter = "blur(0px)";
  main.style.filter = "brightness(100%)";
});

startButton.addEventListener('touchend',() =>{
  osyaberi("ぼーっといきていたいんや・・","",0,5000,0)
  startButton.style.display = "none";
  tittleText.style.display = "none";
  clickText.style.display = "none";
  bokasi.style.display = "none";
  main.style.filter = "blur(0px)";
  main.style.filter = "brightness(100%)";
});


"use strict";

const bgmarea = document.getElementById('bgm');
const bgmButton = document.getElementById('speaker');


const reefarea = document.getElementById('SE-musi');
const reefButton = document.getElementById('reef');


const style_Opacity = 0.5;

bgmButton.style.opacity = `${style_Opacity}`;
bgmarea.style.opacity = `${style_Opacity}`;

reefButton.style.opacity = `${style_Opacity}`;
reefarea.style.opacity = `${style_Opacity}`;
const BGM = {
  BGM_1: new Audio('./se/bgm1.mp3'),
  BGM_2: new Audio('./se/musi.mp3'),
  BGM_3: new Audio('./se/wind.mp3'),
  BGM_4: new Audio('./se/flog.mp3'),
  BGM_5: new Audio('./se/thunder.mp3')
}
BGM.BGM_1.volume = 0.05;
BGM.BGM_1.loop = true;

BGM.BGM_2.volume =　0.01;
BGM.BGM_2.loop = true;

BGM.BGM_3.volume =　0.05;
BGM.BGM_3.loop = true;

BGM.BGM_4.volume =　0.1;
BGM.BGM_4.loop = false;

BGM.BGM_5.volume =　0.4;
BGM.BGM_5.loop = false;

var bgmflag = false;
var reefflag = false;

bgmButton.onclick = ()=>{
  if(!bgmflag){
    BGM.BGM_1.play();
    bgmflag = true;
    bgmButton.style.opacity = "0.9";
    bgmarea.style.opacity = "0.9";
  }else if(bgmflag){
    BGM.BGM_1.pause();
    bgmflag = false;
    bgmButton.style.opacity = "0.5";
    bgmarea.style.opacity = "0.5";
  }
  
}

reefButton.onclick = ()=>{
  if(!reefflag){
    BGM.BGM_2.play();
    BGM.BGM_3.play();
    reefflag = true;
    reefButton.style.opacity = "0.9";
    reefarea.style.opacity = "0.9";
  }else if(reefflag){
    BGM.BGM_2.pause();
    BGM.BGM_3.pause();
    reefflag = false;
    reefButton.style.opacity = "0.5";
    reefarea.style.opacity = "0.5";
  }
  
}



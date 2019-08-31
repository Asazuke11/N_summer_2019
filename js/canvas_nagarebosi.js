"use strict";
{

//Canvas設定//
const CANVAS = document.getElementById('C-nagarebosi');
let ctx = CANVAS.getContext('2d');

///////Canvas-size 1280 x 800 ////////
const canvasSize_W = 1280;
const canvasSize_H = 800;
CANVAS.width = canvasSize_W;
CANVAS.height = canvasSize_H;
//////////////////////////////////////

let zS;
let zE;
let r;
let rX;

function drawShoot(){
  zS = getRandom(-120,-100);
  rX = getRandom(-6,-3);
  zE = zS + rX;
  r = getRandom(0,1100);
let nagareruhosi = setInterval(() => {
      ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
      if(zE < -120){
        zS -= 1;
      }else if(zS < -120){
        clearInterval(nagareruhosi);
      }else{
        zS -= 1.5;
        zE -= 1.4;
     
      ctx.beginPath ();
      ctx.arc(
        1000,
        1000,
        r,
        zS * Math.PI / 180,
        zE * Math.PI / 180,
        true
        );
      ctx.strokeStyle = `rgba(200,200,255,0.7)`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      }
    },300);
};


function loop(){
  let timing = getRandom(0,100);
  if(timing > 90){
    drawShoot();
  };
  setTimeout(loop,1000);
};

loop();

}
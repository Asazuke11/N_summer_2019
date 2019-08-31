"use strict";
{

//Canvas設定//
const CANVAS = document.getElementById('C-star');
let ctx = CANVAS.getContext('2d');

/////// Canvas-size////////
const canvasSize_W = CANVAS.offsetWidth; 
const canvasSize_H = CANVAS.offsetHeight;
CANVAS.width = canvasSize_W;
CANVAS.height = canvasSize_H;
////////////////////////////

ctx.translate( CANVAS.width/2, CANVAS.height/1.2);

const NumbersOfstars = 500; // 星の描画数
const starSize_min = 2 //星の最小サイズ
const starSize_max = 4 //星の最小サイズ
const starOpactiy_min = 3; //星の透明度 min:0 max:10;
const starOpactiy_max = 5; //星の透明度 min:0 max:10;


/**
 * パーティクル位置情報オブジェクトクラス
 * @class 
 * x:x座標
 * y:y座標
 * s:星の大きさ
 * opacity:透明度
 */
class Star {
  constructor(x, y,s,opacity) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.opacity = opacity;
  }
};


/**
 * クラスStarで作ったオブジェクトを入れる配列
 * @param {Array} starArray
 */
let starArray = [];

/**
 * ランダム関数で各パラメータをランダムに設定し、
 * starArray配列にオブジェクトをプッシュするfor文。
 */
for (let i = 0; i < NumbersOfstars; i++) {
  let x = getRandom(-CANVAS.width, CANVAS.width);
  let y = getRandom(-CANVAS.height, CANVAS.height);
  let s = getRandom(starSize_min,starSize_max);
  let opacity = getRandom(starOpactiy_min, starOpactiy_max) / 10;
  starArray.push(new Star(x, y, s,opacity));
};


/**
 * canvasに実際に円を描画する関数です。
 * for in 文で配列の中身を順次回しています。
 */
function draw() {
  for (let i in starArray) {
    ctx.beginPath();
    ctx.arc(starArray[i].x, starArray[i].y, 2, 0, starArray[i].s, false);
    ctx.fillStyle = `rgba(255,255,255,${starArray[i].opacity})`;
    ctx.fill();
    ctx.stroke();
  }
};

let Color_BG = getRandom(0,10);
CANVAS.style.background = `linear-gradient(0deg, rgb(17, 17, 20) 0%,rgb(0, 0, ${Color_BG}) 100%)`;
let flag = true;
function chenge_BGcolor () {
  if(Color_BG <= 0 && !flag){
    flag = true;
  }else if(Color_BG >= 10 && flag){
    flag = false;
  }
  if(flag){
    Color_BG++
  }else{
    Color_BG--
  }
  CANVAS.style.background = `linear-gradient(0deg, rgb(17, 17, 20) 0%,rgb(0, 0, ${Color_BG}) 100%)`;
}

function rotateStar(){
  chenge_BGcolor ();
  ctx.rotate(0.1 * Math.PI /180);
}

setInterval(rotateStar,3000);

/**
 * ページが開かれた時にdraw関数を動かし、その後
 * インターバル関数内で各透明度をランダムに更新し、
 * 変更したパラメータを200/1000 s で描画しています。
 */
draw();
setInterval(()=>{
  ctx.clearRect(-CANVAS.width,-CANVAS.height,CANVAS.width*2, CANVAS.height*2);
  for (let i in starArray) {
    starArray[i].opacity = getRandom(starOpactiy_min, starOpactiy_max) / 10;
  }
  draw();
},300);


/**
 *　ブラウザーのサイズを変更したときに再描画する関数
 */
window.addEventListener('resize', function (e) {
  starArray = [];
  for (let i = 0; i < NumbersOfstars; i++) {
    let x = getRandom(-CANVAS.width, CANVAS.width);
    let y = getRandom(-CANVAS.height, CANVAS.height);
    let s = getRandom(starSize_min,starSize_max);
    let opacity = getRandom(starOpactiy_min, starOpactiy_max) / 10;
    starArray.push(new Star(x, y, s,opacity));
  };
  ctx.clearRect(-CANVAS.width,-CANVAS.height,CANVAS.width*2, CANVAS.height*2);
  draw();
});

}
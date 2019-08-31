'use strict';

//ランダム関数(下限,上限)//

function getRandom(min, max) {
  if(min > max){
    console.log('error:min > max');
    return;
  }
  return Math.floor(Math.random() * (max - min) + min);
}


{
/*
//getRandom関数の出力値がmin~max内に収まってるかのテスト:OK//
for (let i = 0;i < 1000; i++){
  let x = getRandom(-100, 100);
  if(x < -100 || x > 100){
    console.log('error');
  }
  console.log(x);
}

//min max の引数を逆に書いた時のガード句テスト:OK//
getRandom(10,1);
*/

}

//Canvas設定//
const CANVAS = document.getElementById('C-background');
let akane_ctx = CANVAS.getContext('2d');
akane_ctx.globalCompositeOperation = 'copy';
///////Canvas-size 1280 x 800 ////////
const canvasSize_W = 1280;
const canvasSize_H = 800;
CANVAS.width = canvasSize_W;
CANVAS.height = canvasSize_H;
//////////////////////////////////////



//使用する画像の各設定
var img_akane = new Image();
img_akane.src = `./images/akane_all_150-250tes.png`;

var hotaru = document.getElementById('hotaru-div');


/**
 * 一枚絵のキャラクタを切り取って表示するためのクラス
 * 画像切り取り始点 mask_x,mask_y
 * 画像切り取り終点 mask_ex,mask_ey
 * 画像配置座標 x,y
 * 表示画像サイズ zx,zy
 */
class Akane{
  constructor(mask_x, mask_y,mask_ex,mask_ey,x,y,zx,zy) {
    this.mask_x = mask_x;
    this.mask_y = mask_y;
    this.mask_ex = mask_ex;
    this.mask_ey = mask_ey;
    this.x = x;
    this.y = y;
    this.zx = zx;
    this.zy = zy;
  }
};

var AkaneObjectArray = [];
var akane_position = {
  x: 940,
  y: 450
}

AkaneObjectArray.push(new Akane(
  150,
  0,
  100,
  300,
  akane_position.x,
  akane_position.y,
  100,300)
  );

  AkaneObjectArray.push(new Akane(
    0,
    0,
    150,
    300,
    akane_position.x -45,
    akane_position.y,
    150,300)
    );

    AkaneObjectArray.push(new Akane(
      250,
      0,
      100,
      300,
      akane_position.x,
      akane_position.y,
      100,300)
    );

window.onload = () => {
  akane_ctx.drawImage(img_akane,
    AkaneObjectArray[0].mask_x,
    AkaneObjectArray[0].mask_y,
    AkaneObjectArray[0].mask_ex,
    AkaneObjectArray[0].mask_ey,
    AkaneObjectArray[0].x,
    AkaneObjectArray[0].y,
    AkaneObjectArray[0].zx,
    AkaneObjectArray[0].zy
    );
};


function awaihikari(){
  var hikari = getRandom(60,65);
  hotaru.style.filter = `brightness(${hikari}%)`;
  CANVAS.style.filter = `brightness(${hikari - 10}%)`;
  setTimeout(awaihikari,300);
}

awaihikari();

function akane1(){
  akane_ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
  akane_ctx.drawImage(img_akane,
    AkaneObjectArray[0].mask_x,
    AkaneObjectArray[0].mask_y,
    AkaneObjectArray[0].mask_ex,
    AkaneObjectArray[0].mask_ey,
    AkaneObjectArray[0].x,
    AkaneObjectArray[0].y,
    AkaneObjectArray[0].zx,
    AkaneObjectArray[0].zy
    );
}
function akane2(){
  akane_ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
  akane_ctx.drawImage(img_akane,
    AkaneObjectArray[1].mask_x,
    AkaneObjectArray[1].mask_y,
    AkaneObjectArray[1].mask_ex,
    AkaneObjectArray[1].mask_ey,
    AkaneObjectArray[1].x,
    AkaneObjectArray[1].y,
    AkaneObjectArray[1].zx,
    AkaneObjectArray[1].zy
    );
}
function akane3(){
  akane_ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
  akane_ctx.drawImage(img_akane,
    AkaneObjectArray[2].mask_x,
    AkaneObjectArray[2].mask_y,
    AkaneObjectArray[2].mask_ex,
    AkaneObjectArray[2].mask_ey,
    AkaneObjectArray[2].x,
    AkaneObjectArray[2].y,
    AkaneObjectArray[2].zx,
    AkaneObjectArray[2].zy
    );
}

const fukidasi = document.getElementById('text-fukidasi');
const serifu = document.getElementById('comment');
function osyaberi(serifu1,serifu2,facetype,time1,time2){
  if(facetype == 0){
    akane1();
  }
  if(facetype == 1){
    akane2();
  }
  if(facetype == 2){
    akane3();
  }
  fukidasi.style.animationPlayState = "running";
  fukidasi.style.display = "inline";
  serifu.innerText = serifu1;
  setTimeout(()=>{
    serifu.innerText = serifu2;
    setTimeout(()=>{
      fukidasi.style.display = "none";
      akane1();
    },time2);
  },time1);
}


"use strict";
{
  const all = document.getElementById('main');
  const moji = document.getElementById("text-summer");
  const inputText1 = document.getElementById('todo-input1');
  const inputText2 = document.getElementById('todo-input2');
  const kaerubotan = document.getElementById('kaerubotan');
  const radio = document.getElementById('radio');
  const kesu = document.getElementById('kesukaerubotan');

  var main_loop;

  var tweetArray = [];
  var tweet = localStorage.getItem("tweetsJson");
  if(tweet){
  tweetArray = JSON.parse(tweet);
  };

  tweetArray.push({s1:"N予備校の生授業は・・",s2:"火曜・金曜やで",v:2});
  tweetArray.push({s1:"ローカルストレージの使いかたは",s2:"Webデザインコースにあるで",v:2});
  tweetArray.push({s1:"セリフ入れてOKおすと",s2:"なんかおこるで・・",v:2});


function coment_loop(){
  clearTimeout(main_loop);
  let i = getRandom(0,tweetArray.length);
  osyaberi(
    tweetArray[i].s1,
    tweetArray[i].s2,
    tweetArray[i].v,
    5000,4000
    );
  setTimeout(coment_loop,30000);
};

  let windowflag = false;
  let left = 0;
  moji.onclick = () =>{
    move();
    akane2();
    osyaberi(
      "これがほんとの動くWebページ！",
      "・・・",
      akane3,
    4000,2000);
  };
  let counter = 0;
  function move (){
    if(left < -80 && !windowflag){
      windowflag = true;
      counter++;
    }else if(left > 80 && windowflag){
      windowflag = false;
      counter++;
    }
      if(!windowflag){
        left -= 2;
      }else if(windowflag){
        left += 2;
      }
      all.style.left = `${left}px`;

      if(counter > 1 && left <= 0){
        all.style.left = `0px`;
        counter = 0;
        cancelAnimationFrame(move);
        return;
      }
      requestAnimationFrame(move);
  };

  kaerubotan.onclick = () =>{
    let serifu1 = inputText1.value;
    if (serifu1.length === 0) {
      osyaberi(
        "一言目が空欄やで。",
        "なんかかいてな",
        0,
      4000,3000);
      return;};
    let serifu2 = inputText2.value;
    if(serifu2.length === 0){
      serifu2 = "・・・";
    }
    let radiocheck = radio.face;
    let radiovalue = radiocheck.value;
    if(!radiovalue){radiovalue = 0;};
    tweetArray.push({s1:serifu1,s2:serifu2,v:radiovalue});
    let saveTweet = JSON.stringify(tweetArray);
    localStorage.setItem("tweetsJson",saveTweet);
    inputText1.value = "";
    inputText2.value = "";
    BGM.BGM_4.play();
    main_loop = setTimeout(coment_loop,30000);
    osyaberi(
      "受け付けたで。",
      "いつかしゃべるわ。",
      0,
    4000,3000);
  }

  kesu.onclick = () =>{
    localStorage.removeItem("tweetsJson");
    tweetArray = [];
    tweetArray.push({s1:"N予備校の生授業は・・",s2:"火曜・金曜やで",v:2});
    tweetArray.push({s1:"ローカルストレージの使いかたは",s2:"Webデザインコースにあるで",v:2});
    tweetArray.push({s1:"セリフ入れてなー",s2:"",v:2});
    tweetArray.push({s1:"変なセリフいれると",s2:"忘れたころに誰かに見られるで",v:1});
    BGM.BGM_5.play();
    osyaberi(
      "ローカルストレージ削除ー",
      "もうおそいで",
      1,
    4000,3000);
    main_loop = setTimeout(coment_loop,30000);
  }
}


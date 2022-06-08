
function countDown(doomTime){
    let doomTimer = setInterval(function(){
    doomTime--;
    if (doomTime <= 0){
      clearInterval(doomTimer);
      console.log('done!');
    }
    else {
      console.log(doomTime);
    }
  },1000)
}

function randomGame(){
  let randomNum;
  let tries = 0;
  let times = setInterval(function(){
    randomNum = Math.random();
    tries++
    if(randomNum > .75){
      clearInterval(times);
      console.log("It took " + tries + " try/tries.");
    }
  },1000)

}
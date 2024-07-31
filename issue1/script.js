// JavaScript Document

// document.addEventListener("DOMContentLoaded", function() {
console.log("DOM fully loaded and parsed");
window.onload = function() {
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    alert("* ~ The zine is best viewed on a laptop or desktop! Some features are not compatible with mobile devices. ~ *");
  }
}
// var marxVid = document.getElementById("marxVid");
// var familyVid = document.getElementById("familyVid");
// var womanVid = document.getElementById("womanVid");
// var harmonizeVid = document.getElementById("harmonizeVid");
// var att = document.createAttribute("poster");

var bkgdSound = document.querySelector('#bkgdSound');
var body = document.querySelector('body');
// console.log(body);
var timeoutID = null;
var timee = 900000;
// var timee = 300;

var overlay = document.getElementById("overlay");

/*
playPause sets the poster frame
*/
// marxVid.addEventListener('click', playPause);
/*
if the video is playing turn off background sound;
it the video is stopped turn on background bkgdSound
*/


// marxVid.addEventListener('timeupdate', checkSound);
// marxVid.addEventListener('ended', setPoster);
//
//
// familyVid.addEventListener('timeupdate', checkSound);
// familyVid.addEventListener('ended', setPoster);
//
// womanVid.addEventListener('timeupdate', checkSound);
// womanVid.addEventListener('ended', setPoster);
//
// harmonizeVid.addEventListener('timeupdate', checkSound);
// harmonizeVid.addEventListener('ended', setPoster);


// marxVid.addEventListener('pause', insertPoster);
// body.addEventListener('onload', playMusic);
window.addEventListener('load', startTime);
// window.addEventListener('load', function(){
//     bkgdSound.play();
// })
body.addEventListener('click', startTime);
body.addEventListener('mousemove', startTime);
body.addEventListener('mousemoved', startTime);
body.addEventListener('scroll', startTime);



// body.addEventListener('mousemove', function(){
//   //console.log('mouse moved');
//   startTime();
// })



function startTime() {
  console.log('starting timer');
  //make sure timer was started
  // reset the timer because someone interacted
  if (timeoutID !== null) {
    // timeoutID = null;
    window.clearTimeout(timeoutID);
    // console.log(timeoutID);
  }

  timeoutID = setTimeout(function() {

    timeout = null;
    overlay.style.display = 'block';

    overlay.addEventListener('click', function() {
      console.log('click on overlay');
      overlay.style.display = 'none';
      //reload the page
      // window.location.assign("index.html");
    });

  }, timee);
}

// function insertPoster() {
//   console.log('insertPoster, current att.value: ' + att.value);
//   att.value = "images/marx.png";
//   // marxVid.createAttribute(att);
//     marxVid.load();
// }

// function setPoster() {
//   console.log('setPoster, current att.value: ' + att.value);
//   // att.value = "images/marx.png";
//   // marxVid.createAttribute(att);
//   marxVid.load();
//   familyVid.load();
//   womanVid.load();
//   harmonizeVid.load();
// }

// function playMusic(){
//   bkgdSound.play();
// }


// function checkSound() {
//   console.log('checkSound');
//   if (marxVid.paused && familyVid.paused && womanVid.paused && harmonizeVid.paused) {
//     bkgdSound.play();

// att.value = "images/marx.png";
// marxVid.createAttribute(att);
// }  else if (familyVid.paused) {
//     bkgdSound.play();

// } else if (marxVid.ended && familyVid.ended && womanVid.ended && harmonizeVid.ended) {
//   bkgdSound.play();
//
// } else {
//   bkgdSound.pause();
// att.value="";
// marxVid.setAttributeNode(att);
//   }
// }

//   return false;
//   // myVideo.addEventListener('ended', function() {})
//
// });
//

function togglePlay() {
  return bkgdSound.paused ? bkgdSound.play() : bkgdSound.pause();
};


//ABOUT OVERLAY
var about = document.getElementById('about');

// click on current for info box
about.addEventListener('click', function() {
  aboutOverlay.style.display = "block";
});

// current info box that displays on click
document.getElementById('aboutOverlay');
var close = document.getElementById('close');

close.addEventListener('click', function() {
  aboutOverlay.style.display = "none";
});

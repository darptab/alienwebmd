// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // psychic variables
  var psychic = document.getElementById('psychic');
  var psychicTip = document.getElementById('psychicTip');

  // ball variables
  var ball = document.getElementById('ball');
  var ballTip = document.getElementById('ballTip');

  // drink variables
  var drink = document.getElementById('drink');
  var drinkTip = document.getElementById('drinkTip');

  // tip timer variable
  var tipTimer;

  //cards

  var myPix = new Array("images/1/1.png", "images/1/2.png", "images/1/3.png", "images/1/4.png", "images/1/5.png", "images/1/6.png", "images/1/7.png", "images/1/8.png", "images/1/9.png", "images/1/10.png", "images/1/11.png", "images/1/12.png", "images/1/13.png", "images/1/14.png", "images/1/15.png");
  var textarray = ["source: @chillblinton", "source: @sadsimpsonsmemes", "source: @malefragility", "source: @emotionalclub", "source: @premium_advice.giveaway", "source: @classical_art_memes", "source: @sadsimpsonsmemes", "source: @sassysocialistmemes", "source: @rantingowl", "source: @wokememesbc", "source: @dopeexplanations", "source: @dopeexplanations", "source: @knowyourmeme", "source: @inzane_johnny", "source: @classical_art_memes"];

  var myPix1 = new Array("images/2/1.png", "images/2/2.png", "images/2/3.png", "images/2/4.png", "images/2/5.png", "images/2/6.png", "images/2/7.png", "images/2/8.png", "images/2/9.png", "images/2/10.png", "images/2/11.png", "images/2/12.png", "images/2/13.png", "images/2/14.png", "images/2/15.png");
  var text1array = ["source: @classical_art_memes", "source: @dank__memess", "source: @malefragility", "source: @wokememesbc", "source: @inzane_johnny", "source: @terencemckennaoffical", "source: @inzane_johnny", "source: @scariest_bug_ever", "source: @newscomauHQ", "source: me.me", "source: @8-Bit-Communism", "source: @wokememesbc2", "source: @8-Bit-Communism", "source: @aidenarata", "source: @daddyissues_5"];

  var myPix2 = new Array("images/3/1.png", "images/3/2.png", "images/3/3.png", "images/3/4.png", "images/3/5.png", "images/3/6.png", "images/3/7.png", "images/3/8.png", "images/3/9.png", "images/3/10.png", "images/3/11.png", "images/3/12.png", "images/3/13.png", "images/3/14.png", "images/3/15.png");
  var text2array = ["source: @callmemedaddy", "source: me.me", "source: someecards.com", "source: @knowyourmeme", "source: @wokememesbc", "source: quickmeme.com", "source: @we_are_democratic_socialists", "source: @we_are_democratic_socialists", "source: @8-Bit-Communism", "source: @8-Bit-Communism", "source: @wokememesbc", "source: @wokememesbc", "source: @knowyourmeme", "source: @classicalfuck", "source: @mytherapistsays"];


  //card 1
  document.getElementById("myPicture").addEventListener("click", choosePic);

  function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
    document.getElementById("myText").innerHTML = textarray[randomNum];
  }


  //card 2
  document.getElementById("myPicture1").addEventListener("click", choosePic1);

  function choosePic1() {
    var randomNum = Math.floor(Math.random() * myPix1.length);
    document.getElementById("myPicture1").src = myPix1[randomNum];
    document.getElementById("myText1").innerHTML = text1array[randomNum];
  }

  //card 3
  document.getElementById("myPicture2").addEventListener("click", choosePic2);

  function choosePic2() {
    var randomNum = Math.floor(Math.random() * myPix2.length);
    document.getElementById("myPicture2").src = myPix2[randomNum];
    document.getElementById("myText2").innerHTML = text2array[randomNum];
  }

  //start over button
  document.getElementById("repeatBtn").addEventListener("click", startOver);

  function startOver() {
    document.getElementById('myPicture').src = "images/default.png";
    document.getElementById('myPicture1').src = "images/default.png";
    document.getElementById('myPicture2').src = "images/default.png";
    document.getElementById("myText").innerHTML = "";
    document.getElementById("myText1").innerHTML = "";
    document.getElementById("myText2").innerHTML = "";
  }




  // psychic functionality
  psychic.addEventListener('mouseover', function() {
    console.log('mouseover on psychic');
    tipTimer = setTimeout(showPsychicTip, 1000);
  });

  psychic.addEventListener('mouseout', function() {
    console.log('mouseout on psychic');
    clearTimeout(tipTimer);
    psychicTip.style.opacity = 0;
  });

  function showPsychicTip() {
    console.log('showing msg');
    psychicTip.style.opacity = 1;
    psychicTip.style.transition = 'all .5s';
  }

  // ball functionality
  ball.addEventListener('mouseover', function() {
    console.log('mouseover on ball');
    tipTimer = setTimeout(showBallTip, 1000);
  });

  ball.addEventListener('mouseout', function() {
    console.log('mouseout on ball');
    clearTimeout(tipTimer);
    ballTip.style.opacity = 0;
  });

  ball.addEventListener('click', function() {
    starAnim = requestAnimationFrame(moveStar);
  });


  function showBallTip() {
    console.log('showing msg');
    ballTip.style.opacity = 1;
    ballTip.style.transition = 'all .5s';
  }

  // drink functionality
  drink.addEventListener('mouseover', function() {
    console.log('mouseover on drink');
    tipTimer = setTimeout(showDrinkTip, 1000);
  });

  drink.addEventListener('mouseout', function() {
    console.log('mouseout on drink');
    clearTimeout(tipTimer);
    drinkTip.style.opacity = 0;
  });

  function showDrinkTip() {
    console.log('showing msg');
    drinkTip.style.opacity = 1;
    drinkTip.style.transition = 'all .5s';
  }

  //ABOUT OVERLAY
  var drink1 = document.getElementById('drink1');

  // click on current for info box
  drink1.addEventListener('click', function() {
    overlay.style.display = "block";
  });

  // current info box that displays on click
  document.getElementById('overlay');
  var close = document.getElementById('close');

  close.addEventListener('click', function() {
    overlay.style.display = "none";
    overlay.style.transition = 'all .5s';
  });


  /// star animation variables
  var stopAnimation = document.getElementById('stopAnimation');
  var star = document.getElementById('star');
  var starAnim;

  stopAnimation.addEventListener('mouseover', function() {
    console.log('stop clicked');
    cancelAnimationFrame(starAnim);
  });



  function moveStar() {
    console.log('moving star');


    var w = 38;
    var h = 38;
    //console.log ('w: ' + w + ', h: ' + h);

    var newLeft = (Math.floor(Math.random() * w)) + 'px';
    var newTop = (Math.floor(Math.random() * h)) + 'px';
    //console.log ('newLeft: ' + newLeft);

    star.style.left = newLeft;
    star.style.top = newTop;

    // recursive call back to the same function
    starAnim = requestAnimationFrame(moveStar);
  }


  // drink timer
  // var alertTimer;
  //
  // drink.addEventListener('click', function() {
  //   console.log('clicked start');
  //   alertTimer = setTimeout(showAlert, 1000);
  // });
  //
  // function showAlert() {
  //   alert('Congratulations! Your chakras have been cleansed.');
  // }

});

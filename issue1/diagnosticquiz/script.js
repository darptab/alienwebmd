// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  //capture the submit event
  document.diagnostics.onsubmit = processForm;

  //onreset
  document.diagnostics.onreset = clearForm;

  //define process function
  function processForm() {

    document.getElementById("message").style.display = 'block';

    //store q1 in a variable called q1
    var q1 = document.diagnostics.q1.value;
    // alert('Hi ' + userName);

    //store q2 in a variable called q2
    var q2 = document.diagnostics.q2.value;

    //store q2 in a variable called q2
    //var q3 = document.diagnostics.q3.value;

    //console.log('q3: ' + q3);
    //test();

    //function test() {
    var cboxes = document.getElementsByName('q3');
    var len = cboxes.length;
    // for (var i=0; i<len; i++) {
    //     alert(i + (cboxes[i].checked?' checked ':' unchecked ') + cboxes[i].value);
    // }
    //}

    // capture the my Msg element
    var myMsg = document.getElementById('myMsg');
    var message = document.getElementById("message");
    var overlay = document.getElementById("overlay");
    var r_a = 0.7;

    // if (q1 == "A" && q2 == "A" && cboxes[0].checked == true) {
    //   myMsg.innerHTML = "Robots have replaced your job and your relationship. Try to become as cheap as a robot to stay competitive.";
    //   message.style.backgroundColor = "rgba(87, 234, 206, " + r_a + ")";
    //   message.style.color = "#443817";
    //   message.style.textShadow = "2px 2px 5px #2b7265";


    // robots
    if (q1 == "A" && q2 == "A") {
      myMsg.innerHTML = "Robots have replaced your job and your relationship. Try to become as cheap as a robot to stay competitive.";
      message.style.backgroundColor = "rgba(87, 234, 206, " + r_a + ")";
      message.style.color = "#443817";
      message.style.textShadow = "2px 2px 5px #2b7265";

    } else if (q1 == "A" && q2 == "I") {
      myMsg.innerHTML = "Robots have replaced your job and your relationship. Try to become as cheap as a robot to stay competitive.";
      message.style.backgroundColor = "rgba(87, 234, 206, " + r_a + ")";
      message.style.color = "#443817";
      message.style.textShadow = "2px 2px 5px #2b7265";

    } else if (q1 == "B" && q2 == "F") {
      myMsg.innerHTML = "Robots have replaced your job and your relationship. Try to become as cheap as a robot to stay competitive.";
      message.style.backgroundColor = "rgba(87, 234, 206, " + r_a + ")";
      message.style.color = "#443817";
      message.style.textShadow = "2px 2px 5px #2b7265";

    } else if (q1 == "C" && q2 == "C") {
      myMsg.innerHTML = "Robots have replaced your job and your relationship. Try to become as cheap as a robot to stay competitive.";
      message.style.backgroundColor = "rgba(87, 234, 206, " + r_a + ")";
      message.style.color = "#443817";
      message.style.textShadow = "2px 2px 5px #2b7265";


      // climate change
    } else if (q1 == "A" && q2 == "B") {
      myMsg.innerHTML = "Climate change is destroying your world and profit-motivated policies are speeding up that inevitability. Perhaps you can stow away on Elon Musk's exclusive transportation to Mars.";
      message.style.backgroundColor = "rgba(144, 239, 125, " + r_a + ")";
      message.style.color = "#204219";
      message.style.textShadow = "2px 2px 5px #37772a";

    } else if (q1 == "C" && q2 == "E") {
      myMsg.innerHTML = "Climate change is destroying your world and profit-motivated policies are speeding up that inevitability. Perhaps you can stow away on Elon Musk's exclusive transportation to Mars.";
      message.style.backgroundColor = "rgba(144, 239, 125, " + r_a + ")";
      message.style.color = "#204219";
      message.style.textShadow = "2px 2px 5px #37772a";

    } else if (q1 == "B" && q2 == "G") {
      myMsg.innerHTML = "Climate change is destroying your world and profit-motivated policies are speeding up that inevitability. Perhaps you can stow away on Elon Musk's exclusive transportation to Mars.";
      message.style.backgroundColor = "rgba(144, 239, 125, " + r_a + ")";
      message.style.color = "#204219";
      message.style.textShadow = "2px 2px 5px #37772a";

    } else if (q1 == "C" && q2 == "D") {
      myMsg.innerHTML = "Climate change is destroying your world and profit-motivated policies are speeding up that inevitability. Perhaps you can stow away on Elon Musk's exclusive transportation to Mars.";
      message.style.backgroundColor = "rgba(144, 239, 125, " + r_a + ")";
      message.style.color = "#204219";
      message.style.textShadow = "2px 2px 5px #37772a";


      // destined to work
    } else if (q1 == "A" && q2 == "C") {
      myMsg.innerHTML = "You are destined to work as long as you are alive, since you can't look forward to social security (and not to mention your staggering student loan debt!). Our recommendation: don’t get tired.";
      message.style.backgroundColor = "rgba(230, 234, 89, " + r_a + ")";
      message.style.color = "#333213";
      message.style.textShadow = "2px 2px 5px #9b9b31";

    } else if (q1 == "A" && q2 == "K") {
      myMsg.innerHTML = "You are destined to work as long as you are alive, since you can't look forward to social security (and not to mention your staggering student loan debt!). Our recommendation: don’t get tired.";
      message.style.backgroundColor = "rgba(230, 234, 89, " + r_a + ")";
      message.style.color = "#333213";
      message.style.textShadow = "2px 2px 5px #9b9b31";

    } else if (q1 == "B" && q2 == "H") {
      myMsg.innerHTML = "You are destined to work as long as you are alive, since you can't look forward to social security (and not to mention your staggering student loan debt!). Our recommendation: don’t get tired.";
      message.style.backgroundColor = "rgba(230, 234, 89, " + r_a + ")";
      message.style.color = "#333213";
      message.style.textShadow = "2px 2px 5px #9b9b31";

    } else if (q1 == "C" && q2 == "F") {
      myMsg.innerHTML = "You are destined to work as long as you are alive, since you can't look forward to social security (and not to mention your staggering student loan debt!). Our recommendation: don’t get tired.";
      message.style.backgroundColor = "rgba(230, 234, 89, " + r_a + ")";
      message.style.color = "#333213";
      message.style.textShadow = "2px 2px 5px #9b9b31";



      // never like yourself
    } else if (q1 == "A" && q2 == "D") {
      myMsg.innerHTML = "Capitalism has ensured that you will never like yourself, but the good news is, Instagram filters will make your skin look very toned. Look into more filters.";
      message.style.backgroundColor = "rgba(221, 165, 229, " + r_a + ")";
      message.style.color = "#261228";
      message.style.textShadow = "2px 2px 5px #9744a0";

    } else if (q1 == "A" && q2 == "L") {
      myMsg.innerHTML = "Capitalism has ensured that you will never like yourself, but the good news is, Instagram filters will make your skin look very toned. Look into more filters.";
      message.style.backgroundColor = "rgba(221, 165, 229, " + r_a + ")";
      message.style.color = "#261228";
      message.style.textShadow = "2px 2px 5px #9744a0";

    } else if (q1 == "B" && q2 == "I") {
      myMsg.innerHTML = "Capitalism has ensured that you will never like yourself, but the good news is, Instagram filters will make your skin look very toned. Look into more filters.";
      message.style.backgroundColor = "rgba(221, 165, 229, " + r_a + ")";
      message.style.color = "#261228";
      message.style.textShadow = "2px 2px 5px #9744a0";

    } else if (q1 == "C" && q2 == "G") {
      myMsg.innerHTML = "Capitalism has ensured that you will never like yourself, but the good news is, Instagram filters will make your skin look very toned. Look into more filters.";
      message.style.backgroundColor = "rgba(221, 165, 229, " + r_a + ")";
      message.style.color = "#4d2451";
      message.style.textShadow = "2px 2px 5px #9744a0";



      // fad diet
    } else if (q1 == "A" && q2 == "E") {
      myMsg.innerHTML = "Your latest life-hacking fad diet merely tricked you into working longer hours and gave you a false sense of control. But a false sense of control is perhaps better than none! Keep it up.";
      message.style.backgroundColor = "rgba(122, 204, 244, " + r_a + ")";
      message.style.color = "#172e3a";
      message.style.textShadow = "2px 2px 5px #3c6e87";

    } else if (q1 == "B" && q2 == "A") {
      myMsg.innerHTML = "Your latest life-hacking fad diet merely tricked you into working longer hours and gave you a false sense of control. But a false sense of control is perhaps better than none! Keep it up.";
      message.style.backgroundColor = "rgba(122, 204, 244, " + r_a + ")";
      message.style.color = "#172e3a";
      message.style.textShadow = "2px 2px 5px #3c6e87";

    } else if (q1 == "B" && q2 == "J") {
      myMsg.innerHTML = "Your latest life-hacking fad diet merely tricked you into working longer hours and gave you a false sense of control. But a false sense of control is perhaps better than none! Keep it up.";
      message.style.backgroundColor = "rgba(122, 204, 244, " + r_a + ")";
      message.style.color = "#172e3a";
      message.style.textShadow = "2px 2px 5px #3c6e87";

    } else if (q1 == "C" && q2 == "H") {
      myMsg.innerHTML = "Your latest life-hacking fad diet merely tricked you into working longer hours and gave you a false sense of control. But a false sense of control is perhaps better than none! Keep it up.";
      message.style.backgroundColor = "rgba(122, 204, 244, " + r_a + ")";
      message.style.color = "#172e3a";
      message.style.textShadow = "2px 2px 5px #3c6e87";



      // healthcare
    } else if (q1 == "A" && q2 == "F") {
      myMsg.innerHTML = "You don’t have healthcare! No problem, just don’t ever get sick.";
      message.style.backgroundColor = "rgba(237, 172, 100, " + r_a + ")";
      message.style.color = "#2d2013";
      message.style.textShadow = "2px 2px 5px #9e6d3c";

    } else if (q1 == "B" && q2 == "B") {
      myMsg.innerHTML = "You don’t have healthcare! No problem, just don’t ever get sick.";
      message.style.backgroundColor = "rgba(237, 172, 100, " + r_a + ")";
      message.style.color = "#2d2013";
      message.style.textShadow = "2px 2px 5px #9e6d3c";

    } else if (q1 == "B" && q2 == "K") {
      myMsg.innerHTML = "You don’t have healthcare! No problem, just don’t ever get sick.";
      message.style.backgroundColor = "rgba(237, 172, 100, " + r_a + ")";
      message.style.color = "#2d2013";
      message.style.textShadow = "2px 2px 5px #9e6d3c";

    } else if (q1 == "C" && q2 == "I") {
      myMsg.innerHTML = "You don’t have healthcare! No problem, just don’t ever get sick.";
      message.style.backgroundColor = "rgba(237, 172, 100, " + r_a + ")";
      message.style.color = "#2d2013";
      message.style.textShadow = "2px 2px 5px #9e6d3c";



      // housing
    } else if (q1 == "A" && q2 == "G") {
      myMsg.innerHTML = "You still can’t afford housing in your 30’s! But not to worry, you can rent a bunk bed in a shared adult dormitory for $1500/mo.";
      message.style.backgroundColor = "rgba(193, 158, 239, " + r_a + ")";
      message.style.color = "#251f30";
      message.style.textShadow = "2px 2px 5px #705c8e";

    } else if (q1 == "B" && q2 == "C") {
      myMsg.innerHTML = "You still can’t afford housing in your 30’s! But not to worry, you can rent a bunk bed in a shared adult dormitory for $1500/mo.";
      message.style.backgroundColor = "rgba(193, 158, 239, " + r_a + ")";
      message.style.color = "#251f30";
      message.style.textShadow = "2px 2px 5px #705c8e";

    } else if (q1 == "B" && q2 == "L") {
      myMsg.innerHTML = "You still can’t afford housing in your 30’s! But not to worry, you can rent a bunk bed in a shared adult dormitory for $1500/mo.";
      message.style.backgroundColor = "rgba(193, 158, 239, " + r_a + ")";
      message.style.color = "#251f30";
      message.style.textShadow = "2px 2px 5px #705c8e";

    } else if (q1 == "C" && q2 == "J") {
      myMsg.innerHTML = "You still can’t afford housing in your 30’s! But not to worry, you can rent a bunk bed in a shared adult dormitory for $1500/mo.";
      message.style.backgroundColor = "rgba(193, 158, 239, " + r_a + ")";
      message.style.color = "#251f30";
      message.style.textShadow = "2px 2px 5px #705c8e";


      // authoritarian
    } else if (q1 == "A" && q2 == "H") {
      myMsg.innerHTML = "Capitalism is leaving so many behind that it is encouraging the rise of fascist regimes, including your own. Stake out a hiding place now, but watch out for survivalists.";
      message.style.backgroundColor = "rgba(193, 167, 243, " + r_a + ")";
      message.style.color = "#202030";
      message.style.textShadow = "2px 2px 5px #5f5f93";

    } else if (q1 == "B" && q2 == "D") {
      myMsg.innerHTML = "Capitalism is leaving so many behind that it is encouraging the rise of fascist regimes, including your own. Stake out a hiding place now, but watch out for survivalists.";
      message.style.backgroundColor = "rgba(193, 167, 243, " + r_a + ")";
      message.style.color = "#202030";
      message.style.textShadow = "2px 2px 5px #5f5f93";

    } else if (q1 == "C" && q2 == "A") {
      myMsg.innerHTML = "Capitalism is leaving so many behind that it is encouraging the rise of fascist regimes, including your own. Stake out a hiding place now, but watch out for survivalists.";
      message.style.backgroundColor = "rgba(193, 167, 243, " + r_a + ")";
      message.style.color = "#202030";
      message.style.textShadow = "2px 2px 5px #5f5f93";

    } else if (q1 == "C" && q2 == "K") {
      myMsg.innerHTML = "Capitalism is leaving so many behind that it is encouraging the rise of fascist regimes, including your own. Stake out a hiding place now, but watch out for survivalists.";
      message.style.backgroundColor = "rgba(193, 167, 243, " + r_a + ")";
      message.style.color = "#202030";
      message.style.textShadow = "2px 2px 5px #5f5f93";


      // therapist
    } else {
      myMsg.innerHTML = "You, like all of us, need a therapist! Unfortunately, you can’t shell out the $120 a week. Fortunately, there’s Yahoo Answers."
      message.style.backgroundColor = "rgba(242, 166, 160, " + r_a + ")";
      message.style.color = "#2d0e0e";
      message.style.textShadow = "2px 2px 5px #bf6762";
    }

    //display as block element
    myMsg.style.display = 'block';
    overlay.style.display = 'block';

    //listen for any click
    overlay.addEventListener('click', function() {
      console.log('clicked overlay');
      overlay.style.display = 'none';
      clearForm();
    });

    //prevent page from reloading
    return false;
  }

  function clearForm() {
    console.log('clearing form');
    myMsg.style.display = 'none';
    // trying to reset page to 0,0
    // location.reload();
    // var header = document.querySelector('header');
    // console.log('top: ' + header.style.top);

    window.location.assign("index.html")

    //prevent page from reloading
    return false;
  }



});

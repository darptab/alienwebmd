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

    // capture the my Msg element
    var myMsg = document.getElementById('myMsg');
    var message = document.getElementById("message");
    var message = document.getElementById("messagebg");
    var overlay = document.getElementById("overlay");
    var verdict = document.getElementById("verdict");


    if (q1 == "A") {
      myMsg.innerHTML = "You maybe be two robot arms coordinating to plan and execute the building of IKEA furniture, but you may soon overtake many human-skilled tasks. Congratulations, and think now about forming a union.";
      messagebg.style.backgroundImage = "url('images/ikea.png')";
      verdict.innerHTML = "Verdict: Robot";


    } else if (q1 == "B") {
      myMsg.innerHTML = "You may be a robot, but you have Saudi Arabian citizenship and a United Nations title, which are more rights and honors awarded than to many humans.";
      messagebg.style.backgroundImage = "url('images/sophia.png')";
      verdict.innerHTML = "Verdict: Robot";

    } else if (q1 == "C") {
      myMsg.innerHTML = "You may be a human-sized sex toy, but you were created with the goal of replacing relationships with women who have the audacity to say no and have their own agency. That is power!";
      messagebg.style.backgroundImage = "url('images/harmony.png')";
      verdict.innerHTML = "Verdict: Robot";

    } else if (q1 == "D") {
      myMsg.innerHTML = "You may be a humble Twitter bot generated from a spreadsheet, but you have proven your impact in recent elections. Congratulations.";
      messagebg.style.backgroundImage = "url('images/twitterbot.png')";
      verdict.innerHTML = "Verdict: Robot";

    } else if (q1 == "E") {
      myMsg.innerHTML = "Little did you know that your CAPTCHA decoding of images serves a double purpose of unpaid transcription for Google services like Street View. There won’t be any repercussions for Google.";
      messagebg.style.backgroundImage = "url('images/streetview.png')";
      verdict.innerHTML = "Verdict: Unpaid Laborer";

    } else if (q1 == "F") {
      myMsg.innerHTML = "You’re not a robot, but a part of a group human operators employed at a sweatshop to decode CAPTCHAs on behalf of spammers. It’s time to seize the means of production!";
      messagebg.style.backgroundImage = "url('images/sweatshop.png')";
      verdict.innerHTML = "Verdict: Sweatshop Worker";

    } else {
      myMsg.innerHTML = "You may just be an innocent YouTube algorithm designed to harvest the most clicks, but your privileging of shock-value content has led many to believe the earth is flat. Amazing!";
      messagebg.style.backgroundImage = "url('images/fakespace.png')";
      verdict.innerHTML = "Verdict: Robot";
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

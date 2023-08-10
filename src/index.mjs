import "./styles.css";

//Set the data we are counting

var countDownDate = new Date("Jan 5,2024 15:37:25").getTime();
var x = setInterval(function(){
  //get todays date and time
  var now = new Date().getTime();
  //find the distance btw now and countdown data
  var distance = countDownDate - now;

  //ime calclation for days ,hours,monutes and second
  var days = Math.floor(distance/(24*60*60*1000));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 *60*60))/(1000*60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //display the result
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  //if count down is over , clear interval
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
},1000)
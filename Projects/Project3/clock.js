const clock = document.getElementById('hlw');

//setInterval() has two parameters - function , timeinterval(millisec)
//1000 -> 1sec .Syntax - setInterval(function() {}, 1000)

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString())  // time was showing in console
  //.innerHTML(or .innerText) is used to add (text or) content in web page.
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

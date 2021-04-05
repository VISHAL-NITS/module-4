

(function(Window){


var speakWord = "Hello";
var helloSpeaker = new Object();


 helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

this.helloSpeaker=helloSpeaker;
})(Window);


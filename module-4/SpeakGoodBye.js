
( function(Window){
var speakWord = "Good Bye";
var byeSpeaker = new Object();

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
this.byeSpeaker = byeSpeaker;


})(Window);

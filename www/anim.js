  /*var colour = 0;
  var hd = setInterval(colorate, 30); 
    function colorate(){
      document.getElementById("toColorate").style.backgroundColor = "hsla("+colour+", 100%, 50%, 0.75)";
      colour= colour+1;
    }*/
function menu(){
var li = document.getElementsByTagName("");
var bouton = document.getElementsByClassName('headerIcon');
var i=0;
while(i<4){
    var ul = document.getElementsByClassName('menuItem')[i];
    if(ul.style.display=="none"){
        ul.style.display="block";
        ul.style.backgroundColor="#0d0e09e8";
        ul.style.margin="15px";   
        ul.style.padding="15px";
        ul.style.padding="15px";
        //li.style.display="block";
    }else{
        ul.style.display="none";
    }
    i++;     
}
};

value = 0; 
    function autoScroll() {
  var id = setInterval(scrollNow, 50);
  function scrollNow() {
    if(value!=100){
      value = value+10;
      document.getElementById('slide1').style.height = (100-value)+"vh";
    } 
    if (value>41) {
      document.getElementById('logo').style.opacity = 0;
    }
  }
}
/*
if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}
var id = setInterval(scroll, 20);
function scroll() {
  var nav = document.getElementsByClassName("main-nav")
  var y = window.scrollY;
  
  if (y>1000){
    var.style.position = 'fixed';
}
}*/
  var pos=0;
  var x = 0.1;
  var compt = 0;
  function action(direction){
  var id = setInterval(turn, 20);
  compt++;
    function turn() {
      x = x+direction/2;
      if (x<0) x=0;
      else pos = pos + x;
      /*if (direction>0){
        x = x+direction;
        pos = pos-x;
      }
      else{
        if (x<=0){
          x=0;
        }
        else{
          x = x+direction;
          pos = pos-x;
        }
      }*/
      // Code for Safari
      document.getElementById("logo").style.WebkitTransform = "rotate("+pos+"deg)"; 
      // Code for IE9
      document.getElementById("logo").style.msTransform = "rotate("+pos+"deg)"; 
      // Standard syntax
      document.getElementById("logo").style.transform = "rotate("+pos+"deg)"; 
  }
}
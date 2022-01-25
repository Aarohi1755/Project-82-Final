var mouseEvent = "empty";
var lp_of_x, lp_of_y;
var canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", Mymousedown);
function Mymousedown(e){
 color = document.getElementById("incolor").value;
 width_of_line = document.getElementById("inwidth").value;
 radius = document.getElementById("inradius").value;  
 mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", Mymouseup);
function Mymouseup(e){
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", Mymouseleave);
function Mymouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", Mymousemove);
function Mymousemove(e){
    cp_of_x = e.clientX - canvas.offsetLeft;
    cp_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        console.log("Current position of x and y coordinates = ");
console.log("x = " + cp_of_x + "y = " + cp_of_y);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      ctx.arc(cp_of_x, cp_of_y, radius, 0, 2*Math.PI);
      ctx.stroke();
    }
  
    lp_of_x = cp_of_x;
    lp_of_y = cp_of_y;
    
}

function clear_area(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
}
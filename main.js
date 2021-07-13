canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_pos_x,last_pos_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_pos_x=e.clientX - canvas.offsetLeft;
current_pos_y=e.clientY - canvas.offsetTop;
if (mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=1;
    console.log("last position of X and Y");
    console.log("x="+last_pos_x+"y="+last_pos_y);
    ctx.moveTo(last_pos_x,last_pos_y);
    console.log("current position of X and Y");
    console.log("x="+current_pos_x+"y="+current_pos_y);
    ctx.lineTo(current_pos_x,current_pos_y);
    ctx.stroke();
}
last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
}
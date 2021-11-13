var mouseEvent = "empty";
var last_X,last_Y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
width_of_line = 1;
color = "black";

screen_width = screen.width;
screen_new_width = screen_width - 70;
screen_new_height = screen.height - 300;

if(screen_width<992){
    screen.width = screen_new_width;
    screen.height = screen_new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
    mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e){
    mouseEvent= "mouseleave";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_X, last_Y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();


    }
    last_X = current_position_of_mouse_x;
    last_Y = current_position_of_mouse_y;
}

function clearcanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

canvas.addEventListener("touchstart", My_touch_start);
function My_touch_start(e){
    var color =  document.getElementById("color"). value;
    var width_of_line = document.getElementById("width_of_line").value;
    last_X = e.touches[0].clientX - canvas.offsetLeft;
    last_Y = e.touches[0].clienty - canvas.offsetTop;
}
canvas.addEventListener("touchmove", draw_when_touch);
function draw_when_touch(e){
    console.log("my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_X, last_Y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_X = current_position_of_touch_x;
    last_Y = current_position_of_touch_y;


}
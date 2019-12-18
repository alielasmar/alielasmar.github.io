var lost = 0;
draw= function() {
if (lost===0){
background(255, 255, 255);
noStroke();
fill(255, 224, 189);//skin color
ellipse (mouseX,mouseY,83,100); //head
fill(255, 255, 255);
arc(mouseX-37,mouseY +42, 22, 43, 20, 458);//left chisel
arc(mouseX+35, mouseY+43, 22, 46, -106, 265);//right chisel
fill(102, 47, 47);
rect(mouseX+-31,mouseY+-51,62,15,1);//hair
ellipse(mouseX+19,mouseY+-11,8,8);//left eye
ellipse(mouseX+-19,mouseY+-11,8,8);//right eye
fill(255, 224, 189);//skin color
stroke(0, 0, 0);
bezier(mouseX,mouseY,mouseX+13,mouseY+24,mouseX-10,mouseY+20,mouseX-3,mouseY+19);
noStroke();
fill(250, 250, 250);//teeth
stroke(0, 0, 0);
arc(mouseX,mouseY+25,30,13,1,169);//mouth
noStroke();
fill(0, 0, 0);
ellipse (mouseX+1,mouseY+-61,70,51);//hat


}
if(lost===1){
    background(255, 255, 255);
    textSize(30);
    text("out of bounds!",125,200);
    textSize(20);
    text("restart to try again",130,279);
}
};
mouseMoved = function() {
    if(mouseX < 32){
      lost = 1;
      
    }
      if(mouseX > 358){
        lost = 1;
    }
    if(mouseY < 82){
    lost = 1;    
}
    if(mouseY > 352){
    lost = 1;    
}
};
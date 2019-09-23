var headX =100;
var headY =100;
noStroke();
fill(255, 224, 189);//skin color
ellipse (headX,headY,83,100); //head
fill(255, 255, 255);
arc(headX-37,headY +42, 22, 43, 20, 458);//left chisel
arc(headX+36, headY+44, 22, 46, -106, 265);//right chisel
fill(102, 47, 47);
rect(headX+-31,headY+-51,62,15,1);//hair
ellipse(headX+19,headY+-11,8,8);//left eye
ellipse(headX+-19,headY+-11,8,8);//right eye
fill(255, 224, 189);//skin color
stroke(0, 0, 0);
bezier(headX,headY,headX+13,headY+24,headX-10,headY+20,headX-3,headY+19);
noStroke();
fill(250, 250, 250);//teeth
stroke(0, 0, 0);
arc(headX,headY+25,30,13,1,169);//mouth
noStroke();
fill(0, 0, 0);
ellipse (headX+1,headY+-61,70,51);//hat
triangle(headX-31,headY-63,headX-31,headY-38,headX-8,headY-36);//right side of hat
triangle(114,66,133,66,124,24);//left side of hat


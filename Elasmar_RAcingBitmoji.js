var headX =0;
var headY =100;
var bitmojiSpeed = random(1,5);
var bunnySpeed = random(1,5);
var bunnyX = 0;
var bunnyY=100;
var frogX = 0;
var frogSpeed = random(1,5);
draw = function() {
    background(255,255,255);
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
    triangle(headX-14,headY-37,headX+33,headY-37,headX+24,headY-76);//left side of hat

    headX = headX+bitmojiSpeed;
   
         //bunny
    fill(255, 255, 255);
    stroke(0, 0, 0);
    ellipse(bunnyX+50, bunnyY-30, 60, 120);  // left ear
    ellipse(bunnyX+140, bunnyY-30, 60, 120);  // right ear

    ellipse(bunnyX+100, bunnyY+70, 151, 150);    // face

    fill(0, 0, 0);
    ellipse(bunnyX+70, bunnyY+53, 10, 10);  // left eye
    ellipse(bunnyX+130, bunnyY+53, 10, 10);  // right eye

    line(bunnyX+50, bunnyY+100, bunnyX+150, bunnyY+100);   // mouth

    noFill();
    rect(bunnyX+85, bunnyY+100, 15, 10); // left tooth
    rect(bunnyX+100, bunnyY+100, 15, 10); // right tooth
bunnyX=bunnyX+bunnySpeed;

    //frog
    var x = 200;
    var y = 355;

    noStroke();
    fill(30, 204, 91); // a nice froggy green!

    ellipse(frogX+98, y, 200, 100); // face
    ellipse(frogX + 50, y - 50, 40, 40); // left eye socket
    ellipse(frogX + 150, y - 50, 40, 40); // right eye socket

    fill(255, 255, 255); // for the whites of the eyes!
    ellipse(frogX + 50, y - 50, 30, 30); // left eyeball
    ellipse(frogX + 150, y - 50, 30, 30); // right eyeball
    frogX = frogX+frogSpeed;


    

};



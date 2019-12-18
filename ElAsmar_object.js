var drawHead = function(headX,headY,H){ //draws bitmoji head
 noStroke();
fill(255, 224, 189);//skin color
ellipse (headX - 1/19 * H,headY,83,100); //head
fill(255, 255, 255);
fill(102, 47, 47);
rect(headX+-31 - 1/19 * H,headY+-51- 1/19 * H,62,15,1);//hair
ellipse(headX+19 - 1/19 * H,headY+-11- 1/19 * H,8,8);//left eye
ellipse(headX+-19 - 1/19 * H,headY+-11- 1/19 * H,8,8);//right eye
fill(255, 224, 189);//skin color
stroke(0, 0, 0);
bezier(headX - 1/19 * H,headY- 1/19 * H,headX+13 - 1/19 * H,headY+24- 1/19 * H,headX-10 - 1/19 * H,headY+20- 1/19 * H,headX-3 - 1/19 * H,headY+19- 1/19 * H);
noStroke();
fill(250, 250, 250);//teeth
stroke(0, 0, 0);
arc(headX - 1/19 * H,headY+25- 1/19 * H,30,13,1,169);//mouth
noStroke();
fill(0, 0, 0);
ellipse (headX+1 - 1/19 * H,headY+-61- 1/19 * H,70,51);//hat
};
var drawBody = function(headX,headY,tf,r,g,b){ // true or false and color
this.tf = tf;
fill(r, g, b);
rect(headX+64,headY+150,87,36);
triangle(headX+61,headY+133,headX+99,headY+151,headX+64,headY+150);
triangle(headX+152,headY+136,headX+151,headY+151,headX+115,headY+150);
fill(0, 0, 0);
if(tf===true){
    text("A.E",headX+125,headY+178);
}
};
drawHead(100,100,-88);
drawBody(-1,-1,true,10,40,50);
drawHead(255,100,-88);
drawBody(153,-1,false,254,40,50);


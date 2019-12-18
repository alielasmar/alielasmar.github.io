var currentScene = 1;
var currentCharacter;
var Color = color(10, 22, 250);


var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(255, 153, 0);
    this.onClick = config.onClick || function() {};
}; 


Button.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};


Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var traceLetter = function () {
    background(255, 191, 0);
    fill(255,255,255);
    textSize(250);
    text(currentCharacter, 15,0);
};


var eLetter = new Button({
    x: 239,
    y: 302,
    label: "     Trace E",
    onClick: function() {
        currentScene = 3;
        currentCharacter = "E";
        traceLetter();
    }
}); 
var aLetter = new Button({
    x: 13,
    y: 302,
    label: "     Trace A",
    onClick: function() {
        currentScene = 2;
        currentCharacter = "A";
        traceLetter();
    }
}); 






var greenButton = new Button ({
    x: 250,
    y: 250,
    width : 130,
    height : 55,
    color: color(0, 196, 29),
    label: "GREEN",
    onClick: function() {
        Color = color(0, 196, 29);
    }
}); 



var redButton = new Button ({
    x: 250,
    y: 150,
    width : 130,
    height : 55,
    color: color(255, 0, 0),
    label: "RED",
    onClick: function() {
        Color = color(255, 0, 0);
    }
}); 

var blueButton = new Button ({
    x: 250,
    y: 50,
    width : 130,
    height : 55,
    color: color(4, 0, 255),
        label: "Blue",
    onClick: function() {
        Color = color(0, 34, 255);
    }
}); 



var buttonClear = new Button ({
    x: 29,
    y: 330,
    width : 72,
    height : 46,
    color: color(255, 255, 255),
    label: "Clear",
    onClick: function() {
        traceLetter();
    }
}); 


var drawScene1 = function() {
    background(255, 0, 0);
    fill(255, 255, 255);
    textSize(20);
    text("Choose a letter to trace!", 95, 226);
    textSize(30);
    text("Ali's Educational App", 62, 26);
    aLetter.draw();
    eLetter.draw();

   
var drawHead = function(headX,headY,headH){
noStroke();
fill(255, 224, 189);//skin color
ellipse (headX,headY,83,100); //head
fill(255, 255, 255);
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

};


drawHead(189,155);
};


mouseClicked = function() {
    
    if (currentScene === 1) {
        aLetter.handleMouseClick();
        eLetter.handleMouseClick();
        
    } else {
        blueButton.handleMouseClick();   
        redButton.handleMouseClick();   
        greenButton.handleMouseClick();
        buttonClear.handleMouseClick();
    }
    
}; 


draw = function() {
    if (currentScene === 1) {
        drawScene1();
    }else {
        blueButton.draw();
        redButton.draw();
        greenButton.draw();
        buttonClear.draw();
        noStroke();
        fill(Color);
        if (mouseIsPressed) {
            ellipse(mouseX,mouseY,20,20);   
        }
    }
    
}; 

//Katharine LoScalzo
//3 November 2016

/*
Build a sound sequencer/instrument using animated objects. There should be at least three types of sounds.
*/

var ballArray = []; //array declaration
var clickMouse;
var leftSound;
var rightSound;
var r = 0;
var g = 100;
var b = 0;

function preload() {
    leftSound = loadSound("assets/dinggL.wav");
    rightSound = loadSound("assets/rightD.wav");
    clickMouse = loadSound("assets/clickMe.wav");
}

function setup(r, g, b) {
    createCanvas(700, 600);
    background(152, 251, 152);

    var r = 0;
    var g = 100;
    var b = 0;

    this.ree = r;
    this.gee = g;
    this.bee = b;

    textSize(50);
    fill(255,0,0);
    strokeWeight(1.5);
    text("XMAS CHIMES", 100, height / 2);
    
    fill(0,100,0);
    line(100,height/2+20,605,height/2+20);

    for (var i = 0; i < 3; i++) {
        ballArray[i] = new Ball(random(width), random(height), i + 1, this.ree, this.gee, this.bee, leftSound, rightSound);
    }
}

function draw() {
    background(152, 251, 152);
    textSize(50);
    fill(255,0,0);
    strokeWeight(1.5);
    text("CHRISTMAS CHIMES", 100, height / 2);
    
    fill(0,100,0);
    line(100,height/2+20,605,height/2+20);
    
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].animate();
        ballArray[i].display();
    }
}

function mouseClicked() {


    var dynamicBall = new Ball(mouseX, mouseY, random(2, 4), r, g, b, leftSound, rightSound);
    ballArray.push(dynamicBall); //push property dynamically adds new object to end of array
    clickMouse.play();
}

function Ball(xPos, yPos, velocity, r, g, b, leftSound, rightSound) { //xPos, yPos, velocity, r, g, b
    this.x = xPos;
    this.y = yPos;
    this.vel = velocity;
    this.ree = r;
    this.gee = g;
    this.bee = b;
    this.lsound = leftSound;
    this.rsound = rightSound;

    this.animate = function () {
        //move ball left and right of screen
        this.x += this.vel;

        if (this.x >= width) {
            this.lsound.play();
            this.vel = -this.vel;
            this.ree = 255;
            this.gee = 0;
            this.bee = 0;
            fill(this.ree, this.gee, this.bee);
        }

        if (this.x <= 0) {
            this.rsound.play();
            this.vel = -this.vel;
            this.ree = 255;
            this.gee = 255;
            this.bee = 0;
            fill(this.ree, this.gee, this.bee);
        }
    }

    this.display = function () {
        for (var i = 0; i < ballArray.length; i++) {
            ellipse(this.x, this.y, 30, 30, random(this.ree), random(this.gee), random(this.bee));
        }
        fill(this.ree, this.gee, this.bee); //color
    }
};

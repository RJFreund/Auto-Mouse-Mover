var robot = require("robotjs");

var origMousePosition = robot.getMousePos();
var newMousePosition = { x: null, y: null};
var hasMovedLeft = false;
var recheckTime = 10000;

/*
setInterval(function(){
    console.log("hi");
    var currentMousePosition = robot.getMousePos();
    console.dir(currentMousePosition);
}, 5000);
*/

var interval = setInterval(function(){
    var currentMousePosition = robot.getMousePos();
    if (origMousePosition.x === currentMousePosition.x &&
        origMousePosition.y === currentMousePosition.y){
        if (hasMovedLeft){
            newMousePosition.x = currentMousePosition.x+1;
            newMousePosition.y = currentMousePosition.y;
            hasMovedLeft = false;
        } else {
            newMousePosition.x = currentMousePosition.x-1;
            newMousePosition.y = currentMousePosition.y;
            hasMovedLeft = true;
        }
        robot.moveMouse(newMousePosition.x, newMousePosition.y);
        console.log("mouse moved to x:" + newMousePosition.x + ", y:" + newMousePosition.y + " after " + recheckTime + " ms");
    }
    origMousePosition = robot.getMousePos();
}, recheckTime);
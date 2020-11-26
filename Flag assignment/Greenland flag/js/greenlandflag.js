"use strict"

const $ = function (myCanvas) { return document.getElementById(myCanvas); };

const greenlandFlag = function() {
    let canvas = $(`myCanvas`);
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
       

        ctx.beginPath(); 
        ctx.arc(160, 120, 80, 0, Math.PI, true);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();

        ctx.beginPath(); 
        ctx.arc(160, 120, 80, 0, Math.PI, false);
        ctx.closePath();        
        ctx.strokeStyle = "black";
        ctx.stroke();

        
        ctx.beginPath();
        ctx.fillRect(0, 200, 400, 200);
        ctx.fillStyle = 'red';
        ctx.fill(); 

    }
}

        window.addEventListener('load', greenlandFlag);
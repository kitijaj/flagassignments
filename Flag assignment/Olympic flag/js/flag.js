"use strict"

const $ = function (myCanvas) { return document.getElementById(myCanvas); };

const flagShape = function() {
    let canvas = $(`myCanvas`);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        ctx.beginPath();                // begin new path
        ctx.arc(150, 160, 50, 0, Math.PI * 2, true);
        ctx.strokeStyle = '#FFD700';        // stroke color
        ctx.lineWidth = 6;
        ctx.stroke();                   // draw circumference

        ctx.beginPath();                // begin new path
        ctx.arc(90, 100, 50, 0, Math.PI * 2, true);
        ctx.strokeStyle = '#1E90FF';        // stroke color
        ctx.stroke();                   // draw circumference

        ctx.beginPath();                // begin new path
        ctx.arc(200, 100, 50, 0, Math.PI * 2, true);
        ctx.strokeStyle = '#000';        // stroke color
        ctx.stroke();                   // draw circumference

        ctx.beginPath();                // begin new path
        ctx.arc(260, 160, 50, 0, Math.PI * 2, true);
        ctx.strokeStyle = '#32CD32';        // stroke color
        ctx.stroke();                   // draw circumference

        ctx.beginPath();                // begin new path
        ctx.arc(310, 100, 50, 0, Math.PI * 2, true);
        ctx.strokeStyle = 'red';        // stroke color
        ctx.stroke();                   // draw circumference
    }
}

window.addEventListener('load', flagShape);
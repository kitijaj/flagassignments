"use stickt"

const $ = function (myCanvas) { return document.getElementById(myCanvas); };

const denmarkFlag = function() {
    let canvas = $(`myCanvas`);
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = "red";         
        ctx.beginPath();   
        ctx.fillRect(20, 10, 60, 60);  

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.fillRect(100, 10, 105, 60);

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.fillRect(20, 90, 60, 60);

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.fillRect(100, 90, 105, 60);
        
    }
}

        window.addEventListener('load', denmarkFlag);
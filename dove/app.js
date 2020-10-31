import {
    WaveGroup
}from './wavegroup.js'

class canvas{
    constructor(){
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), { 
            once: false,
            passive: false,
            capture: false,});
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight)
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx)
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
    //wave canvas
    new canvas();
    
    //dove bubble
    const dove = document.querySelector(".dove");
    dove.addEventListener("mousemove", function(e){
    let bubble = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    bubble.style.top = y +Math.random()*250 +"px";
    bubble.style.left = x +Math.random()*250 +"px";
    let size = Math.random()*100;
    bubble.style.width = 10 + size + "px";
    bubble.style.height = 10 + size + "px";
    dove.appendChild(bubble);
    setTimeout(function(){
        bubble.remove();
    }, 3000);
    });
}
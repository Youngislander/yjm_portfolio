var controller = new ScrollMagic.Controller();

var tween1 = TweenMax.to('.intro_box', 0.1, {
    rotationX:90,
    transformOrigin:"center"
    //x:100,
});

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1000,
    duration:100

})
.setTween(tween1)
.addTo(controller)

var tween1 = TweenMax.to('.intro_box', 0.1, {
    rotationX:180,
    transformOrigin:"center"
    //x:100,
});

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1400,
    duration:100

})
.setTween(tween1)
.addTo(controller)

var tween1 = TweenMax.to('.intro_box', 0.1, {
    rotationX:270,
    transformOrigin:"center"
    //x:100,
});

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1800,
    duration:100

})
.setTween(tween1)
.addTo(controller)


var icon1 = TweenMax.to('.cd', 0.1, {
    opacity:0  
    //x:100,
});

var icon_scene1 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1000,
    duration:100

})
.setTween(icon1)
.addTo(controller)

var icon2 = TweenMax.to('.pd', 0.1, {
    opacity:1  
    //x:100,
});

var icon_scene2 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1010,
    duration:100

})
.setTween(icon2)
.addTo(controller)

var icon2_2 = TweenMax.to('.pd', 0.1, {
    opacity:0
});

var icon_scene2_2 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1380,
    duration:100

})
.setTween(icon2_2)
.addTo(controller)

var icon3 = TweenMax.to('.kg', 0.1, {
    opacity:1,
});

var icon_scene3 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1400,
    duration:100

})
.setTween(icon3)
.addTo(controller)


var icon3_2 = TweenMax.to('.kg', 0.1, {
    opacity:0,
});

var icon_scene3_2 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1795,
    duration:100

})
.setTween(icon3_2)
.addTo(controller)

var icon4 = TweenMax.to('.rs', 0.1, {
    opacity:1,
});

var icon_scene4 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 1800,
    duration:100

})
.setTween(icon4)
.addTo(controller)

var icon4 = TweenMax.to('.intro', 0.1, {
});

var icon_scene4 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onEnter', 
    offset: 2200,
    duration:50

})
.setTween(icon4)
.addTo(controller)


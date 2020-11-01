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





var tween5_1 = TweenMax.to('.photo', 0.5, {
    top:-1000,
    });
var tween5_2 = TweenMax.to('.photo2', 0.5, {
    rotation:60,
    left:-700,
    top:-2000,
    });
 var tween5_3 = TweenMax.to('.kodak .content_left', 0.5, {
     opacity:1
     });
// var tween5_4 = TweenMax.to('.kodak .content_left', 0.5, {
//     y:-800,
//     });

var long_img = new ScrollMagic.Scene({
    triggerElement:".content.kodak",
    offset: 50,
    duration: 2000
    }).setTween(tween5_1).addTo(controller);

var long_img = new ScrollMagic.Scene({
triggerElement:".content.kodak",
offset: 200,
duration: 2000
}).setTween(tween5_2).addTo(controller);


var kodak_intro = new ScrollMagic.Scene({
     triggerElement:".kodak .content_right",
     offset: 50
     }).setTween(tween5_3).addTo(controller);

// var kodak_intro2 = new ScrollMagic.Scene({
//     triggerElement:".content.kodak",
//     offset: 1300
//     }).setTween(tween5_4).addTo(controller);
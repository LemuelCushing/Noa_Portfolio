console.log("x")

jQuery.easing.def = "easeOutQuad";

let handlerIn = function () {
    console.log(self)
}
let handlerOut = function () {
    console.log("out")
}

const buttons = $(".entryBtn")
buttons.hover(function () {
            $(this).stop(true, false).animate({
                opacity: 0.5
              });
            $("#introQ").stop(true, false).animate({
                fontSize: 	
                Math.floor( Math.random() * 250 )+150+"%",
                easing: 'easeInBounce'
            });
        },
        function () { 
            $(this).stop(true, false).animate({opacity:1}) 
            $("#introQ").stop(true, false).animate({
                fontSize: Math.floor( Math.random() * 250 )+ 150 +"%",
                easing: 'easeOutElastic'
                });
            })
buttons.click(function(){
    window.location.href = "main-tl.html";
})
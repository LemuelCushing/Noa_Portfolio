console.log("x")

let rand = function (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function randomGray(min,max) {
    // var value = Math.random() * 0xFF | 0;
    // var grayscale = (value << 16) | (value << 8) | value;
    // var color = '#' + grayscale.toString(16);
    let color = 'hsl(0,0%,'+rand(min,max)+'%)' 
    return color    
}

const buttons = $(".entryBtn")
buttons.hover(function () {
            $(this).stop(true, false).animate({
                backgroundColor: randomGray(20,80)
              });
            $("#introQ").stop(true, false).animate({
                fontSize: 	
                rand(150,400)+"%",
                easing: 'easeInBounce'
            });
        },
        function () { 
            $(this).stop(true, false).animate({
                backgroundColor: randomGray(50,100)
            }) 
            $("#introQ").stop(true, false).animate({
                fontSize: rand(150,400) +"%",
                easing: 'easeOutElastic'
                });
            })
buttons.click(function(){
    window.location.href = "main-tl.html";
})
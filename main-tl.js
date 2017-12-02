// $('#text').height(function(index, height) {
//     var current_height = $(this).height();
//     console.log('current_height: ', current_height);
//     var new_height = window.innerHeight - $(this).offset().top - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom'));
//     console.log('new_height: ', new_height);
//     if (new_height > current_height) return new_height;
// });

$('#text').height($('#graphics').outerHeight(false));
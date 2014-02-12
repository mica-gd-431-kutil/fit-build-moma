'use strict';

function displayContent(item, target){
    console.log(item, target);
    $.pjax({
        url: target,
        container: '#content .info'
    });
    $('#content .info')
        .on('pjax:end', function() {
            console.log('end');
            $(item).parent().attr('data-state', 'is_active');
        });
}

$(function () {
    $('body').on('click', 'a', function (e) {
        e.preventDefault();
        var target = $(this).attr('href'),
            animateContent = window.setTimeout(displayContent, 3000, this, target);
        $(this).parent().attr('data-state', 'is_loading');


    });
});

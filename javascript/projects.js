$('#filter').click(function(){
    const accordion = $(this).find('.accordion');
    accordion.toggleClass('active');
});




$('.project').click(function(){
    $('.main').hide();
    $('#project-info').show();
});


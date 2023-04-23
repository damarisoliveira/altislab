$(document).ready(function () {
    $('.sidebar-ul .sidebar-option').click(function(){
        $('.sidebar-option').removeClass("active");
        $(this).addClass("active");
    });

    $('.sidebar-option').click(function(){
        var page = $(this).data('page');
        $('.sidebar-option').removeClass('active');
        $(this).addClass('active');
        $('.main').hide();
        $('#' + page).show();
    });


});

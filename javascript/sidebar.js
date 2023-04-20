//criar logica de active no menu com jquery
$(document).ready(function () {
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

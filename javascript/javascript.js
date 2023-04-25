$(document).ready(function() {
    paginate('.pagination', '.last-requests-card li', 3);
    paginate('.pagination-collaborators', '.new-collaborators table tbody tr', 4);
    

    $('.last-requests-card li').each(function(index, element) {
        var status = $(element).find('.card-info-status').text();

        if(status == 'Atendido'){
            $(element).find('.card-info-status').css('background-color', '#0E800D');
        }
        else if(status == 'Pendente'){
            $(element).find('.card-info-status').css('background-color', '#3E5055');
        }
        else if(status == 'Negado'){
            $(element).find('.card-info-status').css('background-color', '#CC1414');

        }
       
    });

    const sidebar = $("#sidebar");
    const main = $("main");
    const sidebarOptions = $(".sidebar-option");
    const sidebarUser = $(".sidebar-user");
    const sidebarUl = $("#sidebar-ul");


    $(".sidebar-iconbars").click(function() {
        if (sidebar.width() == 300) {
            // recolhe a barra lateral
            sidebar.animate({width: "60px"});
            main.animate({width: '100%', marginLeft: '60px'});
            sidebarOptions.each(function() {
                $(this).find("small").hide();
            });
            sidebarUser.hide();
            sidebarUl.css({ padding: '70px 0 0 0' });
        } else {
            // expande a barra lateral
            if ($(window).width() < 1000) {
                sidebar.css({ zIndex: '1' });
            } else {
                main.animate({width: 'calc(100% - 300px)', marginLeft: '300px'});
                sidebarUl.css({ padding: '25px 0' });
            }
            sidebarOptions.css({ display: 'flex' });
            sidebarUser.css({ display: 'flex', justifyContent: 'center' });
            sidebar.animate({width: "300px"});
            sidebarOptions.find("small").show();
            sidebarUser.show();
        }
    });


    

    $(".card-info h4").hover(function() {
        if($(window).width() < 768){
            var time = $(this).attr("data-time");
            $(this).append('<span class="badge">' + time + '</span>');
        }
    }, function() {
        $(this).find('.badge').remove();
    });

});

function paginate(paginationContainer, itemListContainer, itemsPerPage) {
    function showPage(pageNumber) {
        var startIndex = (pageNumber - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage - 1;
            
        $(itemListContainer).each(function(index) {
            if (index >= startIndex && index <= endIndex) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    var numberOfItems = $(itemListContainer).length;
    var numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

    $('<a href="#" class="prev"></a>').text('<').appendTo(paginationContainer);
    for (var i = 1; i <= numberOfPages; i++) {
        $('<a href="#"></a>').text(i).on('click', function() {
            showPage(parseInt($(this).text()));
            $(this).addClass('active').siblings().removeClass('active');
        }).appendTo(paginationContainer);
    }
    $('<a href="#" class="next"></a>').text('>').appendTo(paginationContainer);
            
    showPage(1);

    $(paginationContainer + ' a.page:first').addClass('active');
    $(paginationContainer + ' a').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('prev')) {
            var currentPage = parseInt($(paginationContainer + ' .active').text());
            if (currentPage > 1) {
                showPage(currentPage - 1);
                $(paginationContainer + ' .active').removeClass('active').prev().addClass('active');
            }
        } else if ($(this).hasClass('next')) {
            var currentPage = parseInt($(paginationContainer + ' .active').text());
            if (currentPage < numberOfPages) {
                showPage(currentPage + 1);
                $(paginationContainer + ' .active').removeClass('active').next().addClass('active');
            }
        } else {
            showPage(parseInt($(this).text()));
            $(paginationContainer + ' .active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $(paginationContainer + ' a:nth-child(2)').addClass('active');
}

$('.card').click(function() {
    const accordion = $(this).find('.accordion');
    $('.accordion').not(accordion).removeClass('active');
    accordion.toggleClass('active');
});


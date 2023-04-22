$(document).ready(function() {
    paginate('.pagination', '.last-requests-card li', 3);
    paginate('.pagination-collaborators', '.new-collaborators-table tbody tr', 4);
    paginate('.pagination-projects', '#container .project', 9);

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


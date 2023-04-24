$(document).ready(function() {
    for (var i = 1; i <= 18; i++) {
        $('.container').append(
            '<a class="project" href="project-info.html">' +
                '<h3>Projeto' + i +'</h3>' +
                '<small>Cliente: Cliente1</small>' +
                '<small>Data de início: 12/11/2021</small>' +
                '<div>' +
                    '<small>Data de conclusão prevista: 12/11/2023</small>' +
                    '<div class="project-collaborators">' +
                        '<i class="fas fa-user"></i>' +
                        '<small>8</small>' +
                    '</div>' +
                '</div>' +
            '</a>'
        );
    }

    paginate('.pagination-projects', '.container .project', 9);
});


$('#filter').click(function(event) {
    const accordion = $(this).find('.accordion');
    const isClicked = $(event.target).closest('.accordion').length;

    if (!isClicked) {
        accordion.toggleClass('active');
    }
});

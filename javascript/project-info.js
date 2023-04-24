$(document).ready(function() {
    for (var i = 1; i <= 12; i++) {
        $('.container').append(
            '<div class="collaborator">' +
                '<div class="collaborator-img">' +
                    '<i class="fas fa-user"></i>' +
                '</div>' +
                '<div class="collaborator-info">' +
                    '<h3>Fulano ' + i + '</h3>' +
                    '<small>Data de entrada: 03/08/2021</small>' +
                    '<small>Cargo: Analista UX</small>' +
                    '<small>Expediente: 12hrs às 18hrs</small>' +
            '</div>' +
            '</div>'
        );
    }

    paginate('.pagination-collaborator', '.container .collaborator', 6);
});

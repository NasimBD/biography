$(function () {
    $('.mainTxt').not('[id="story"]').hide();


    $('#menu').find('button').on('click', function () {
        let id = $(this).attr('id').split('-')[0];
        let showElem = $('#' + id);
        console.log(id, showElem)
        $('.mainTxt').not(showElem).hide(10);
        showElem.show(10);
    })
})
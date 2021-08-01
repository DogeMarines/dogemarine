$(document).ready(function () {
    $('.cadd').on('click', function (e) {


    });
    $('body').on('click', function () {
        if ($("#menu").is(':checked')) {
            $('body').addClass("lock-body")
        }
        else {
            $('body').removeClass("lock-body")
        }
    })
    $(window).on('resize', function () {
        screen = $(window.innerWidth)
        console.log($("#menu").prop('checked'))
        if ($("#menu").is(':checked') && screen[0] > 790) {
            $("#menu").prop('checked', false)
            $('body').removeClass("lock-body")
        }
    })
})
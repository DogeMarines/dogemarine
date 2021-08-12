$(document).ready(function () {
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
        if ($("#menu").is(':checked') && screen[0] > 790) {
            $("#menu").prop('checked', false)
            $('body').removeClass("lock-body")
        }
    })
    $('.nav-m').on('click', 'li', function () {
        if ($("#menu").is(':checked')) {
            $("#menu").prop('checked', false)
            $('body').removeClass("lock-body")
        }
    })



    var numberOfDays = 3;
    var today = new Date();
    var start = getNextStartDate(today);
    var end = getNextEndDate(today);

    var timer = setInterval(function () {
        var differenceTime, dd, hh, mm, ss, str;
        var now = new Date();
        if (now >= end) {
            start = getNextStartDate(now);
            end = getNextEndDate(now);
        } else {
            differenceTime = end - now;

            dd = parseInt(differenceTime / (1000 * 60 * 60 * 24));
            hh = parseInt(differenceTime / (60 * 60 * 1000)) % 24;
            mm = parseInt(differenceTime / (1000 * 60)) % 60;
            ss = parseInt(differenceTime / 1000) % 60;

            document.querySelector('.days').innerHTML = format(dd);
            document.querySelector('.hours').innerHTML = format(hh);
            document.querySelector('.minutes').innerHTML = format(mm);
            document.querySelector('.seconds').innerHTML = format(ss);
        }
    }, 1000);

    function getNextEndDate(fromDate) {
        return new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate() + numberOfDays);
    }

    function getNextStartDate(currentDate) {
        var currentDay = currentDate.getDate();
        var index = Math.ceil(currentDay / 3);
        var nextStartDay = 1 + numberOfDays * index
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), nextStartDay);
    }

    function format(num) {
        return (9 < num) ? num : "0" + num;
    };
})
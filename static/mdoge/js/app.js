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
    // let day_picker = parseInt(40)
    // setInterval(changeDate, 1000)
    // function changeDate() {

    //     let launchDate = new Date("Aug ,7, 2021 ,13:19:00")
    //     if (tick(launchDate)) {
    //         let newtime = launchDate.getMinutes() + 2
    //         launchDate.setMinutes(newtime)
    //         console.log(newtime)
    //         console.log(launchDate)

    //     }
    // }

    // console.log(changeDate())



    // function tick(launchDate) {
    //     // Get current time
    //     let now = new Date().getTime();
    //     // Get the difference in time to get time left until reaches 0
    //     let t = launchDate - now;

    //     // Check if time is above 0
    //     let timezone = []
    //     let spans = []
    //     let days = Math.floor(t / (1000 * 60 * 60 * 24));
    //     let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    //     let secs = Math.floor((t % (1000 * 60)) / 1000);


    //     if (t > 0) {
    //         // Setup Days, hours, seconds and minutes
    //         // Algorithm to calculate days...
    //         // prefix any number below 10 with a "0" E.g. 1 = 01
    //         if (days < 10) { days = "0" + days; }
    //         timezone.push(days);
    //         // Algorithm to calculate hours
    //         if (hours < 10) { hours = "0" + hours; }
    //         timezone.push(hours)
    //         // Algorithm to calculate minutes
    //         if (mins < 10) { mins = "0" + mins; }
    //         timezone.push(mins)

    //         // Algorithm to calc seconds
    //         if (secs < 10) { secs = "0" + secs; }
    //         timezone.push(secs)

    //         // Create Time String
    //         let time = `${days} : ${hours} : ${mins} : ${secs}`;

    //         // Set time on document
    //         timezone.map(function (value, index) {
    //             $('.countdown span').each(function (indexs, values) {
    //                 spans.push(values)
    //             })
    //             return $(spans).eq(index).html(value)
    //         })
    //     }
    //     // Setup Timer to tick every 1 second
    //     if (mins <= 0 && secs <= 0) {
    //         return true;
    //     }

    // }
})
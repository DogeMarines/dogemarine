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
    let launchDate = new Date("Aug 8, 2021 12:30:00").getTime();

    // Setup Timer to tick every 1 second
    let timer = setInterval(tick, 1000);

    function tick() {
        // Get current time
        let now = new Date().getTime();
        // Get the difference in time to get time left until reaches 0
        let t = launchDate - now;

        // Check if time is above 0
        let timezone = []
        let spans = []
        if (t > 0) {
            // Setup Days, hours, seconds and minutes
            // Algorithm to calculate days...
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            // prefix any number below 10 with a "0" E.g. 1 = 01
            if (days < 10) { days = "0" + days; }
            timezone.push(days);
            // Algorithm to calculate hours
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) { hours = "0" + hours; }
            timezone.push(hours)
            // Algorithm to calculate minutes
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            if (mins < 10) { mins = "0" + mins; }
            timezone.push(mins)

            // Algorithm to calc seconds
            let secs = Math.floor((t % (1000 * 60)) / 1000);
            if (secs < 10) { secs = "0" + secs; }
            timezone.push(secs)

            // Create Time String
            let time = `${days} : ${hours} : ${mins} : ${secs}`;

            // Set time on document
            timezone.map(function (value, index) {
                $('.countdown span').each(function (indexs, values) {
                    spans.push(values)
                })
                return $(spans).eq(index).html(value)
            })
        }
        return 
    }
})
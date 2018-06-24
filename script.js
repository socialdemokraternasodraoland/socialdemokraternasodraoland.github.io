var countDownDate = new Date("Sep 9, 2018 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    var seconds_txt, minutes_txt, hours_txt, days_txt;
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    if (days > 1) {
        days_txt = " dagar ";
        document.getElementById("klocka").innerHTML = "Tid till Valet: " + days + days_txt;
    } else if (days == 0) {
        days_txt = " dag ";
        if (seconds > 1) {
             seconds_txt = " sekunder ";
        } else {
            seconds_txt = " sekund ";
        }
        if (hours > 1) {
            hours_txt = " timmar ";
        } else {
            hours_txt = " timme ";
        }
        if (minutes > 1) {
            minutes_txt = " minuter ";
        } else {
            minutes_txt = " minut ";
        }
        document.getElementById("klocka").innerHTML = "Tid till Valet: " + days + days_txt + hours + hours_txt
    + minutes + minutes_txt + " och " + seconds + seconds_txt;
    } else if (days < 0) {
        document.getElementById("klocka").innerHTML = "";
    }
    
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
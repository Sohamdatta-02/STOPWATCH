var hr = 00;
var min = 00;
var sec = 00;
var ms = 00;

var timer = false;

setInterval("stopwatch()",10);

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML  = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("ms").innerHTML  = "00";
    hr  = 0;
    min = 0;
    sec = 0;
    ms  = 0;
}

function stopwatch(){
    

    if (timer == true){
        ms = ms + 1;
        if (ms == 100){
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60){
            min = min + 1;
            sec = 0;
        }
        if (min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var msString = ms;

        if (hr < 10){
            hrString = "0" + hrString;
        }
        if (min < 10){
            minString = "0" + minString;
        }
        if (sec < 10){
            secString = "0" + secString;
        }
        if (ms < 10){
            msString = "0" + msString;
        }

        document.getElementById("hr").innerHTML  = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("ms").innerHTML  = msString;
    }
}


let timer;
let timerStart;
var timeSpentOnSite = getTimeSpentOnSite();

function getTimeSpentOnSite() {
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
}

function startCounting() {
    timerStart = Date.now();
    timer = setInterval(function () {
        timeSpentOnSite = getTimeSpentOnSite() + (Date.now() - timerStart);
        localStorage.setItem('timeSpentOnSite', timeSpentOnSite);
        timerStart = parseInt(Date.now());
        timeSpentOnSite = parseInt(timeSpentOnSite / 1000);
    }, 1000);
}

startCounting();

$(window).unload(function () {
    localStorage.clear();
});


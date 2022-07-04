window.onpopstate = function () {
    location.reload();
}

function goToCV() {
    document.title = "Резюме";
    document.querySelector('#content').remove();
    $('#main').load('/presets/cv.html');
    history.pushState(null, null, '/');
}

function goToMap() {
    document.title = "Карта";
    document.querySelector('#content').remove();
    $('#main').load('/presets/map.html');
    history.pushState(null, null, '/map');
}

function goToTimer() {
    document.title = "Таймер";
    document.querySelector('#content').remove();
    $('#main').load('/presets/timer.html');
    history.pushState(null, null, '/timer');
}
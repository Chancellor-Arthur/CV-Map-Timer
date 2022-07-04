window.onpopstate = function () {
    switch (location.pathname) {
        case '/':
            goToCV(false);
            break;
        case '/map':
            goToMap(false);
            break;
        case '/timer':
            goToTimer(false);
            break;
    }
}

function goToCV(state = true) {
    document.title = "Резюме";
    document.querySelector('#content').remove();
    $('#main').load('/presets/cv.html');
    if (state) {
        history.pushState(null, null, '/');
    }
}

function goToMap(state = true) {
    document.title = "Карта";
    document.querySelector('#content').remove();
    $('#main').load('/presets/map.html');
    if (state) {
        history.pushState(null, null, '/map');
    }
}

function goToTimer(state = true) {
    document.title = "Таймер";
    document.querySelector('#content').remove();
    $('#main').load('/presets/timer.html');
    if (state) {
        history.pushState(null, null, '/timer');
    }
}
window.onpopstate = function () {
    goTo(Object.keys(dict).find(key => dict[key].path === location.pathname));
}

let dict = {
    "cv": {title: "Резюме", path: "/", file: "/cv.html"},
    "map": {title: "Карта", path: "/map", file: "/map.html"},
    "timer": {title: "Таймер", path: "/timer", file: "/timer.html"}
}

function goTo(key){
    document.title = dict[key].title;
    document.querySelector('#content').remove();
    $('#main').load("/presets" + dict[key].file);
    if (location.pathname !== dict[key].path) {
        history.pushState(null, null, dict[key].path);
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
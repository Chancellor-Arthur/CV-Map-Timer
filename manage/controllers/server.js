export const cv = (req, res) => {
    res.render('base', {'title': 'Резюме', 'active': 'cv'});
}

export const map = (req, res) => {
    res.render('map', {'title': 'Карта', 'active': 'map'});
}

export const timer = (req, res) => {
    res.render('timer', {'title': 'Таймер', 'active': 'timer'});
}
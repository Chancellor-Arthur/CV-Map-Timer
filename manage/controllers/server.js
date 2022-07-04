export const cv = (req, res) => {
    res.render('cv', {'title': 'Резюме'});
}

export const map = (req, res) => {
    res.render('map', {'title': 'Карта'});
}

export const timer = (req, res) => {
    res.render('timer', {'title': 'Таймер'});
}
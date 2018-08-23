module.exports = (app) => {
    app.get('/formularioInclusaoNoticia', (req, res) => res.render('admin/formAddNoticia'))
};

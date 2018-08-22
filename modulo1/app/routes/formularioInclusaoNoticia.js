module.exports = (conf) => {
    conf.app.get('/formularioInclusaoNoticia', (req, res) => res.render('admin/formAddNoticia'))
};

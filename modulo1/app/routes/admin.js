module.exports = (app) => {
    app.get('/formularioInclusaoNoticia', (req, res) => res.render('admin/formAddNoticia'))
    
    app.post('/noticias/salvar', (req, res) =>{
        var noticias = req.body;
        
        const conn = app.config.dbConnection();
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.setNoticia(noticias, conn, ((error, result, fields) => {
            res.redirect('/noticias');
        }));
        
    });
};

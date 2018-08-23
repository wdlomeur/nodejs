module.exports = ((app) => {
    
    app.get('/noticia', ((req, res) => {
        
        const noticiasModel = app.app.models.noticiasModel;
        const conn = app.config.dbConnection();

        noticiasModel.getNoticia(conn, ((error, result, fields) => {
            res.render("noticias/noticia", { noticia: result});
        }));
    }));
});
//const dbConnection = require('../../config/dbConnection');
module.exports = ((app) => {
    
    app.get('/noticias', ((req, res) => {
        
        const noticiasModel = app.app.models.noticiasModel;
        const conn = app.config.dbConnection();

        noticiasModel.getNoticias(conn, ((error, result, fields) => {
            res.render("noticias/noticias", { noticias: result});
        }));
    }));
});
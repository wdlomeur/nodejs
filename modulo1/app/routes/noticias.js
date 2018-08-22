module.exports = ((conf) => {
    conf.app.get('/noticias', ((req, res) => {
        
        const query = 'SELECT * FROM noticias';
        //conf.conn.connect();
        conf.conn.query(query, ((error, result, fields) => {
            if(error) throw error;
            //res.send(result);
            res.render("noticias/noticias", { noticias: result});
        }));
        //conf.conn.end();
        
    }));
});
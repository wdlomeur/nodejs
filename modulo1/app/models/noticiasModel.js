const GET_NOTICIAS = 'SELECT * FROM noticias';
const GET_NOTICIA = 'SELECT * FROM noticias';
const SET_NOTICIA = 'INSERT INTO noticias SET ?';

module.exports = () => {
    this.getNoticias = (conn, callback) => conn.query(GET_NOTICIAS, callback);

    this.getNoticia = (conn, callback) => conn.query(GET_NOTICIA, callback);

    this.setNoticia = (noticia, conn, callback) => conn.query(SET_NOTICIA, noticia, callback);
    
    return this;
};
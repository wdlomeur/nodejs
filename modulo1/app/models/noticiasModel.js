const GET_NOTICIAS = 'SELECT * FROM noticias';
const GET_NOTICIA = 'SELECT * FROM noticias';

module.exports = () => {
    this.getNoticias = (conn, callback) => conn.query(GET_NOTICIAS, callback);

    this.getNoticia = (conn, callback) => conn.query(GET_NOTICIA, callback);

    return this;
};
const conf = require('./config/server');
const rotaHome = require('./app/routes/home')(conf);
const rotaNoticias = require('./app/routes/noticias')(conf);
const rotaFormularioInclusaoNoticia = require('./app/routes/formularioInclusaoNoticia')(conf);

conf.app.listen(3000, () => console.log('Servidor On '));

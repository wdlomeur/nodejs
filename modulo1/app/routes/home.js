module.exports = (conf) => { 
    conf.app.get('/', (req, res) => res.render('./home/index')) 
};

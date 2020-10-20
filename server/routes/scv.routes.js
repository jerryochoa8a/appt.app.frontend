const scvController = require('../controllers/scv.controllers');

module.exports = function(app){
    app.get('/api/scvs', scvController.getAllscvs);
    app.post('/api/scv/new', scvController.createscv);
    app.get('/api/scv/:id', scvController.getscv);
    app.put('/api/scvs/:id/update', scvController.updatescv);
    app.delete('/api/scv/:id/delete', scvController.deletescv);
}
module.exports = (app) => {
    const nota = require('../controllers/controllers');

    // Create nota baru
    app.post('/nota', nota.create);

    // Retrieve semua nota
    app.get('/nota', nota.findAll);

    // Retrieve 
    app.get('/nota/:notaId', nota.findOne);

    // Update 
    app.put('/nota/:notaId', nota.update);

    // Delete 
    app.delete('/nota/:notaId', nota.delete);
}
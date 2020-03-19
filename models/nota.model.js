const mongoose = require('mongoose');

const NotaSchema = mongoose.Schema({
    judul: String,
    deskripsi: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Nota', NotaSchema);
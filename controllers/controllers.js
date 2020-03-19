const Note = require('../models/nota.model.js');

// Membuat dan save nota
exports.create = (req, res) => {
    if(!req.body.deskripsi) {
        return res.status(400).send({
            message: "Tidak boleh Empty"
        });
    }

    // Create a Note
    const note = new Note({
        judul: req.body.judul || "Untitled Note", 
        deskripsi: req.body.deskripsi
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve semua nota
exports.findAll = (req, res) => {
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find mencari nota
exports.findOne = (req, res) => {
    Note.findById(req.params.notaId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.notaId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.notaId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.notaId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    if(!req.body.deskripsi) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.notaId, {
        judul: req.body.judul || "Untitled Note", 
        deskripsi: req.body.deskripsi
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.notaId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.notaId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.notaId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.notaId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.notaId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.notaId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.notaId
        });
    });
};
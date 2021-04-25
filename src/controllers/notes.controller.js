const Note = require('../models/Note');
const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;

    const newNote = new Note({title, description});
    await newNote.save();
    res.send('note created');
};

notesCtrl.renderNotes = async (req, res) => {

    /* find() method added to solve the problem: 
        Handlebars: Access has been denied to resolve the property
    */
    const notes = await Note.find().lean();

    res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('edit notes');
};

notesCtrl.updateNote = (req, res) => {
    res.send('update note');
};

notesCtrl.deleteNote = (req, res) => {
    res.send('delete note');
};
module.exports = notesCtrl;
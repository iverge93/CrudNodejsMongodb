const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) =>{
    res.send('note add');
};

notesCtrl.createNewNote = (req, res) => {
    res.send('note created');
};

notesCtrl.renderNotes = (req, res) => {
    res.send('render notes');
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
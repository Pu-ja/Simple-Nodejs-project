module.exports=(app)=>
{
    const notes=require('../controllers/note.controller.js')

// Create a new Note
app.post('/notes',notes.create);

// Retrieve all Notes
app.get('/notes',notes.findAll);

// Retrieve one Note
app.get('/notes:noteId',notes.findOne);

//Update
app.put('/notes:noteId',notes.update);

// Delete
app.delete('/notes:noteId',notes.delete);



}
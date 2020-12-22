// const notesCtrl = {};
//
// const Note = require('../models/Note');
//
// notesCtrl.renderNoteForm = (req, res) => {
//     res.render('notes/new-note');
// }
//
// notesCtrl.createNewNote = async (req, res) => {
//     const { title, description, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver } = req.body;
//     const newNote = new Note({ title, description, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver });
//     newNote.user = req.user.id;
//     await newNote.save();
//     req.flash('success_msg', 'Note added successfully!');
//     res.redirect('/notes');
// }
//
// notesCtrl.renderNotes = async (req, res) => {
//     const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
//     res.render('notes/notes', { notes: notes });
// }
//
// notesCtrl.renderEditForm = async (req, res) => {
//     const note = await Note.findById(req.params.id).lean();
//     if (note.user != req.user.id) {
//         req.flash('error_msg', 'Not Authorized');
//         return res.redirect('/notes');
//     }
//     res.render('notes/edit-note', { note });
// }
//
// notesCtrl.updateNote = async (req, res) => {
//     const { title, description, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver } = req.body;
//     await Note.findByIdAndUpdate(req.params.id, { title, description, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver });
//     req.flash('success_msg', 'Note updated successfully!');
//     res.redirect('/notes');
// }
//
// notesCtrl.deleteNote = async (req, res) => {
//     await Note.findByIdAndDelete(req.params.id);
//     req.flash('success_msg', 'Note deleted successfully!');
//     res.redirect('/notes');
// }
//
// module.exports = notesCtrl;

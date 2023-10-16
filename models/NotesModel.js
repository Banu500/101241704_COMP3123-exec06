const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        validate(v) {
            if(v != "HIGH" && v != "LOW" && v != "MEDUIM") throw new Error("Value must be HIGH, MEDUIM, or LOW")
        }
    },
    dateAdded: Date,
    dateUpdated: Date,
})

const Note  = mongoose.model("Note", NoteSchema)
module.exports = Note
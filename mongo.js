const mongoose = require('mongoose')
process.argv.forEach(argv => {
  console.log(argv);
});
console.log(process.argv[3]);
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1);
}
if (process.argv.length<4){
  console.log('PLease provide the name of person');
  process.exit(1);
}

const password = process.argv[2]

const url = `mongodb+srv://Moises2720:${password}@fullstackdbnotes.k0e34.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

//Consultar Base de datos 


Note.find({important:true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// Guardar los datos 

/*
const note = new Note({
  content: process.argv[2],
  date: new Date(),
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
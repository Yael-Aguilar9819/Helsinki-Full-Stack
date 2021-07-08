const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

const password = process.argv[2]; //fifa1010


const url =
`mongodb+srv://userwork1:${password}@cluster0.ftzxk.mongodb.net/notes-MongoDB?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note1 = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
});

const note2 = new Note({
  content: 'Browser can execute only Javascript',
  date: new Date(),
  important: true,
});


const note3 = new Note({
  content: 'GET and POST are the most important methods of HTTP protocol',
  date: new Date(),
  important: true,
});

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
});
//changed to save more than 1 note at a time, si the DB is hitted less
// Note.insertMany([note1, note2, note3])
//   .then(result => {
//     console.log("initial notes saved ", result)
//     mongoose.connection.close()
// }).catch(err => console.log(err))

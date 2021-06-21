const express = require('express');
const app = express();

// Route includes
const entryRouter = require('./routes/entry.router');

// bodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes
app.use('/entry', entryRouter);


// Serve static files
app.use(express.static('build'));

// App Set
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});
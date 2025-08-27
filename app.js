const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/postRoutes');
const PORT = 3000;

const app = express();

// Connect to Database
mongoose.connect('mongodb+srv://thorshan:thorshan@cluster0.focgkqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("Database is successfully connected on MongoDB."))
.catch(err => console.log(err));

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended : true
}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Post routes
app.use('/posts', postRoutes);
app.get('/', (req, res) => {
    res.redirect('/posts');
})

// Connecting to Server
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})
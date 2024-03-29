const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');
const multer = require('multer');
const app = express();

app.use(express.json());

app.use(multer().any());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sanu12345:sanu12345@cluster0.iukctjm.mongodb.net/group22Database", {
    useNewUrlParser: true
}).then(() => console.log('MongoDB is Connected'))
    .catch((err) => console.log(err))

app.use("/", route);

app.listen(3000, () => {
    console.log('Server running on port', 3000);
})

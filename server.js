const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');


// setup view engine
app.set('view engine', 'ejs');

//setup routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app is now listening')
});
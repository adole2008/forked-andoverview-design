const express = require('express');
const path = require('path');
const session = require('express-session');
const { initializeDatabase } = require('./database');
const apiRouter = require('./api-router');
const authRouter = require('./auth-router');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(session({
    secret: 'a-very-strong-and-secret-key-for-andoverview',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: 'auto',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

initializeDatabase();

app.use('/api', apiRouter);
app.use('/api/users', authRouter);

app.use(express.static(path.join(__dirname, '..')));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
require('dotenv').config()

const app = express()

require('./auth')

const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

// PASSPORT OAUTH GOOGLE

function isLoggeIn(req, res, next){
    req.user ? next() : res.sendStatus(401)
}

app.get('/auth/google',//REDIRECIONAR O USUÁRIO PARA ESSA JANELA
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(passport.initialize())
app.use(passport.session())

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/failure', (req, res) => {
    res.send("Something went wrong")
})

app.get('/auth/protected', isLoggeIn, (req, res) => {
    let name = req.user.displayName;
    // res.send(`HELLO ${name}!`)
    console.log(name)
    res.redirect('http://localhost:5173/login');
})

app.use('/auth/logout', (req, res) => {
    req.session.destroy()
    res.send('see you again')
})
// FIM PASSPORT OAUTH GOOGLE

const productRouter = require('./routes/Product')

app.use('/', productRouter)
app.use('/uploads', express.static('uploads'))

app.listen(port, () => {
    console.log('server initialized')
    require('./db')
})

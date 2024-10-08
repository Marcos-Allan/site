const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config()

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    //A PORTA DELE ESTÁ RODANDO NA 5000 SE NÃO FUNCIONAR TROCAR PARA 3000
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.serializeUser((user, done) => {
    done(null,user)
})

passport.deserializeUser((user, done) => {
    done(null,user)
})
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const massive = require('massive')
const db = require('./db')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config.js')
const port = 4000;
console.log(config.facebook.clientId);

const app = express();

app.use(express.static(__dirname + '/public/'))

app.use(json());
app.use(cors())
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientId,
  clientSecret: config.facebook.clientSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function (token, refreshToken, profile, done) {
  console.log("Facebook Profile: ", profile)
  db.findUser(profile.id, function(err, users) {
    if (err) next(err)
    if (users.length) {
      return done(null, users[0]);
    }
    db.createUser([profile.displayName, profile.id], function(err, newUsers) {
      console.log(newUsers)
      return done(null, newUsers[0])
    })
  })

}));


passport.serializeUser(function(user, done) {
  console.log("Serializing User")
  return done(null, user);
})

passport.deserializeUser(function(user, done) {
  console.log("Deserializing User")
  return done(null, user);
})

//END POINTS

app.get('/auth/facebook', (req, res, next) => {console.log("Authenticating"); next()}, passport.authenticate('facebook'))
app.get('/auth/facebook/callback', (req, res, next) => {console.log("At callback"); next()}, passport.authenticate('facebook', {
  successRedirect: "http://localhost:53549/home" ,failureRedirect:'http://localhost:53549/book'
})
)
app.get("/getCurrentUser",(req,res)=>{
	return res.status(200).send(req.user);
})







app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
});

module.exports = app

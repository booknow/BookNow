const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const massive = require('massive')
const db = require('./db')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config.js')

console.log(config);
const port = 3000;

console.log(config.facebook.clientId);

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(json());
app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true
}))
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientId,
  clientSecret: config.facebook.clientSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function (token, refreshToken, profile, done) {
  console.log("Facebook Profile: ", profile)
  // db.findUser(profile.id, function(err, users) {
  //   if (err) next(err)
  //   if (users.length) {
  //     return done(null, users[0]);
  //   }
  //   db.createUser([profile.displayName, profile.id], function(err, newUsers) {
  //     console.log(newUsers)
  //     return done(null, newUsers[0])
  //   })
  // })
  return done(null, profile)
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
  successRedirect: "/user" ,failureRedirect:'http://localhost:4000/book'
})
)
app.get("/user",(req,res)=>{
  console.log("Current User:", req.user)
	res.redirect("http://localhost:4000/home")
})

app.post('/api/book', (req,res,next) => {
  console.log('Posting to book db', req.body);
  // if (err) { return next(err) }
  return res.status(200).send('working!')
})



//posting new appointment data
app.post('/createAppointment' , (req,res,next) => {
  console.log(req.body)
  db.postApptData([req.body.email,req.body.firstname,req.body.lastname,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.frequency], (err, data) => {
    if(err) {return next(err) }
    else{
      return res.status(200).json(data);
    }
  })
})

app.get('*', (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
});

module.exports = app

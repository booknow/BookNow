const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const massive = require('massive')
const db = require('./db')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config.js')
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(json());
app.use(cors({
  origin: 'http://localhost:4000',
  credentials: true
}))
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientId,
  clientSecret: config.facebook.clientSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function (token, refreshToken, profile, done) {
  db.findUser(profile.id, function(err, users) {
    if (err) next(err)
    if (users.length) {
      return done(null, users[0]);
    }
    else {
      db.createUser([profile.displayName, profile.id], function(err, newUsers) {
        console.log(newUsers, err);
        return done(null, users[0])
      })
    }
  })
}));


passport.serializeUser(function(user, done) {
  return done(null, user);
})

passport.deserializeUser(function(user, done) {
  return done(null, user);
})

app.use((req, res, next) => {
  next();
})

//END POINTS

app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: "http://localhost:4000/home" ,failureRedirect:'http://localhost:4000/book'
  })
)

// app.put('/updateUserInfo', (req,res,next) => {
//   db.updateUserInfo([req.body.email], (req ,res, next) =>{
//     if(err) {return next(err) }
//     else{
//       return res.status(200).json(data);
//     }
//   })
// })

app.post('/api/book', (req,res,next) => {
  // if (err) { return next(err) }
  return res.status(200).send('working!')
})

app.get('/appointments', (req,res,next) => {
  db.readAppts([], (err, appts)=> {
    if (err) {return next(err)}
    return res.status(200).json(appts);
  })
})


app.get("/getCurrentUser", (req,res,next)=>{
  if (req.user) {
    return res.status(200).json(req.user)
  }

  return res.status(200).send('no user info')
})
//posting new appointment data
app.post('/createAppointment' , (req,res,next) => {
  console.log(req.body.total);
  db.postApptData([req.body.email,req.body.firstname,req.body.lastname,req.body.address,req.body.city,req.body.state,req.body.zip, req.body.servicetype, req.body.frequency], (err, data) => {

    if(err) {return next(err) }
    else{
      console.log(data);
      return res.status(200).json(data);
    }
  })
})


app.get('/getApptCount', function(req,res,next){
  db.getApptCount(function(err, ApptCount){
    console.log(err);
    if(err){
      return next (err);
    }
    console.log("the total number of appointments:", ApptCount);
    return res.status(200).json(ApptCount);
  })
})

app.get('/api/setuppref', (req,res,next) => {
  console.log(req.body);
  db.readUserPref([3], (err, pref) => {
    if (err) {return next(err)}
    return res.status(200).json(pref)
  })
})

app.listen(port , () => {
  console.log(`listenin' to port ${port}`);
});

module.exports = app

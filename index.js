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


let uber = {}


passport.use(new FacebookStrategy({
  clientID: config.facebook.clientId,
  clientSecret: config.facebook.clientSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function (token, refreshToken, profile, done) {
  db.findUser(profile.id, function(err, users) {

    if (err) next(err)
    if (users.length) {

      uber = users[0]

      return done(null, users[0]);
    }
    else {
      db.createUser([profile.displayName, profile.id], function(err, newUsers) {
        uber = newUsers[0]
        return done()
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


//END POINTS

app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: "http://localhost:4000/home" ,failureRedirect:'http://localhost:4000/setup'
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


app.get('/api/user', (req,res,next) => {
  res.status(200).json(uber.id)
})

app.post('/api/setup', (req,res,next) => {
  console.log(uber, uber.id);
  Promise.all(req.body.idArr.map(id => {
    return db.createServiceList([uber.id, id], (err, list) => {
        if (err) {return next(err)}
    })
  })).then(() => {
    return res.status(200).json('working')
  }).catch(err => {
    console.log(err)
  })
})

app.get('/api/setup/services/:id', (req,res,next) => {

  // get services provided by user.id
  db.readServicesProvidedById([req.params.id], (err, services) => {
    console.log("the facebook id is:",req.params.id)
    if (err) {return next(err)}
    return res.status(200).json(services)
  })
})





app.get('/api/setup/services', (req,res,next) => {
  db.getServicesList([], (err, list) => {
    if (err) {return next(err)}
    return res.status(200).json(list)
  })
})



app.put('/api/setup/services/:id', (req,res,next) => {
  // update price for services by user.id
  console.log('putting prices into services_provided');
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
  db.postApptData([req.body.email,req.body.firstname,req.body.lastname,req.body.address,req.body.city,req.body.state,req.body.zip, req.body.servicetype, req.body.frequency], (err, data) => {

    if(err) {return next(err) }
    else{
      return res.status(200).json(data);
    }
  })
})

app.get('/customer/:id', function(req,res,next){
  db.new_appointment.find(parseInt(req.params.id), function(err, user){
    if (err) {return next(err)}
    else{
      return res.status(200).json(user);
    }
  })
})



app.get('/getApptCount', function(req,res,next){
  db.getApptCount(function(err, ApptCount){
    // console.log(err);
    if(err){
      return next (err);
    }
    // console.log("the total number of appointments:", ApptCount);
    return res.status(200).json(ApptCount);
  })
})

app.get('/api/setuppref', (req,res,next) => {

  console.log(req.body);
  // TODO change hard coded number 3

  db.readUserPref([3], (err, pref) => {
    if (err) {return next(err)}
    return res.status(200).json(pref)
  })
})


app.get('/servicesProvided' , function(req,res,next) {
  db.servicesProvided(function(err, servicesProvided){
    if(err){
      return next (err);
    }
    return res.status(200).json(servicesProvided);
  })
})




app.listen(port , () => {
  console.log(`listenin' to port ${port}`);
});

module.exports = app

const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const massive = require('massive')
const db = require('./db')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config.js')
const port = 5555;

const app = express();

app.use(express.static(__dirname + '/build'))

app.use(json());
app.use(cors())

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
  callbackURL: config.facebook.callbackURL
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
    successRedirect: "/home" ,failureRedirect:'/setup'
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

app.post('/api/setup/dates', (req,res,next)=>{
  const obj = {}
  req.body.forEach(day => {
      let prop = 'pa_' + day.toLowerCase()
      obj[prop] = true
      obj.pa_userid = uber.id
  })
  console.log(obj)
  db.pref_available.insert(obj, (err, rows) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(rows)
  })

//   Promise.all(datesAvail.map(x => {
//   // console.log(x);
//     for (let day of week) {
//       if (x.label === day) {
//         console.log('winner chicken!');
//
//       }
//
//
//
//     }
//     return db.createAvailability([x.bool])
//   })).then(()=> {
//     return res.status(200).json('posted schedule to pref_available table')
//   }).catch(err => {
//     console.log(err);
//   })
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

app.get('/api/book/:id', (req,res,next)=> {
  db.readUserServices([req.params.id], (err, services)=>{
    if (err) {return next(err)}
    return res.status(200).json(services)
  })
})


app.put('/api/setup/services/:id', (req,res,next) => {
  // update price for services by user.id
  let dataSent = req.body
  console.log(req.body);
    Promise.all(
      dataSent.map((x, idx)=> {
      return db.updatePrices([x.service_id, x.services_provided_price, x.sprovider_id], (err, data)=>{
        if (err) {return next(err)}
      })
    })
  ).then( ()=>{
    return res.status(200).json('sent service update to service provided!')
  })
})



app.get('/appointments/:id', (req,res,next) => {
  console.log(req.params.id);
  db.readAppts([req.params.id], (err, appts)=> {
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
  console.log(req.body);
  console.log(req.body.id);
  db.postApptData([req.body.email,req.body.firstname,req.body.lastname,req.body.address,req.body.city,req.body.state,req.body.zip, req.body.servicetype,req.body.frequency, req.body.startDate,req.body.time,req.body.comments, req.body.id], (err, data) => {

    if(err) {return next(err) }
    else{
      return res.status(200).json(data);
    }
  })
})

app.get('/customer/:id', function(req,res,next){
  db.new_appointment.find(parseInt(req.params.id), (err, user) => {
    if (err) {return next(err)}
    else{
      return res.status(200).json(user);
    }
  })
})



app.get('/getApptCount/:id', (req,res,next)=>{
  db.getApptCount([req.params.id], (err, ApptCount)=>{
    // console.log(err);
    if(err){
      return next (err);
    }
    // console.log("the total number of appointments:", ApptCount);
    return res.status(200).json(ApptCount);
  })
})

app.get('/api/setuppref/:id', (req,res,next) => {

  console.log(req.params.id);


  db.readUserPref([req.params.id], (err, pref) => {
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



app.get('*', (req,res,next) => {
  res.sendFile(__dirname + '/build/index.html')
})
app.listen(port , () => {
  console.log(`listenin' to port ${port}`);
});

module.exports = app

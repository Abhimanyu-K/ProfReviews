const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');
const ratingRoutes = require('./routes/Rating');
const commentRoutes = require("./routes/comment");
const compression = require("compression");
const helemt = require("helmet");
const app = express();
const cors = require("cors");
const path = require('path');
const GoogleUser  = require('./models/GoogleAuth');
const Profile = require("./routes/profProfiles");
//const multer = require("multer");
//const ProfProfile = require("./models/profprofile");
const passport = require("passport");
const cookieSession = require('cookie-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require("dotenv");
dotenv.config();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use(cors({origin:'*',credentials:true}))
app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:['sdfsdfsdvsdvdv'],
  secure:true,
  sameSite:"none"
}));

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user,done)=>{
  
  return done(null,user.id);
})
passport.deserializeUser((id,done)=>{
  console.log(id);
  GoogleUser.findById(id)
  .then(user=>{
    console.log("found");
    return done(null,user);
  })
  
})

passport.use(new GoogleStrategy({
  clientID:`${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL:"/auth/google/callback"
},
function(accessToken,refreshToken,profile,done)
{
  console.log(profile,"---");
  GoogleUser.findOne({googleId:profile.id})
  .then((user)=>{
    if(user)
    {
      return done(null,user);
    }
    else{
      const googleuser = new GoogleUser({
        date: new Date().toISOString(),
        name:profile.displayName,
        googleId:profile.id,
        image:profile.photos[0].value
      })
      googleuser.save()
      .then(newUser=>{
        console.log(newUser);
        return done(null,newUser);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  })
 
  
}

));

app.get('/auth/google',passport.authenticate('google',{scope:['profile']}));
app.get('/auth/google/callback',
passport.authenticate('google',
    {failureRedirect:'/login'}),
 (req,res)=>{
   
  console.log(req.user);
   res.redirect('https://profreview.herokuapp.com');
 }
);


app.use('/auth',authRoutes);
app.use(feedRoutes);
app.use(messageRoutes);
app.use(ratingRoutes);
app.use(Profile);
app.use(commentRoutes);

app.use(helemt());
app.use(compression());

app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message,data:data});
})


app.set("view engine", "ejs");


app.use(express.static(__dirname + "./public/"));
if(process.env.NODE_ENV==="production")
{
    app.use(express.static(path.resolve(__dirname,'./Client/build')))
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'Client','build','index.html'))
    })
}


/*
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Client/public/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1021 * 1024 * 5,
  },
});
app.get("/profs", (req, res) => {
  res.render("imagesPage");
});

app.post("/profs", upload.single("file"), (req, res, next) => {
  const profile = new ProfProfile({
    name: req.body.name,
    domain: req.body.domain,
    college: req.body.college,
    breif: req.body.breif,
    details: req.body.details,
    email_id: req.body.email_id,
    researchgate: req.body.researchgate,
    image: req.file.filename,
  });

  profile
    .save()
    .then((results) => {
      console.log("Added data");
    })
    .catch((err) => console.log(err));

  res.send("img");
});


*/

app.use((req, res) => {
  res.status(404).send("<h1>OOPs 404 </h1>");
});

//const mongodb_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.cd2f9.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;
mongoose.connect(process.env.MONGO_URL)
.then(result=>{
    console.log('connected');
    app.listen(process.env.PORT || 8080)})
.catch(err=>console.log(err));

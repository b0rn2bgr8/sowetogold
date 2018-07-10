const express = require('express'),
helmet = require('helmet'),
morgan = require('morgan'),
cors = require('cors'),
cookieSession = require('cookie-session'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
passport = require('passport'),
secret = require('./config/secret');
path = require('path');

const app = express();

// // mongoose.connect(secret.database, (err)=>{
mongoose.connect('mongodb://soweto_observer_db:123456@ds233320.mlab.com:33320/soweto_observer_db', (err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("connected");
});

app.use(helmet());
app.use(morgan('dev'));
app.use(cors({origin: ["http://localhost:3000", "http://localhost:3001"], credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [secret.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

/*Routes*/
require('./routes/auth.route')(app);
var categoryRoutes = require('./routes/category.routes');
var articleRoutes = require('./routes/articles.routes');

//Using the endpoint results.
// app.use(userRoutes);
app.use(categoryRoutes);
app.use(articleRoutes);

app.get("*", )
app.listen(secret.port, ()=>{
    console.log("listening on port " + secret.port);
});

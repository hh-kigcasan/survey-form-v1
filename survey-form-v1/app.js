const Express       = require('express');
const App           = Express();
const Favicon       = require("serve-favicon");
const BodyParser    = require('body-parser')
const CookieParser  = require('cookie-parser');
const Session       = require('express-session')
const Constants     = require("./config/constants");

/* 
    DOCU: Session Provider 
    Set the session settings to be used
*/
let session_setting = {
    secret: Constants.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}

/* 
    DOCU: Setup the express app settings 
    Specify the static path, view engine used and etc
*/
App.use(Session(session_setting));
App.use(CookieParser(Constants.SESSION_SECRET));
App.set("view engine", "ejs");
App.set("views", __dirname + "/views");
App.use("/public", Express.static(__dirname + "/public"));
App.use(BodyParser.json({limit: '50mb'}));
App.use(BodyParser.urlencoded({limit: '50mb', extended: true}));

App.use(Favicon(__dirname + "/public/images/favicon.ico"));

/* Routes */
const UserViewRoutes       = require("./routes/view.user.routes");

/* Fair ROUTES */
App.use("/", UserViewRoutes);

App.listen(Constants.PORT, function(){
    console.log('Your node js server is running on PORT ' + Constants.PORT);
});
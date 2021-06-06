const express = require('express'); 
const routes = require('./controllers');
const sequelize = require('./config/connection'); 
const path = require('path'); 
const helpers = require('./utils/helpers'); 

// handlebars
const exphbs = require('express-handlebars'); 
const hbs = exphbs.create( { helpers }); 

// session
const session = require('express-session'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store); 

const app = express();
const PORT = process.env.PORT || 3001; 
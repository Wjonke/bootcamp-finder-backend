const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

////import middleware files////
const logger = require('./middleware/logger');
////import middleware files////

//////import Route files//////
const bootcamps = require('./routes/bootcamps');
//////import Route files//////

const server = express();

////setting up environmental variables////
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
////setting up environmental variables////

///////Development env logging middleware////////
if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'));
}
///////only runs in Dev mode////////

//Mount routers
//this is where I set a base url specified to the second param!
server.use('/api/v1/bootcamps', bootcamps);

server.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

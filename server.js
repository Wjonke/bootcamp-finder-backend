const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

const server = express();

////setting up environmental variables////
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'));
}

connectDB();
////setting up environmental variables////

////import middleware files////
const logger = require('./middleware/logger');
////import middleware files////

//////import Route files//////
const bootcamps = require('./routes/bootcamps');
//////import Route files//////

//Mount routers
//this is where I set a base url specified to the second param!
server.use('/api/v1/bootcamps', bootcamps);

const app = server.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

///handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  //close server and exit process
  app.close(() => process.exit(1));
});

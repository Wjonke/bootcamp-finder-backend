const express = require('express');
const router = express.Router();

const {
  getBootCamps,
  getBootCamp,
  createBootCamp,
  updateBootCamps,
  deleteBootCamps
} = require('../controllers/bootcamps');

//here we use the router to bring in each controller used by the specified endpoint

router
  .route('/')
  .get(getBootCamps)
  .post(createBootCamp);

router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootCamps)
  .delete(deleteBootCamps);

module.exports = router;

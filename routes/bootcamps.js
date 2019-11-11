const express = require('express');
const router = express.Router();

//since we set a base url in server.js, we only need the additional / or /:id for each crud OP

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps HERE' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp with ID#  ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'create new bootcamps HERE' });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp with ID#  ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Bootcamp with ID ${req.params.id} was successfully deleted`
  });
});

module.exports = router;

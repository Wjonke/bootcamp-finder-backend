const Bootcamp = require('../models/Bootcamp');

// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'shows all bootcamps' });
};

// @desc     Get single Bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Gets bootcamp with ID#  ${req.params.id}`
  });
};

// @desc     Post a new bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootCamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    msg: 'created a new bootcamp!',
    data: bootcamp
  });
};

// @desc     Update Bootcamp
// @route    PUT /api/v1/bootcamps:id
// @access   Private
exports.updateBootCamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Updated bootcamp with ID#  ${req.params.id}`
  });
};

// @desc     Delete bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   Private
exports.deleteBootCamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Bootcamp with ID ${req.params.id} was successfully deleted`
  });
};

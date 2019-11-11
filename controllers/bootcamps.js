// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps HERE' });
};

// @desc     Get single Bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp with ID#  ${req.params.id}`
  });
};

// @desc     Post a new bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'create new bootcamps HERE' });
};

// @desc     Update Bootcamp
// @route    PUT /api/v1/bootcamps:id
// @access   Private
exports.updateBootCamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp with ID#  ${req.params.id}` });
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

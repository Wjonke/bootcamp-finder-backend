/////custom built logger middleware, not used currently////////
// @desc     Logs request-type and url to console
const logger = (req, res, next) => {
  console.log(
    `"${req.method}" request made to -> ${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`
  );
  next();
};

/////Logger////////

module.exports = logger;

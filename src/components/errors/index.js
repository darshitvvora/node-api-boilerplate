/**
 * Error responses
 */
const NOT_FOUND = 404;
module.exports[NOT_FOUND] = function pageNotFound(req, res) {
  res.status(NOT_FOUND).json({ error: 'Not found', status: NOT_FOUND });
};

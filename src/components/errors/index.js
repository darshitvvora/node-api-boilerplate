/**
 *  @fileOverview 404 Error Response
 *  @module       ErrorModule
 *  @author       Darshit Vora
 */
const NOT_FOUND = 404;
/**
 * pageNotFound() - Return Not found response
 * @name pageNotFound
 * @param {*} req
 * @param {*} res
 */
module.exports[NOT_FOUND] = function pageNotFound(req, res) {
  res.status(NOT_FOUND).json({ error: 'Not found', status: NOT_FOUND });
};

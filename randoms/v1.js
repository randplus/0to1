/**
 * @function
 * Returns a number between 0 and 1.
 * @returns {number} Returns a number between 0 and 1.
 */
function random() {
  let result = Math.random();
  if (Math.random() == 0) result = 1;
  return result;
}
module.exports = random;

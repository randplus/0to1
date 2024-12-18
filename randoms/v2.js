/**
 * @function
 * Returns a number between 0 and 1.
 * @returns {number} Returns a number between 0 and 1.
 */
function random() {
  let result;
  do {
    result = Math.random() + Math.random();
  } while (result > 1);
  return result;
}

module.exports = random;

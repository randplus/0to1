const versions = require('./src/versions');

/**
 * @function
 * Returns a number between 0 and 1.
 * @param {string | number | null} version - Choose a version to use.
 * @returns {number} Returns a number between 0 and 1.
 */
function random(version) {
  if (!version) version = versions.at(-1);
  if (typeof version !== 'string' && typeof version !== 'number') throw new Error('version must be string or number.');
  try {
    return require(`./randoms/v${`${version}`.replace('v', '')}.js`)();
  } catch {
    throw new Error('version not found.')
  }
}

module.exports = random;
module.exports.versions = versions;

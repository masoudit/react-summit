const path = require("path");
const cwd = process.cwd();

/**
 * Are we in development mode?
 */
const inDev = (env) => {
  return env?.development;
};

/**
 * Create webpack aliases
 */
function createWebpackAliases(aliases) {
  const result = {};
  for (const name in aliases) {
    result[name] = path.join(cwd, aliases[name]);
  }
  return result;
}

// Export helpers
module.exports = {
  inDev,
  createWebpackAliases,
};

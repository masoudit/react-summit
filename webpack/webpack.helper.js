const path = require("path");
const cwd = process.cwd();

/**
 * Are we in development mode?
 */
const inDev = (env) => {
  return env?.development;
};

const isReport = (env) => {
  if (env && env["production-report"]) {
    return true;
  }
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
  isReport,
  inDev,
  createWebpackAliases,
};

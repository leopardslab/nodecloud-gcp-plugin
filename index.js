const googleSDK = require('google-cloud');
const gcpPlugin = require("../aws");

const ncGcpPlugin = (options) => {
  return gcpPlugin(options, googleSDK);
}

module.exports = ncGcpPlugin;
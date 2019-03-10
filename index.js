const googleSDK = require('google-cloud');
const gcpPlugin = require("./gcp");

const ncGcpPlugin = (options) => {
  return gcpPlugin(options, googleSDK);
}

module.exports = ncGcpPlugin;
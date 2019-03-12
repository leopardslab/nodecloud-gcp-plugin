const providers = [
  {
    name: "google",
    tag: "google",
    libName: "nodecloud-gcp-plugin",
    configFile: {
      projectId: "YOUR_GCLOUD_PROJECT_ID",
      keyFilename: "ABSOLUTE_PATH_TO_SERVICE_KEY"
    }
  }
];

module.exports = providers;

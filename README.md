# Nodecloud Google Cloud Plugin
Google Cloud plugin for [Nodecloud-core](https://github.com/cloudlibz/nodecloud-core)

## How to setup
You should have .nc.config.js file in root of your project. 
.nc.config.js can contain multiple providers, actually three are supported - Azure, Google and AWS.

Content of .nc.config.js is following:
1. `name`: name of the provider
2. `tag`: tag of the provider, it's only for your reference
3. `libName`: name of the provider library. IMPORTANT: you actually have to install library by yourself. Currently there are three: [Azure](https://github.com/cloudlibz/nodecloud-azure-plugin), [AWS](https://github.com/cloudlibz/nodecloud-aws-plugin), [Google Cloud](https://github.com/cloudlibz/nodecloud-gcp-plugin)

Here is how should example .nc.config file for Google Cloud look: 
```js
const providers = [
    {
        name: 'google',
        tag: 'google',
        libName: 'nodecloud-gcp-plugin',
        configFile: {
            projectId: "YOUR_GCLOUD_PROJECT_ID",
            keyFilename: "ABSOLUTE_PATH_TO_SERVICE_KEY"
        }
    },
    // other providers might go here
]

module.exports = providers;
``` 

Here is how to obtain a service [key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

Remember that you need to give this service account appropiate roles!

##Project structure

- `/compute` - contains code about Compute Engine
- `/database` - code about Google Datastore
- `/network` - code about Google DNS Services
- `/storage` - code about Google Storage
# nodecloud-gcp-plugin
Google Cloud plugin for [nodecloud](https://github.com/cloudlibz/nodecloud-core)

## 🚀 Install

```
$ npm install nodecloud-gcp-plugin
```

## ✌️ How to setup

- Download keyFile from GCP console
- Set environment variables

```
GCLOUD_PROJECT='nodecloud-demo',
GCLOUD_KEY_FILE_NAME='xxxxxxxxxxx'
```

Use same key names as they are used in this plugin implementation.

Make sure you have `.nc.config` file in the project root and have `nodecloud-core` installed.

Content of `.nc.config` file is assumed as the following json structure.
It is an array of supported providers.

1.  `name` : It is the provider name which nodecloud-core supports.
2.  `tag` : It is the name that you will use to load the given provider. It is for your reference in code. It can be anything that you may like.
3.  `libName` : It is the name of the library which has to be installed before loading a provider.

Config file can contain array of objects for all providers and all will be loaded.
Supported values for `name` : Azure, google, AWS

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
    // other providers might be included here
]

module.exports = providers;
``` 

Here is how to obtain a service [key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

Remember that you need to give this service account appropiate roles!

## 💻 Development

```
$ git clone https://github.com/cloudliz/nodecloud-gcp-plugin
$ cd nodecloud-gcp-plugin
$ npm link
$ cd nodecloud-core
$ npm link nodecloud-gcp-plugin
```

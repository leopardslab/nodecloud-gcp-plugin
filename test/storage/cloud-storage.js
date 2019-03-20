const chai = require("chai");
const assert = chai.assert;
const gcpPlugin = require("../../gcp");

const options = {
  apiVersion: "2016-11-15"
};

const gcpSDk = require("../gcp-mock");
const ncGcpPlugin = new gcpPlugin(options);
const cs = ncAwsPlugin.bucket(options);

describe("GCP CLOUD STORAGE", () => {
  it("should create GCloud bucket", done => {
    const params = {
      Bucket: "ncbucketcr",
      CreateBucketConfiguration: {
        LocationConstraint: "us-west-2"
      }
    };
  });

  it("should delete GCP Bucket", done => {});

  it("should list all GCP Buckets", done => {});

  it("should upload an arbitary sized buffer, blob, or stream", done => {
    const params = { Bucket: "ncbucketcr", Key: "key", Body: "ncunittest" };
  });
});

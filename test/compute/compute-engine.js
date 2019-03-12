const chai = require("chai");
const assert = chai.assert;
const gcpPlugin = require("../../gcp");

const options = {
  apiVersion: "2016-11-15"
};

const gcpSDk = require("../gcp-mock");
const ncGcpPlugin = new gcpPlugin(options);
const ce = ncGcpPlugin.compute(options);

console.log(ce);

describe("AWS EC2", () => {
  it("should list all EC2 instance", done => {
    const params = {
      DryRun: false
    };
  });

  it("should start EC2 instance", done => {
    const params = {
      InstanceIds: ["i-03fe236b187a898b6"],
      DryRun: true
    };
  });

  it("should stop EC2 instance", done => {
    const params = {
      InstanceIds: ["i-03fe236b187a898b6"],
      DryRun: true
    };
  });

  it("should reboot EC2 instance", done => {
    const params = {
      InstanceIds: ["i-03fe236b187a898b6"],
      DryRun: true
    };
  });

  it("should terminate/destroy EC2 instance", done => {
    const params = {
      InstanceIds: ["i-0de2ae0ba47d4f3f3"],
      DryRun: false
    };
  });
});

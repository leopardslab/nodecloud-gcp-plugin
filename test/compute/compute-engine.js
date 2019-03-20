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

describe("GCP Compute engine", () => {
  it("should list all compute instance", done => {
    const params = {
      DryRun: false
    };
    ce.list(params)
      .then(res => {
        assert.typeOf(res, "object");
        done();
      })
      .catch(err => {
        console.log("Err", err);
      });
  });

  it("should start compute instance", done => {
    const params = {
      zone: "",
      vmName: ""
    };
    ec.start(params).then(res => {
      done();
    });
  });

  it("should stop compute instance", done => {
    const params = {
      zone: "",
      vmName: ""
    };
    ec.stop(params).then(res => {
      assert.typeOf(res, "array");
      done();
    });
  });

  it("should reboot compute instance", done => {
    const params = {
      zone: "",
      vmName: ""
    };
    ec.reboot(params).then(res => {
      assert.typeOf(res, "object");
      done();
    });
  });

  it("should terminate/destroy compute instance", done => {
    const params = {
      zone: "",
      vmName: ""
    };
    ec.destroy(params)
      .then(res => {
        assert.typeOf(res, "object");
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
});

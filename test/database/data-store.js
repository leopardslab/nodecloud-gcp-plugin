const chai = require("chai");
const assert = chai.assert;
const gcpPlugin = require("../../gcp");

const options = {
  apiVersion: "2016-11-15"
};

const gcpSDk = require("../gcp-mock");
const ncGcpPlugin = new gcpPlugin(options);
const dataStore = ncGcpPlugin.nosql(options);

describe("GCP Data Store", () => {
  it("should create an entity", done => {
    const params = {
      key: ""
    };
    dataStore
      .createItem(params)
      .then(res => {
        assert.typeOf(res, "object");
        done();
      })
      .catch(err => {
        console.log("Err", err);
      });
  });

  it("should delete an entity", done => {
    const params = {
      key: ""
    };
    dataStore
      .deleteItem(params)
      .then(res => {
        assert.typeOf(res, "object");
        done();
      })
      .catch(err => {
        console.log("Err", err);
      });
  });

  it("should update an item", done => {
    const params = {
      key: ""
    };
    dataStore
      .updateItem(params)
      .then(res => {
        assert.typeOf(res, "object");
        done();
      })
      .catch(err => {
        console.log("Err", err);
      });
  });

  it("should query a table", done => {
    const params = {
      key: ""
    };
    dataStore
      .query(params)
      .then(res => {
        assert.typeOf(res, "object");
        done();
      })
      .catch(err => {
        console.log("Err", err);
      });
  });
});

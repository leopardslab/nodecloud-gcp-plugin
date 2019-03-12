const chai = require("chai");
const assert = chai.assert;
const gcpPlugin = require("../../gcp");

const options = {
  apiVersion: "2016-11-15"
};

const gcpSDk = require("../gcp-mock");
const ncGcpPlugin = new gcpPlugin(options);
const dataStore = ncGcpPlugin.nosql(options);

describe('GCP Data Store', () => {
  it('should create an entity', (done) => {
    const params = {
      Item: {
        artist: {
          S: 'GG'
        }
      },
      ReturnConsumedCapacity: 'TOTAL',
      TableName: 'Test'
    };

  });

  it('should delete an entity', (done) => {
    const params = {
      Key: {
        artist: {
          S: 'Taylor swift'
        }
      },
      TableName: 'Test'
    };

  });

  it('should update an item', (done) => {
    const params = {
      ExpressionAttributeNames: {
        '#Y': 'Year'
      },
      ExpressionAttributeValues: {
        ':y': {
          N: '2015'
        }
      },
      Key: {
        artist: {
          S: 'Taylor Swift'
        }
      },
      ReturnValues: 'ALL_NEW',
      TableName: 'Test',
      UpdateExpression: 'SET #Y = :y'
    };

  });

  it('should query a table', (done) => {
    const params = {
      ExpressionAttributeValues: {
        ':v1': {
          S: 'Taylor Swift'
        }
      },
      KeyConditionExpression: 'artist = :v1',
      TableName: 'Test'
    };

  });
});
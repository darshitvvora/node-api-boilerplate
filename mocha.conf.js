global.chai = require('chai');

// Load Chai assertions
global.expect = chai.expect;
global.assert = chai.assert;
chai.should();

// Load Sinon
global.sinon = require('sinon');
global.faker = require('faker');
chai.use(require('chai-http'));

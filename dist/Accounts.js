'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _Members = require('./Members');

var _Members2 = _interopRequireDefault(_Members);

var _Recruiters = require('./Recruiters');

var _Recruiters2 = _interopRequireDefault(_Recruiters);

var _Stages = require('./Stages');

var _Stages2 = _interopRequireDefault(_Stages);

var _Jobs = require('./Jobs');

var _Jobs2 = _interopRequireDefault(_Jobs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accounts = {
  new: function _new(params) {
    return (0, _assign2.default)((0, _create2.default)(this), params);
  },
  info: function info() {
    var client = this.client;
    var subdomain = this.subdomain;

    var endpoint = '/' + subdomain;
    return client.get({ endpoint: endpoint });
  },
  list: function list() {
    var client = this.client;

    var endpoint = '/';
    return client.get({ endpoint: endpoint });
  },
  members: function members() {
    var client = this.client;
    var subdomain = this.subdomain;

    return _Members2.default.new({ client: client, subdomain: subdomain });
  },
  recruiters: function recruiters() {
    var client = this.client;
    var subdomain = this.subdomain;

    return _Recruiters2.default.new({ client: client, subdomain: subdomain });
  },
  stages: function stages() {
    var client = this.client;
    var subdomain = this.subdomain;

    return _Stages2.default.new({ client: client, subdomain: subdomain });
  },
  jobs: function jobs(shortcode) {
    var client = this.client;
    var subdomain = this.subdomain;

    return _Jobs2.default.new({ client: client, subdomain: subdomain, shortcode: shortcode });
  }
};

exports.default = Accounts;
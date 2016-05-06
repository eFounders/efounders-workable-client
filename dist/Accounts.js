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
  new: function _new(subdomain, workable) {
    return (0, _assign2.default)((0, _create2.default)(this), { subdomain: subdomain, workable: workable });
  },
  info: function info() {
    return this.workable.get({ endpoint: '/' + this.subdomain });
  },
  list: function list() {
    return this.workable.get({ endpoint: '/' });
  },
  members: function members() {
    return _Members2.default.new(this.subdomain, null, this.workable);
  },
  recruiters: function recruiters() {
    return _Recruiters2.default.new(this.subdomain, null, this.workable);
  },
  stages: function stages() {
    return _Stages2.default.new(this.subdomain, this.workable);
  },
  jobs: function jobs(shortcode) {
    return _Jobs2.default.new(this.subdomain, shortcode, this.workable);
  }
};

exports.default = Accounts;
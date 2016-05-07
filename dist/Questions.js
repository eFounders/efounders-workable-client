"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Questions = {
  new: function _new(params) {
    return (0, _assign2.default)((0, _create2.default)(this), params);
  },
  list: function list() {
    var client = this.client;
    var subdomain = this.subdomain;
    var shortcode = this.shortcode;

    var endpoint = "/" + subdomain + "/jobs/" + shortcode + "/questions";
    return client.get({ endpoint: endpoint });
  }
};

exports.default = Questions;
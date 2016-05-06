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
  new: function _new(subdomain, shortcode, workable) {
    return (0, _assign2.default)((0, _create2.default)(this), { subdomain: subdomain, shortcode: shortcode, workable: workable });
  },
  list: function list() {
    return this.workable.get({ endpoint: "/" + this.subdomain + "/jobs/" + this.shortcode + "/questions" });
  }
};

exports.default = Questions;
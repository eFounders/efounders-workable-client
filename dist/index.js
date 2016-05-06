'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _Accounts = require('./Accounts');

var _Accounts2 = _interopRequireDefault(_Accounts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Workable API

workable.accounts().list()
workable.accounts(subdomain).info()
workable.accounts(subdomain).members().list()
workable.accounts(subdomain).recruiters().list()
workable.accounts(subdomain).stages().list()
workable.accounts(subdomain).jobs().list()
workable.accounts(subdomain).jobs().listAll()
workable.accounts(subdomain).jobs(shortcode).info()
workable.accounts(subdomain).jobs(shortcode).questions().list()
workable.accounts(subdomain).jobs(shortcode).members().list()
workable.accounts(subdomain).jobs(shortcode).recruiters().list()
workable.accounts(subdomain).jobs(shortcode).candidates().list()
workable.accounts(subdomain).jobs(shortcode).candidates().listAll()
workable.accounts(subdomain).jobs(shortcode).candidates(id).info()
workable.accounts(subdomain).jobs(shortcode).candidates().create()

*/

var Workable = {
  new: function _new(accessToken) {
    return (0, _assign2.default)((0, _create2.default)(this), { accessToken: accessToken });
  },
  fetch: function (_fetch) {
    function fetch(_x) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function (_ref) {
    var _this = this;

    var endpoint = _ref.endpoint;
    var url = _ref.url;
    var body = _ref.body;
    var _ref$headers = _ref.headers;
    var headers = _ref$headers === undefined ? {} : _ref$headers;
    var method = _ref.method;
    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var fetchedUrl, response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              fetchedUrl = endpoint ? '' + _this.baseUrl + endpoint : url;
              _context.next = 4;
              return fetch(fetchedUrl, {
                method: method,
                headers: (0, _assign2.default)({
                  Authorization: 'Bearer ' + _this.accessToken
                }, headers),
                body: body && (0, _stringify2.default)(body)
              });

            case 4:
              response = _context.sent;
              return _context.abrupt('return', response.json());

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.error('Workable.fetch', _context.t0);
              throw _context.t0;

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }))();
  }),
  get: function get(_ref2) {
    var endpoint = _ref2.endpoint;
    var url = _ref2.url;

    return this.fetch({ endpoint: endpoint, url: url, method: 'GET' });
  },
  post: function post(_ref3) {
    var endpoint = _ref3.endpoint;
    var url = _ref3.url;
    var body = _ref3.body;

    return this.fetch({
      endpoint: endpoint,
      url: url,
      body: body,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });
  },
  accounts: function accounts(subdomain) {
    return _Accounts2.default.new(subdomain, this);
  },

  //
  baseUrl: 'https://www.workable.com/spi/v3/accounts'
};

exports.default = Workable;
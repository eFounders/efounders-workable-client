'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _Questions = require('./Questions');

var _Questions2 = _interopRequireDefault(_Questions);

var _Members = require('./Members');

var _Members2 = _interopRequireDefault(_Members);

var _Recruiters = require('./Recruiters');

var _Recruiters2 = _interopRequireDefault(_Recruiters);

var _Candidates = require('./Candidates');

var _Candidates2 = _interopRequireDefault(_Candidates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jobs = {
  new: function _new(params) {
    return (0, _assign2.default)((0, _create2.default)(this), params);
  },
  info: function info() {
    var client = this.client;
    var subdomain = this.subdomain;
    var shortcode = this.shortcode;

    var endpoint = '/' + subdomain + '/jobs/' + shortcode;
    return client.get({ endpoint: endpoint });
  },
  list: function list() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var client = this.client;
    var subdomain = this.subdomain;

    var optionsQueryString = _querystring2.default.stringify(options);
    var queryString = optionsQueryString.length ? '?' + optionsQueryString : '';
    var endpoint = '/' + subdomain + '/jobs' + queryString;
    return client.get({ endpoint: endpoint });
  },
  listAll: function listAll() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var client, _ref, firstJobs, firstPaging, result, nextUrl, _ref2, jobs, paging;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              client = _this.client;

              (0, _assign2.default)(options, { limit: 100 });
              _context.next = 5;
              return _this.list(options);

            case 5:
              _ref = _context.sent;
              firstJobs = _ref.jobs;
              firstPaging = _ref.paging;
              result = firstJobs;
              nextUrl = firstPaging && firstPaging.next;

            case 10:
              if (!nextUrl) {
                _context.next = 20;
                break;
              }

              _context.next = 13;
              return client.get({ url: nextUrl });

            case 13:
              _ref2 = _context.sent;
              jobs = _ref2.jobs;
              paging = _ref2.paging;

              result = result.concat(jobs);
              nextUrl = paging && paging.next;
              _context.next = 10;
              break;

            case 20:
              return _context.abrupt('return', { jobs: result });

            case 23:
              _context.prev = 23;
              _context.t0 = _context['catch'](0);

              console.error('Jobs.listAll', _context.t0);
              throw _context.t0;

            case 27:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 23]]);
    }))();
  },
  questions: function questions() {
    var client = this.client;
    var subdomain = this.subdomain;
    var shortcode = this.shortcode;

    return _Questions2.default.new({ client: client, subdomain: subdomain, shortcode: shortcode });
  },
  members: function members() {
    var client = this.client;
    var subdomain = this.subdomain;
    var shortcode = this.shortcode;

    return _Members2.default.new({ client: client, subdomain: subdomain, shortcode: shortcode });
  },
  recruiters: function recruiters() {
    var client = this.client;
    var subdomain = this.subdomain;
    var shortcode = this.shortcode;

    return _Recruiters2.default.new({ client: client, subdomain: subdomain, shortcode: shortcode });
  },
  candidates: function candidates(id) {
    var client = this.client;
    var subdomain = this.subdomain;
    var shortcode = this.shortcode;

    return _Candidates2.default.new({ client: client, subdomain: subdomain, shortcode: shortcode, id: id });
  }
};

exports.default = Jobs;
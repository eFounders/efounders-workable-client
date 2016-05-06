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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Candidates = {
  new: function _new(subdomain, shortcode, id, workable) {
    return (0, _assign2.default)((0, _create2.default)(this), { subdomain: subdomain, shortcode: shortcode, id: id, workable: workable });
  },
  info: function info() {
    var endpoint = '/' + this.subdomain + '/jobs/' + this.shortcode + '/candidates/' + this.id;
    return this.workable.get({ endpoint: endpoint });
  },
  list: function list() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var optionsQueryString = _querystring2.default.stringify(options);
    var queryString = optionsQueryString.length ? '?' + optionsQueryString : '';
    var endpoint = '/' + this.subdomain + '/jobs/' + this.shortcode + '/candidates' + queryString;
    return this.workable.get({ endpoint: endpoint });
  },
  listAll: function listAll() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var _ref, firstCandidates, firstPaging, result, nextUrl, _ref2, candidates, paging;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              (0, _assign2.default)(options, { limit: 100 });
              _context.next = 4;
              return _this.list(options);

            case 4:
              _ref = _context.sent;
              firstCandidates = _ref.candidates;
              firstPaging = _ref.paging;
              result = firstCandidates;
              nextUrl = firstPaging && firstPaging.next;

            case 9:
              if (!nextUrl) {
                _context.next = 19;
                break;
              }

              _context.next = 12;
              return _this.workable.get({ url: nextUrl });

            case 12:
              _ref2 = _context.sent;
              candidates = _ref2.candidates;
              paging = _ref2.paging;

              result = result.concat(candidates);
              nextUrl = paging && paging.next;
              _context.next = 9;
              break;

            case 19:
              return _context.abrupt('return', { candidates: result });

            case 22:
              _context.prev = 22;
              _context.t0 = _context['catch'](0);

              console.error('Candidates.listAll', _context.t0);
              throw _context.t0;

            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 22]]);
    }))();
  },
  create: function create(candidate, stage) {
    var stageQueryString = _querystring2.default.stringify({ stage: stage });
    var queryString = stage ? '?' + stageQueryString : '';
    var endpoint = '/' + this.subdomain + '/jobs/' + this.shortcode + '/candidates' + queryString;
    return this.workable.post({ endpoint: endpoint, body: candidate });
  }
};

exports.default = Candidates;
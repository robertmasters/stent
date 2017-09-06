'use strict';

exports.__esModule = true;
exports.Machine = undefined;

var _createMachine = require('./createMachine');

var _createMachine2 = _interopRequireDefault(_createMachine);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MachineFactory = function () {
  function MachineFactory() {
    _classCallCheck(this, MachineFactory);

    this.machines = {};
    this.middlewares = [];
  }

  MachineFactory.prototype.create = function create(name, config) {
    return this.machines[name] = (0, _createMachine2.default)(name, config, this.middlewares);
  };

  MachineFactory.prototype.get = function get(name) {
    if (this.machines[name]) return this.machines[name];
    throw new Error((0, _constants.ERROR_MISSING_MACHINE)(name));
  };

  MachineFactory.prototype.flush = function flush() {
    this.machines = [];
    this.middlewares = [];
  };

  MachineFactory.prototype.addMiddleware = function addMiddleware(middleware) {
    this.middlewares.push(middleware);
  };

  return MachineFactory;
}();

var factory = new MachineFactory();

exports.Machine = factory;
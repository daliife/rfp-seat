function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
    * (c) 2010-2020 Google LLC. https://angular.io/
    * License: MIT
    */


    (function (factory) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function () {
      'use strict';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone =
        /*#__PURE__*/
        function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "__load_patch",
            // tslint:disable-next-line:require-internal-with-underscore
            value: function __load_patch(name, fn) {
              if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate =
        /*#__PURE__*/
        function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask =
        /*#__PURE__*/
        function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }, {
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          setNativePromise: function setNativePromise(NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
              nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                if (!isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // and the rejected value is an Error object,
                  // use the value instead of wrapping it.
                  try {
                    // Here we throws a new Error to print more readable error log
                    // and if the value is not an error, zone.js builds an `Error`
                    // Object here to attach the stack information.
                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                  } catch (err) {
                    uncaughtPromiseError = err;
                  }
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise =
        /*#__PURE__*/
        function () {
          _createClass(ZoneAwarePromise, null, [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }, {
            key: Symbol.toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: Symbol.species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }]);

          return ZoneAwarePromise;
        }(); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];

        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

        if (!desc || desc.configurable) {
          desc && delete desc.writable;
          desc && delete desc.value;

          if (!desc) {
            desc = {
              configurable: true,
              enumerable: true
            };
          }

          desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
          };

          desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
              // if the NewNativePromise is ZoneAwarePromise
              // save to global
              global[ZONE_AWARE_PROMISE] = NewNativePromise;
            } else {
              // if the NewNativePromise is not ZoneAwarePromise
              // for example: after load zone.js, some library just
              // set es6-promise to global, if we set it to global
              // directly, assertZonePatched will fail and angular
              // will not loaded, so we just set the NewNativePromise
              // to global[symbolPromise], so the result is just like
              // we load ES6 Promise before zone.js
              global[symbolPromise] = NewNativePromise;

              if (!NewNativePromise.prototype[symbolThen]) {
                patchThen(NewNativePromise);
              }

              api.setNativePromise(NewNativePromise);
            }
          };

          ObjectDefineProperty(global, 'Promise', desc);
        }

        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this2 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this2, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function () {
            var resultPromise = fn.apply(this, arguments);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          var fetch = global['fetch'];

          if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
          }
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop3 = function _loop3(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop3(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
          return;
        }

        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
          var desc = Object.getOwnPropertyDescriptor(src, symbol);
          Object.defineProperty(dest, symbol, {
            get: function get() {
              return src[symbol];
            },
            set: function set(value) {
              if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                // if src[symbol] is not writable or not have a setter, just return
                return;
              }

              src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
          });
        });
      }

      var shouldCopySymbolProperties = false;

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && !(delegate = proto[delegateName])) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);

            if (shouldCopySymbolProperties) {
              copySymbolProperties(delegate, proto[name]);
            }
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (blackListedEvents) {
                // check black list
                for (var i = 0; i < blackListedEvents.length; i++) {
                  if (eventName === blackListedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          function timer() {
            try {
              task.invoke.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              if (!(task.data && task.data.isPeriodic)) {
                if (typeof data.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[data.handleId];
                } else if (data.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  data.handleId[taskSymbol] = null;
                }
              }
            }
          }

          data.args[0] = timer;
          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative(task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }

        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
    });
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./car-scroller/car-scroller.component */
    "./src/app/car-scroller/car-scroller.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./start-scene/start-scene.component */
    "./src/app/start-scene/start-scene.component.ts");
    /* harmony import */


    var _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-wrapper/video-wrapper.component */
    "./src/app/video-wrapper/video-wrapper.component.ts");
    /* harmony import */


    var _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./first-scene/first-scene.component */
    "./src/app/first-scene/first-scene.component.ts");
    /* harmony import */


    var _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./second-scene/second-scene.component */
    "./src/app/second-scene/second-scene.component.ts");
    /* harmony import */


    var _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./third-scene/third-scene.component */
    "./src/app/third-scene/third-scene.component.ts");
    /* harmony import */


    var _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./closing-scene/closing-scene.component */
    "./src/app/closing-scene/closing-scene.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-car-scroller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-start-scene");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-video-wrapper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-first-scene");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-second-scene", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("discoverPath", function AppComponent_div_0_Template_app_second_scene_discoverPath_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.discoverPath();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-third-scene");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-closing-scene");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-navbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.discoveringPathSuccess = true;
        this.dragAndDropSuccess = false;
        this.isNotMobile = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
          this.isNotMobile = !isMobileDevice;
        }
      }, {
        key: "discoverPath",
        value: function discoverPath() {
          this.discoveringPathSuccess = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      inputs: {
        discoveringPathSuccess: "discoveringPathSuccess",
        dragAndDropSuccess: "dragAndDropSuccess"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "animate__animated animate__fadeIn animate__slow", 4, "ngIf"], [1, "animate__animated", "animate__fadeIn", "animate__slow"], [3, "discoverPath"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 11, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotMobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_2__["CarScrollerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_4__["StartSceneComponent"], _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["VideoWrapperComponent"], _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_6__["FirstSceneComponent"], _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_7__["SecondSceneComponent"], _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_8__["ThirdSceneComponent"], _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_9__["ClosingSceneComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, {
        discoveringPathSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dragAndDropSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./car-scroller/car-scroller.component */
    "./src/app/car-scroller/car-scroller.component.ts");
    /* harmony import */


    var _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video-wrapper/video-wrapper.component */
    "./src/app/video-wrapper/video-wrapper.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./first-scene/first-scene.component */
    "./src/app/first-scene/first-scene.component.ts");
    /* harmony import */


    var _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./second-scene/second-scene.component */
    "./src/app/second-scene/second-scene.component.ts");
    /* harmony import */


    var _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./third-scene/third-scene.component */
    "./src/app/third-scene/third-scene.component.ts");
    /* harmony import */


    var _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./closing-scene/closing-scene.component */
    "./src/app/closing-scene/closing-scene.component.ts");
    /* harmony import */


    var _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./start-scene/start-scene.component */
    "./src/app/start-scene/start-scene.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [HTMLCanvasElement],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_5__["CarScrollerComponent"], _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["VideoWrapperComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_8__["FirstSceneComponent"], _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_9__["SecondSceneComponent"], _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_10__["ThirdSceneComponent"], _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_11__["ClosingSceneComponent"], _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_12__["StartSceneComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _car_scroller_car_scroller_component__WEBPACK_IMPORTED_MODULE_5__["CarScrollerComponent"], _video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["VideoWrapperComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _first_scene_first_scene_component__WEBPACK_IMPORTED_MODULE_8__["FirstSceneComponent"], _second_scene_second_scene_component__WEBPACK_IMPORTED_MODULE_9__["SecondSceneComponent"], _third_scene_third_scene_component__WEBPACK_IMPORTED_MODULE_10__["ThirdSceneComponent"], _closing_scene_closing_scene_component__WEBPACK_IMPORTED_MODULE_11__["ClosingSceneComponent"], _start_scene_start_scene_component__WEBPACK_IMPORTED_MODULE_12__["StartSceneComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [HTMLCanvasElement],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/car-scroller/car-scroller.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/car-scroller/car-scroller.component.ts ***!
    \********************************************************/

  /*! exports provided: CarScrollerComponent */

  /***/
  function srcAppCarScrollerCarScrollerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarScrollerComponent", function () {
      return CarScrollerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__); // tslint:disable-next-line: quotemark


    var CarScrollerComponent =
    /*#__PURE__*/
    function () {
      function CarScrollerComponent() {
        _classCallCheck(this, CarScrollerComponent);

        this.scrollPercentage = 0;
      }

      _createClass(CarScrollerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateMovable();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.scrollPercentage = this.refreshPercentage();
        }
      }, {
        key: "doSomethingOnWindowsScroll",
        value: function doSomethingOnWindowsScroll($event) {
          this.scrollPercentage = this.refreshPercentage();
          this.updateAnimation();
          this.updateMovable();
        }
      }, {
        key: "refreshPercentage",
        value: function refreshPercentage() {
          var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var documentHeight = jquery__WEBPACK_IMPORTED_MODULE_1__(document).height();
          var homeHeight = jquery__WEBPACK_IMPORTED_MODULE_1__('#home-container').height() + jquery__WEBPACK_IMPORTED_MODULE_1__('#start-scene-container').height();
          var scrollPositionRelative = (scrollPosition - homeHeight) / (documentHeight - viewportHeight - homeHeight);
          var percentageResult = scrollPosition - homeHeight < 0 ? 0 : scrollPositionRelative;
          return percentageResult;
        }
      }, {
        key: "updateMovable",
        value: function updateMovable() {
          var fittingFactor = 1 - (jquery__WEBPACK_IMPORTED_MODULE_1__('.movable').width() + 80) / jquery__WEBPACK_IMPORTED_MODULE_1__('#car').width();
          var percentage = this.scrollPercentage * 100 * fittingFactor + '%';
          jquery__WEBPACK_IMPORTED_MODULE_1__('.movable').css({
            left: percentage
          });
        }
      }, {
        key: "updateAnimation",
        value: function updateAnimation() {
          if (this.scrollPercentage > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').addClass('animate__slideInDown');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').removeClass('animate__slideOutUp');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').addClass('animate__slideOutUp');
            jquery__WEBPACK_IMPORTED_MODULE_1__('#navigation-bar').removeClass('animate__slideInDown');
          }
        }
      }]);

      return CarScrollerComponent;
    }();

    CarScrollerComponent.ɵfac = function CarScrollerComponent_Factory(t) {
      return new (t || CarScrollerComponent)();
    };

    CarScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarScrollerComponent,
      selectors: [["app-car-scroller"]],
      hostBindings: function CarScrollerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarScrollerComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function CarScrollerComponent_scroll_HostBindingHandler($event) {
            return ctx.doSomethingOnWindowsScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 4,
      vars: 0,
      consts: [["id", "navigation-bar", 1, "navbar", "fixed-top", "navbar-light", "bg-light", "animate__animated", "animate__faster", "animate__slideOutUp"], ["id", "car"], ["src", "assets/navigation-bar/stepper.png", 1, "stepper"], ["src", "assets/navigation-bar/car.png", 1, "fixed-position", "movable"]],
      template: function CarScrollerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fixed-position[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n  top: 30%;\r\n  position: absolute;\r\n}\r\n\r\n.movable[_ngcontent-%COMP%]{\r\n  z-index: 4;\r\n  margin: 0px 30px;\r\n}\r\n\r\n#navigation-bar[_ngcontent-%COMP%]{\r\n  height: 110px;\r\n  padding: 0px!important;\r\n}\r\n\r\n#car[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.stepper[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 110px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLXNjcm9sbGVyL2Nhci1zY3JvbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jYXItc2Nyb2xsZXIvY2FyLXNjcm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtcG9zaXRpb257XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdG9wOiAzMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubW92YWJsZXtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbjogMHB4IDMwcHg7XHJcbn1cclxuXHJcbiNuYXZpZ2F0aW9uLWJhcntcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdGVwcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-car-scroller',
          templateUrl: './car-scroller.component.html',
          styleUrls: ['./car-scroller.component.css']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        doSomethingOnWindowsScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/closing-scene/closing-scene.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/closing-scene/closing-scene.component.ts ***!
    \**********************************************************/

  /*! exports provided: ClosingSceneComponent */

  /***/
  function srcAppClosingSceneClosingSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClosingSceneComponent", function () {
      return ClosingSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClosingSceneComponent =
    /*#__PURE__*/
    function () {
      function ClosingSceneComponent() {
        _classCallCheck(this, ClosingSceneComponent);
      }

      _createClass(ClosingSceneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClosingSceneComponent;
    }();

    ClosingSceneComponent.ɵfac = function ClosingSceneComponent_Factory(t) {
      return new (t || ClosingSceneComponent)();
    };

    ClosingSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClosingSceneComponent,
      selectors: [["app-closing-scene"]],
      decls: 18,
      vars: 0,
      consts: [["id", "closing-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "assets/finals/closing-scene.png", 1, "img-fluid", "w-100"], [1, "row", "mx-0", "relative-row"], [1, "floating-buttons-selection"], ["id", "download-button", "href", "https://everisgroup-my.sharepoint.com/:f:/g/personal/egarccor_everis_com/Em1knhcP3M9ErwCe1R42FZUB7QuwcYyg6TKERivNmjWIGw?e=2kcRyd", "target", "_blank", 1, "floating-effect"], ["src", "assets/buttons/drone.png", 1, "floating-button"], ["id", "video-button", "data-toggle", "modal", "data-target", "#videoModal", 1, "sound-effect"], ["src", "assets/buttons/pantalla.png", 1, "floating-button"], ["src", "assets/finals/closing-scene-minigame.png", 1, "img-fluid", "w-100"], ["id", "videoModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "videoModalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://player.vimeo.com/video/427336620", "frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", "", 1, "embed-responsive-item"]],
      template: function ClosingSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".modal-dialog[_ngcontent-%COMP%] {\r\n  max-width: 80%;\r\n}\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  border-radius: 15px;\r\n}\r\n#videoModal[_ngcontent-%COMP%]{\r\n  background-color:rgba(0, 0, 0, 0.7);\r\n}\r\n.close-section-button[_ngcontent-%COMP%]{\r\n  margin: 30px;\r\n}\r\n.add-inferior-space[_ngcontent-%COMP%]{\r\n  margin-bottom: 40px;\r\n}\r\n.relative-row[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n#download-button[_ngcontent-%COMP%]{\r\n  left: 17%;\r\n  top: 27%;\r\n  position: inherit;\r\n}\r\n#email-button[_ngcontent-%COMP%]{\r\n  left: 42%;\r\n  top: 68%;\r\n  position: inherit;\r\n}\r\n#video-button[_ngcontent-%COMP%]{\r\n  left: 45%;\r\n  top: 82%;\r\n  position: inherit;\r\n}\r\n.title-download[_ngcontent-%COMP%]{\r\n  margin-bottom: 40px;\r\n  margin-top: 80px;\r\n}\r\n.download-button[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  background-color: #ea5d1a;\r\n  margin-right: 40px;\r\n  color: #ffffff;\r\n}\r\n.contact-button[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: solid 1px #ea5d1a;\r\n  color: #ea5d1a;\r\n}\r\n.text-buttons[_ngcontent-%COMP%]{\r\n  padding: 12px 35px;\r\n  font-weight: bold;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-family: \"SeatBcn-Regular\";\r\n}\r\n.floating-buttons-selection[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 5;\r\n  background-color: transparent;\r\n}\r\n.floating-button[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n\toverflow: hidden;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.floating-button[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.15);\r\n}\r\n.image-button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.floating-effect[_ngcontent-%COMP%]{\r\n  transform: translatey(0px);\r\n  -webkit-animation: float 3s ease-in-out infinite;\r\n          animation: float 3s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes float {\r\n\t0% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translatey(-40px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n}\r\n@keyframes float {\r\n\t0% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translatey(-40px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n}\r\n.vibrate-effect[_ngcontent-%COMP%]{\r\n  transform: translatex(0px);\r\n  -webkit-animation: vibrate 2s ease-in-out infinite;\r\n          animation: vibrate 2s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes vibrate {\r\n\t0% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t10% {\r\n\t\ttransform: translatex(5px);\r\n  }\r\n  20% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n}\r\n@keyframes vibrate {\r\n\t0% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t10% {\r\n\t\ttransform: translatex(5px);\r\n  }\r\n  20% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatex(0px);\r\n\t}\r\n}\r\n.sound-effect[_ngcontent-%COMP%]{\r\n  transform: scale(1);\r\n  -webkit-animation: sound 1s ease-in-out infinite;\r\n          animation: sound 1s ease-in-out infinite;\r\n}\r\n@-webkit-keyframes sound {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t15% {\r\n\t\ttransform: scale(1.1);\r\n  }\r\n  30% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n  100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes sound {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t15% {\r\n\t\ttransform: scale(1.1);\r\n  }\r\n  30% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n  100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n.floating-effect[_ngcontent-%COMP%]:hover, .vibrate-effect[_ngcontent-%COMP%]:hover, .rotate-effect[_ngcontent-%COMP%]:hover, .sound-effect[_ngcontent-%COMP%]:hover{\r\n  -webkit-animation-play-state: paused;\r\n          animation-play-state: paused;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvc2luZy1zY2VuZS9jbG9zaW5nLXNjZW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHNCQUFzQjtDQUN2QixnQkFBZ0I7RUFDZixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGdEQUF3QztVQUF4Qyx3Q0FBd0M7QUFDMUM7QUFDQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEO0FBVkE7Q0FDQztFQUNDLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsNEJBQTRCO0NBQzdCO0NBQ0E7RUFDQywwQkFBMEI7Q0FDM0I7QUFDRDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGtEQUEwQztVQUExQywwQ0FBMEM7QUFDNUM7QUFDQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQywwQkFBMEI7RUFDMUI7RUFDQTtFQUNBLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFiQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQywwQkFBMEI7RUFDMUI7RUFDQTtFQUNBLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDO0FBQ0E7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MscUJBQXFCO0VBQ3JCO0VBQ0E7RUFDQSxtQkFBbUI7Q0FDcEI7RUFDQztFQUNBLG1CQUFtQjtDQUNwQjtBQUNEO0FBYkE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MscUJBQXFCO0VBQ3JCO0VBQ0E7RUFDQSxtQkFBbUI7Q0FDcEI7RUFDQztFQUNBLG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0E7Ozs7RUFJRSxvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY2xvc2luZy1zY2VuZS9jbG9zaW5nLXNjZW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZGlhbG9nIHtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4jdmlkZW9Nb2RhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG4uY2xvc2Utc2VjdGlvbi1idXR0b257XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbi5hZGQtaW5mZXJpb3Itc3BhY2V7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4ucmVsYXRpdmUtcm93e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jZG93bmxvYWQtYnV0dG9ue1xyXG4gIGxlZnQ6IDE3JTtcclxuICB0b3A6IDI3JTtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4jZW1haWwtYnV0dG9ue1xyXG4gIGxlZnQ6IDQyJTtcclxuICB0b3A6IDY4JTtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4jdmlkZW8tYnV0dG9ue1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB0b3A6IDgyJTtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG4udGl0bGUtZG93bmxvYWR7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5kb3dubG9hZC1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1ZDFhO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdC1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZWE1ZDFhO1xyXG4gIGNvbG9yOiAjZWE1ZDFhO1xyXG59XHJcbi50ZXh0LWJ1dHRvbnN7XHJcbiAgcGFkZGluZzogMTJweCAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogXCJTZWF0QmNuLVJlZ3VsYXJcIjtcclxufVxyXG4uZmxvYXRpbmctYnV0dG9ucy1zZWxlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZmxvYXRpbmctYnV0dG9uIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmZsb2F0aW5nLWJ1dHRvbjpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG59XHJcbi5pbWFnZS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uZmxvYXRpbmctZWZmZWN0e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcblx0fVxyXG5cdDUwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTQwcHgpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG5cdH1cclxufVxyXG4udmlicmF0ZS1lZmZlY3R7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDBweCk7XHJcbiAgYW5pbWF0aW9uOiB2aWJyYXRlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgdmlicmF0ZSB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV4KDBweCk7XHJcblx0fVxyXG5cdDEwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoNXB4KTtcclxuICB9XHJcbiAgMjAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleCgwcHgpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleCgwcHgpO1xyXG5cdH1cclxufVxyXG4uc291bmQtZWZmZWN0e1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgYW5pbWF0aW9uOiBzb3VuZCAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNvdW5kIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdH1cclxuXHQxNSUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICAzMCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHR9XHJcbiAgMTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdH1cclxufVxyXG4uZmxvYXRpbmctZWZmZWN0OmhvdmVyLFxyXG4udmlicmF0ZS1lZmZlY3Q6aG92ZXIsXHJcbi5yb3RhdGUtZWZmZWN0OmhvdmVyLFxyXG4uc291bmQtZWZmZWN0OmhvdmVye1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClosingSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-closing-scene',
          templateUrl: './closing-scene.component.html',
          styleUrls: ['./closing-scene.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/first-scene/dragObject.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/first-scene/dragObject.component.ts ***!
    \*****************************************************/

  /*! exports provided: DragObject */

  /***/
  function srcAppFirstSceneDragObjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragObject", function () {
      return DragObject;
    });

    var DragObject =
    /*#__PURE__*/
    function () {
      function DragObject(x, y, w, h) {
        var _this3 = this;

        _classCallCheck(this, DragObject);

        this.contains = function (x, y) {
          return _this3.x <= x && x <= _this3.x + _this3.width && _this3.y <= y && y <= _this3.y + _this3.height;
        };

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.dragging = false;
        this.dropped = false;
      }

      _createClass(DragObject, [{
        key: "getCoordinates",
        value: function getCoordinates() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }, {
        key: "setCoordinates",
        value: function setCoordinates(x, y) {
          this.x = x;
          this.y = y;
        }
      }, {
        key: "getWidthAndHeight",
        value: function getWidthAndHeight() {
          return {
            width: this.width,
            height: this.height
          };
        }
      }, {
        key: "isDragging",
        value: function isDragging() {
          return this.dragging;
        }
      }, {
        key: "drag",
        value: function drag() {
          this.dragging = true;
        }
      }, {
        key: "stopDragging",
        value: function stopDragging() {
          this.dragging = false;
        }
      }, {
        key: "isDropped",
        value: function isDropped() {
          return this.dropped;
        }
      }, {
        key: "drop",
        value: function drop() {
          this.dropped = true;
        }
      }]);

      return DragObject;
    }();
    /***/

  },

  /***/
  "./src/app/first-scene/dropZone.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/first-scene/dropZone.component.ts ***!
    \***************************************************/

  /*! exports provided: DropZone */

  /***/
  function srcAppFirstSceneDropZoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropZone", function () {
      return DropZone;
    });

    var DropZone =
    /*#__PURE__*/
    function () {
      function DropZone(x, y, w, h) {
        var _this4 = this;

        _classCallCheck(this, DropZone);

        this.contains = function (x, y) {
          return _this4.x <= x && x <= _this4.x + _this4.width && _this4.y <= y && y <= _this4.y + _this4.height;
        };

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.full = false;
      }

      _createClass(DropZone, [{
        key: "getCoordinates",
        value: function getCoordinates() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }, {
        key: "getWidthAndHeight",
        value: function getWidthAndHeight() {
          return {
            width: this.width,
            height: this.height
          };
        }
      }, {
        key: "isFull",
        value: function isFull() {
          return this.full;
        }
      }, {
        key: "fill",
        value: function fill() {
          this.full = true;
        }
      }, {
        key: "empty",
        value: function empty() {
          this.full = false;
        }
      }]);

      return DropZone;
    }();
    /***/

  },

  /***/
  "./src/app/first-scene/first-scene.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/first-scene/first-scene.component.ts ***!
    \******************************************************/

  /*! exports provided: FirstSceneComponent */

  /***/
  function srcAppFirstSceneFirstSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstSceneComponent", function () {
      return FirstSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dropZone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dropZone.component */
    "./src/app/first-scene/dropZone.component.ts");
    /* harmony import */


    var _dragObject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dragObject.component */
    "./src/app/first-scene/dragObject.component.ts");

    var _c0 = ["canvas"];

    var FirstSceneComponent =
    /*#__PURE__*/
    function () {
      function FirstSceneComponent() {
        _classCallCheck(this, FirstSceneComponent);

        this.finishLoadSuitcase = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropZones = [];
        this.dragObjects = [];
        this.isDragging = false;
        this.suitcases = [];
        this.counterSuitcase = 0;
      }

      _createClass(FirstSceneComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          this.canvasEl = this.canvas.nativeElement;
          this.cx = this.canvasEl.getContext('2d');

          document.getElementById('imatge').onload = function () {
            var width = document.getElementById('canvas').offsetWidth;
            var height = document.getElementById('canvas').offsetHeight;
            height = document.getElementById('imatge').offsetHeight; // set the width and height

            _this5.canvasEl.width = width;
            _this5.canvasEl.height = height;
            var rect = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this5.canvasEl.width / 2 + _this5.canvasEl.width / 4.31, _this5.canvasEl.height / 2 + _this5.canvasEl.height / 9.3, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);
            var rect1 = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this5.canvasEl.width / 2 + _this5.canvasEl.width / 3.5, _this5.canvasEl.height / 2 + _this5.canvasEl.height / 9.3, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);
            var rect2 = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this5.canvasEl.width / 2 + _this5.canvasEl.width / 4.31, _this5.canvasEl.height / 2 + _this5.canvasEl.height / 4.6, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);
            var rect3 = new _dropZone_component__WEBPACK_IMPORTED_MODULE_1__["DropZone"](_this5.canvasEl.width / 2 + _this5.canvasEl.width / 3.5, _this5.canvasEl.height / 2 + _this5.canvasEl.height / 4.6, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);

            _this5.dropZones.push(rect);

            _this5.dropZones.push(rect1);

            _this5.dropZones.push(rect2);

            _this5.dropZones.push(rect3);

            var drag1 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this5.canvasEl.width / 2.302, _this5.canvasEl.height / 3.01, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);
            var drag2 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this5.canvasEl.width / 2.302, _this5.canvasEl.height / 2.1, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);
            var drag3 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this5.canvasEl.width / 2.302, _this5.canvasEl.height / 2 + _this5.canvasEl.height / 8.3, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);
            var drag4 = new _dragObject_component__WEBPACK_IMPORTED_MODULE_2__["DragObject"](_this5.canvasEl.width / 2.302, _this5.canvasEl.height / 2 + _this5.canvasEl.height / 3.73, _this5.canvasEl.width / 21.9, _this5.canvasEl.height / 10);

            _this5.dragObjects.push(drag1);

            _this5.dragObjects.push(drag2);

            _this5.dragObjects.push(drag3);

            _this5.dragObjects.push(drag4);

            _this5.draw();
          };

          for (var i = 0; i < 4; i++) {
            this.suitcases[i] = new Image();
            this.suitcases[i].src = 'assets/suitcases/maleta' + (i + 1).toString() + '.png'; // this.suitcases[i].onload = () => { console.log('loaded' + i); };
          } // get the context


          var cx = this.cx; // set some default properties about the line

          this.cx.lineWidth = 3;
          this.cx.lineCap = 'round';
          this.cx.strokeStyle = '#000'; // we'll implement this method to start capturing mouse events

          this.captureEvents(this.canvasEl);
        }
      }, {
        key: "draw",
        value: function draw() {
          this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);

          for (var i = 0; i < this.dropZones.length; i++) {
            this.cx.fillStyle = '#ffffff00'; //this.cx.fillStyle = '#ff0000';

            this.cx.fillRect(this.dropZones[i].getCoordinates().x, this.dropZones[i].getCoordinates().y, this.dropZones[i].getWidthAndHeight().width, this.dropZones[i].getWidthAndHeight().height);
          }

          var colors = ['#8ececf', '#b7d8aa', '#ffde4a', '#d1b8c7'];

          for (var _i4 = 0; _i4 < this.dragObjects.length; _i4++) {
            if (this.suitcases != null && this.suitcases[_i4] != null) {
              this.cx.drawImage(this.suitcases[_i4], this.dragObjects[_i4].getCoordinates().x, this.dragObjects[_i4].getCoordinates().y, this.dragObjects[_i4].getWidthAndHeight().width, this.dragObjects[_i4].getWidthAndHeight().height);
            }
          }
        }
      }, {
        key: "captureEvents",
        value: function captureEvents(canvasEl) {
          // this will capture all mousedown events from the canvas element
          // listen for mouse events
          this.canvasEl.onmousedown = this.myDown.bind(this);
          this.canvasEl.onmouseup = this.myUp.bind(this);
          this.canvasEl.onmousemove = this.myMove.bind(this);
        }
      }, {
        key: "myDown",
        value: function myDown(e) {
          // incase the context is not set
          e.preventDefault();
          e.stopPropagation();

          if (!this.cx) {
            return;
          }

          var rect = this.canvasEl.getBoundingClientRect();
          var currentPos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
          this.isDragging = false;

          for (var i = 0; i < this.dragObjects.length; i++) {
            if (this.dragObjects[i].isDropped()) {
              continue;
            }

            if (this.dragObjects[i].contains(currentPos.x, currentPos.y)) {
              this.isDragging = true;
              this.dragObjects[i].drag();
            }
          }

          this.position = currentPos;
        }
      }, {
        key: "myUp",
        value: function myUp(e) {
          e.preventDefault();
          e.stopPropagation(); // clear all the dragging flags

          for (var i = 0; i < this.dropZones.length; i++) {
            if (this.dropZones[i].isFull()) {
              continue;
            }

            if (this.dropZones[i].contains(this.position.x, this.position.y)) {
              this.dropZones[i].fill();

              for (var j = 0; j < this.dragObjects.length; j++) {
                if (this.dragObjects[j].isDragging()) {
                  this.dragObjects[j].drop();
                  this.drop(this.dragObjects[j], this.dropZones[i]);
                  this.counterSuitcase++;

                  if (this.counterSuitcase >= 4) {
                    $('#imatge').attr('src', '../../assets/finals/first-scene-minigame_on.png');
                    this.finishLoadSuitcase.emit();
                  }
                }
              }
            }
          }

          this.isDragging = false;

          for (var _i5 = 0; _i5 < this.dragObjects.length; _i5++) {
            this.dragObjects[_i5].stopDragging();
          }
        }
      }, {
        key: "myMove",
        value: function myMove(e) {
          // if we're dragging anything...
          if (this.isDragging) {
            // tell the browser we're handling this mouse event
            e.preventDefault();
            e.stopPropagation(); // get the current mouse position

            var rect = this.canvasEl.getBoundingClientRect();
            var currentPos = {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            }; // calculate the distance the mouse has moved
            // since the last mousemove

            var dx = currentPos.x - this.position.x;
            var dy = currentPos.y - this.position.y; // move each rect that isDragging
            // by the distance the mouse has moved
            // since the last mousemove

            for (var i = 0; i < this.dragObjects.length; i++) {
              var r = this.dragObjects[i];

              if (r.isDragging()) {
                r.setCoordinates(r.getCoordinates().x + dx, r.getCoordinates().y + dy);
              }
            } // redraw the scene with the new rect positions


            this.draw(); // reset the starting mouse position for the next mousemove

            this.position = currentPos;
          }
        }
      }, {
        key: "drop",
        value: function drop(draggedObject, dropZone) {
          // console.log(draggedObject.isDropped());
          draggedObject.setCoordinates(dropZone.getCoordinates().x, dropZone.getCoordinates().y);
          this.draw(); // this.animate(draggedObject, dropZone);
        }
      }, {
        key: "animate",
        value: function animate(draggedObject, dropZone) {
          if (!draggedObject.getCoordinates().x === dropZone.getCoordinates().x || !draggedObject.getCoordinates().y === dropZone.getCoordinates().y) {
            var mx = dropZone.getCoordinates().x - draggedObject.getCoordinates().x;
            var my = dropZone.getCoordinates().y - draggedObject.getCoordinates().y;
            console.log(mx, my);

            if (mx < 0 && my < 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / -mx, draggedObject.getCoordinates().y + my / -my);
            } else if (mx > 0 && my < 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / mx, draggedObject.getCoordinates().y + my / -my);
            } else if (mx < 0 && my > 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / -mx, draggedObject.getCoordinates().y + my / my);
            } else if (mx > 0 && my > 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / mx, draggedObject.getCoordinates().y + my / my);
            } else if (mx === 0 && my < 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x, draggedObject.getCoordinates().y + my / -my);
            } else if (mx === 0 && my > 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x, draggedObject.getCoordinates().y + my / my);
            } else if (mx < 0 && my === 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / -mx, draggedObject.getCoordinates().y);
            } else if (mx > 0 && my === 0) {
              draggedObject.setCoordinates(draggedObject.getCoordinates().x + mx / mx, draggedObject.getCoordinates().y);
            }

            this.draw();
            this.loop = requestAnimationFrame(this.animate.bind(this)(draggedObject, dropZone));
          } else {
            cancelAnimationFrame(this.loop);
          }
        }
      }]);

      return FirstSceneComponent;
    }();

    FirstSceneComponent.ɵfac = function FirstSceneComponent_Factory(t) {
      return new (t || FirstSceneComponent)();
    };

    FirstSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstSceneComponent,
      selectors: [["app-first-scene"]],
      viewQuery: function FirstSceneComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      outputs: {
        finishLoadSuitcase: "finishLoadSuitcase"
      },
      decls: 10,
      vars: 0,
      consts: [["id", "first-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "assets/finals/first-scene.png", 1, "img-fluid", "w-100"], ["id", "box"], ["src", "assets/finals/first-scene-minigame.png", "id", "imatge", 1, "img-fluid", "w-100"], ["id", "canvas"], ["canvas", ""]],
      template: function FirstSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: inherit;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  position: absolute;\r\n  left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3Qtc2NlbmUvZmlyc3Qtc2NlbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvZmlyc3Qtc2NlbmUvZmlyc3Qtc2NlbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuY2FudmFzIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-first-scene',
          templateUrl: './first-scene.component.html',
          styleUrls: ['./first-scene.component.css']
        }]
      }], null, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        finishLoadSuitcase: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var parallax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! parallax-js */
    "./node_modules/parallax-js/dist/parallax.js");
    /* harmony import */


    var parallax_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_1__);

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var scene = document.getElementById('scene');
          var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(scene, {
            relativeInput: true,
            hoverOnly: true,
            frictionY: 0.15,
            frictionX: 0.15,
            limitY: false,
            limitX: 0
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 27,
      vars: 0,
      consts: [["id", "home-container", 1, "container-fluid", "px-0"], ["id", "scene"], ["data-depth", "0.10", 1, "parallax-layer"], [1, "background", "layer"], ["data-depth", "0.20", 1, "parallax-layer"], [1, "mountains-3", "layer"], ["data-depth", "0.30", 1, "parallax-layer"], [1, "mountains-2", "layer"], ["data-depth", "0.50", 1, "parallax-layer"], [1, "mountains-1", "layer"], ["data-depth", "0.85", 1, "parallax-layer"], [1, "car", "layer"], [1, "grass", "layer"], ["data-depth", "0.00", 1, "parallax-layer"], [1, "filter", "layer"], ["id", "text-home-layer", "data-depth", "0.0", 1, "parallax-layer"], [1, "title-parallax"], [1, "subtitle-parallax"], [1, "logo-parallax"], ["src", "assets/logos/black.png", "width", "129", "height", "auto", "alt", "everis-logo", 1, "logo-home"], ["src", "assets/logos/seat.png", "width", "auto", "height", "72", "alt", "seat-logo", 1, "logo-home"], ["src", "assets/logos/cupra.png", "width", "auto", "height", "72", "alt", "seat-logo", 1, "logo-home"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hello, SEAT!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "You can trust on everis as your co-pilot for the next years.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We will guide you in this amazing trip!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#scene[_ngcontent-%COMP%]{\r\n  height: 960px;\r\n  background-color: white;\r\n}\r\n\r\n.parallax-layer[_ngcontent-%COMP%]{\r\n  height: 960px;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.layer[_ngcontent-%COMP%]{\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n  background: url('PLANO6.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: -5%;\r\n}\r\n\r\n.mountains-3[_ngcontent-%COMP%] {\r\n  background: url('PLANO5.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.mountains-2[_ngcontent-%COMP%] {\r\n  background: url('PLANO4.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.mountains-1[_ngcontent-%COMP%] {\r\n  background: url('PLANO3.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.car[_ngcontent-%COMP%] {\r\n  background: url('PLANO2.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.grass[_ngcontent-%COMP%] {\r\n  background: url('PLANO1.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  background: url('CAPA_FILTRO.png') no-repeat 50% 100%;\r\n  background-size: cover;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n.title-parallax[_ngcontent-%COMP%]{\r\n  color: #0f0f0f;\r\n  text-align: center;\r\n  font-size: 68px;\r\n}\r\n\r\n.subtitle-parallax[_ngcontent-%COMP%]{\r\n  color: #0f0f0f;\r\n  text-align: center;\r\n  font-size: 37px;\r\n  margin: 40px 0px;\r\n}\r\n\r\n.logo-parallax[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding-top: 50px;\r\n}\r\n\r\n.logo-home[_ngcontent-%COMP%]{\r\n  margin: 0px 20px;\r\n}\r\n\r\n#text-home-layer[_ngcontent-%COMP%]{\r\n  top: 10%!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdEQUFvRTtFQUNwRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnREFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxxREFBeUU7RUFDekUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2NlbmV7XHJcbiAgaGVpZ2h0OiA5NjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmFsbGF4LWxheWVye1xyXG4gIGhlaWdodDogOTYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxheWVye1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BhcmFsbGF4L1BMQU5PNi5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IC01JTtcclxufVxyXG4ubW91bnRhaW5zLTMge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGFyYWxsYXgvUExBTk81LnBuZykgbm8tcmVwZWF0IDUwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb3VudGFpbnMtMiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9wYXJhbGxheC9QTEFOTzQucG5nKSBuby1yZXBlYXQgNTAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1vdW50YWlucy0xIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BhcmFsbGF4L1BMQU5PMy5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BhcmFsbGF4L1BMQU5PMi5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3Jhc3Mge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGFyYWxsYXgvUExBTk8xLnBuZykgbm8tcmVwZWF0IDUwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5maWx0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvcGFyYWxsYXgvQ0FQQV9GSUxUUk8ucG5nKSBuby1yZXBlYXQgNTAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZS1wYXJhbGxheHtcclxuICBjb2xvcjogIzBmMGYwZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUtcGFyYWxsYXh7XHJcbiAgY29sb3I6ICMwZjBmMGY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzdweDtcclxuICBtYXJnaW46IDQwcHggMHB4O1xyXG59XHJcblxyXG4ubG9nby1wYXJhbGxheHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWhvbWV7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuI3RleHQtaG9tZS1sYXllcntcclxuICB0b3A6IDEwJSFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 4,
      vars: 0,
      consts: [[1, "navbar", "navbar-light", "justify-end"], ["src", "assets/logos/black.png", "width", "106", "height", "auto", "alt", "everis-logo", 1, "navbar-logo"], ["src", "assets/logos/seat.png", "width", "auto", "height", "52", "alt", "seat-logo", 1, "navbar-logo"], ["src", "assets/logos/cupra.png", "width", "auto", "height", "52", "alt", "seat-logo", 1, "navbar-logo"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo[_ngcontent-%COMP%]{\r\n  margin: 0px 24px;\r\n}\r\n.justify-end[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n}\r\n.navbar-logo[_ngcontent-%COMP%]{\r\n  margin: 1.5rem 3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xyXG4gIG1hcmdpbjogMHB4IDI0cHg7XHJcbn1cclxuLmp1c3RpZnktZW5ke1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5uYXZiYXItbG9nb3tcclxuICBtYXJnaW46IDEuNXJlbSAzcmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/second-scene/rectangle.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/second-scene/rectangle.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyRect */

  /***/
  function srcAppSecondSceneRectangleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyRect", function () {
      return MyRect;
    });

    var MyRect = function MyRect(x, y, w, h) {
      var _this6 = this;

      _classCallCheck(this, MyRect);

      this.contains = function (x, y) {
        return _this6.x <= x && x <= _this6.x + _this6.width && _this6.y <= y && y <= _this6.y + _this6.height;
      };

      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    };
    /***/

  },

  /***/
  "./src/app/second-scene/second-scene.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/second-scene/second-scene.component.ts ***!
    \********************************************************/

  /*! exports provided: SecondSceneComponent */

  /***/
  function srcAppSecondSceneSecondSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondSceneComponent", function () {
      return SecondSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _rectangle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rectangle.component */
    "./src/app/second-scene/rectangle.component.ts");

    var _c0 = ["canvas"];

    var SecondSceneComponent =
    /*#__PURE__*/
    function () {
      function SecondSceneComponent() {
        _classCallCheck(this, SecondSceneComponent);

        this.discoverPath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentFrame = 0;
        this.updateInterval = 100; // in ms

        this.deltaFrame = 5;
        this.showingSpeedometer = true;
      }

      _createClass(SecondSceneComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.canvasEl = this.canvas.nativeElement;
          this.cx = this.canvasEl.getContext('2d');

          document.getElementById('imatge2').onload = function () {
            var width = document.getElementById('canvas').offsetWidth;
            var height = document.getElementById('canvas').offsetHeight;
            height = document.getElementById('imatge2').offsetHeight;
            _this7.canvasEl.width = width;
            _this7.canvasEl.height = height;
            var cx = _this7.cx; // set some default properties about the line

            _this7.cx.lineWidth = 3;
            _this7.cx.lineCap = 'round';
            _this7.cx.strokeStyle = '#000';
            var url = '../../assets/forest/borrable.png';
            var img = new Image();
            img.src = url;

            img.onload = function () {
              cx.drawImage(img, 0, 0, _this7.canvasEl.width, _this7.canvasEl.height);
            }; // we'll implement this method to start capturing mouse events


            _this7.captureEvents(_this7.canvasEl);
          };
        }
      }, {
        key: "captureEvents",
        value: function captureEvents(canvasEl) {
          var _this8 = this;

          // this will capture all mousedown events from the canvas element
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (e) {
            // after a mouse down, we'll record all mouse moves
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousemove').pipe( // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseup')), // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseleave')), // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])());
          })).subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect(); // previous and current position with the offset

            var prevPos = {
              x: res[0].clientX - rect.left,
              y: res[0].clientY - rect.top
            };
            var currentPos = {
              x: res[1].clientX - rect.left,
              y: res[1].clientY - rect.top
            }; // this method we'll implement soon to do the actual drawing

            _this8.drawOnCanvas(prevPos, currentPos);
          });
        }
      }, {
        key: "drawOnCanvas",
        value: function drawOnCanvas(prevPos, currentPos) {
          var rect = new _rectangle_component__WEBPACK_IMPORTED_MODULE_3__["MyRect"](this.canvasEl.width / 2 + this.canvasEl.width / 9, this.canvasEl.height - 150, this.canvasEl.width / 9, 150); // incase the context is not set

          if (!this.cx) {
            return;
          }

          this.cx.globalCompositeOperation = 'destination-out'; // start our drawing path

          this.cx.beginPath(); // we're drawing lines so we need a previous position

          if (prevPos) {
            this.cx.arc(currentPos.x, currentPos.y, 10, 0, 2 * Math.PI);
            this.cx.fill();
            this.cx.lineWidth = 100;
            this.cx.beginPath();
            this.cx.moveTo(prevPos.x, prevPos.y);
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();

            if (rect.contains(currentPos.x, currentPos.y)) {
              this.discoverPath.emit();
              this.canvas.nativeElement.classList.add('slow-hide');
              $('#speedometer').addClass('slow-hide');
              this.showingSpeedometer = false;
            }
          }
        }
      }, {
        key: "mouseup",
        value: function mouseup() {
          var _this9 = this;

          if (this.timeoutHandler) {
            clearInterval(this.timeoutHandler);
            this.timeoutHandler = setInterval(function () {
              if (_this9.currentFrame - _this9.deltaFrame >= 0) {
                _this9.currentFrame = _this9.currentFrame - _this9.deltaFrame;
              }

              var newPath = '../../assets/speedometer/' + (Math.floor(_this9.currentFrame / 10) + 1) + '.png';
              $('#speedometer').attr('src', newPath);
            }, this.updateInterval);
          }
        }
      }, {
        key: "mousedown",
        value: function mousedown() {
          var _this10 = this;

          clearInterval(this.timeoutHandler);
          this.timeoutHandler = setInterval(function () {
            if (_this10.currentFrame + _this10.deltaFrame < 100) {
              _this10.currentFrame = _this10.currentFrame + _this10.deltaFrame;
            }

            var newPath = '../../assets/speedometer/' + (Math.floor(_this10.currentFrame / 10) + 1) + '.png';
            $('#speedometer').attr('src', newPath);
          }, this.updateInterval);
        }
      }, {
        key: "mousemove",
        value: function mousemove(e) {
          if (this.showingSpeedometer) {
            var x = e.clientX - this.canvasEl.getBoundingClientRect().left;
            var y = e.clientY - this.canvasEl.getBoundingClientRect().top;
            $('#speedometer').css({
              left: x + 30,
              top: y - 60
            });
          }
        }
      }]);

      return SecondSceneComponent;
    }();

    SecondSceneComponent.ɵfac = function SecondSceneComponent_Factory(t) {
      return new (t || SecondSceneComponent)();
    };

    SecondSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondSceneComponent,
      selectors: [["app-second-scene"]],
      viewQuery: function SecondSceneComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      outputs: {
        discoverPath: "discoverPath"
      },
      decls: 10,
      vars: 0,
      consts: [["id", "second-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "assets/finals/second-scene.png", 1, "img-fluid", "w-100"], ["id", "second-scene-minigame"], ["id", "box"], ["id", "speedometer", "src", "assets/speedometer/1.png"], ["src", "assets/forest/fondo.png", "id", "imatge2", 1, "img-fluid", "w-100"], ["id", "canvas", 3, "mousedown", "mouseup", "mousemove"], ["canvas", ""]],
      template: function SecondSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "canvas", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SecondSceneComponent_Template_canvas_mousedown_8_listener() {
            return ctx.mousedown();
          })("mouseup", function SecondSceneComponent_Template_canvas_mouseup_8_listener() {
            return ctx.mouseup();
          })("mousemove", function SecondSceneComponent_Template_canvas_mousemove_8_listener($event) {
            return ctx.mousemove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  width: inherit;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\ncanvas.slow-hide[_ngcontent-%COMP%], #speedometer.slow-hide[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: opacity 1s;\r\n}\r\n\r\n#speedometer[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100px;\r\n  height: 100px;\r\n  pointer-events: none;\r\n  z-index: 20;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kLXNjZW5lL3NlY29uZC1zY2VuZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZWNvbmQtc2NlbmUvc2Vjb25kLXNjZW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuY2FudmFzLnNsb3ctaGlkZSwgI3NwZWVkb21ldGVyLnNsb3ctaGlkZSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG59XHJcblxyXG4jc3BlZWRvbWV0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-second-scene',
          templateUrl: './second-scene.component.html',
          styleUrls: ['./second-scene.component.css']
        }]
      }], null, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvas']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        discoverPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/start-scene/start-scene.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/start-scene/start-scene.component.ts ***!
    \******************************************************/

  /*! exports provided: StartSceneComponent */

  /***/
  function srcAppStartSceneStartSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartSceneComponent", function () {
      return StartSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StartSceneComponent =
    /*#__PURE__*/
    function () {
      function StartSceneComponent() {
        _classCallCheck(this, StartSceneComponent);
      }

      _createClass(StartSceneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartSceneComponent;
    }();

    StartSceneComponent.ɵfac = function StartSceneComponent_Factory(t) {
      return new (t || StartSceneComponent)();
    };

    StartSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartSceneComponent,
      selectors: [["app-start-scene"]],
      decls: 4,
      vars: 0,
      consts: [["id", "start-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "assets/finals/start-scene.png", 1, "img-fluid", "w-100"]],
      template: function StartSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LXNjZW5lL3N0YXJ0LXNjZW5lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start-scene',
          templateUrl: './start-scene.component.html',
          styleUrls: ['./start-scene.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/third-scene/third-scene.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/third-scene/third-scene.component.ts ***!
    \******************************************************/

  /*! exports provided: ThirdSceneComponent */

  /***/
  function srcAppThirdSceneThirdSceneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdSceneComponent", function () {
      return ThirdSceneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThirdSceneComponent =
    /*#__PURE__*/
    function () {
      function ThirdSceneComponent() {
        _classCallCheck(this, ThirdSceneComponent);

        this.flag = false;
        this.currentImage = 0;
      }

      _createClass(ThirdSceneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectOption",
        value: function selectOption(option) {
          if (this.currentImage !== option) {
            var newPath = '../../assets/roads/camino' + option + '.png';
            var element = document.querySelector('.floating-img');

            if (!this.flag) {
              $('.floating-img').attr('src', newPath);
              element.classList.add('animate__fadeIn');
              this.flag = true;
            } else {
              element.classList.remove('animate__fadeIn');
              element.classList.add('animate__fadeOut');
              element.addEventListener('animationend', function () {
                $('.floating-img').attr('src', newPath);
                element.classList.remove('animate__fadeOut');
              });
            }

            this.currentImage = option;
          }
        }
      }, {
        key: "fadeIn",
        value: function fadeIn() {
          if (this.flag) {
            var element = document.querySelector('.floating-img');
            element.classList.add('animate__fadeIn');
          }
        }
      }]);

      return ThirdSceneComponent;
    }();

    ThirdSceneComponent.ɵfac = function ThirdSceneComponent_Factory(t) {
      return new (t || ThirdSceneComponent)();
    };

    ThirdSceneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThirdSceneComponent,
      selectors: [["app-third-scene"]],
      decls: 34,
      vars: 0,
      consts: [["id", "third-scene-container", 1, "container-fluid", "px-0"], [1, "row", "mx-0"], [1, "col-12", "px-0"], ["src", "assets/finals/third-scene.png", 1, "img-fluid", "w-100"], ["id", "third-container-minigame", 1, "container-fluid", "px-0"], [1, "row", "mx-0", "relative-row"], [1, "floating-buttons-selection"], ["id", "button-road-1", "for", "rdo-1", 1, "btn-radio"], ["type", "radio", "id", "rdo-1", "name", "radio-grp", 3, "click"], ["width", "2rem", "height", "2rem", "viewBox", "0 0 20 20"], ["cx", "10", "cy", "10", "r", "9"], ["d", "M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z", 1, "inner"], ["d", "M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z", 1, "outer"], [1, "span-separation"], ["id", "button-road-2", "for", "rdo-2", 1, "btn-radio"], ["type", "radio", "id", "rdo-2", "name", "radio-grp", 3, "click"], ["id", "button-road-3", "for", "rdo-3", 1, "btn-radio"], ["type", "radio", "id", "rdo-3", "name", "radio-grp", 3, "click"], ["src", "assets/roads/general.png", 1, "img-fluid", "w-100"], ["src", "assets/roads/camino1.png", 1, "img-fluid", "w-100", "floating-img", "animate__animated", "animate__faster", 3, "load"]],
      template: function ThirdSceneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdSceneComponent_Template_input_click_8_listener() {
            return ctx.selectOption(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdSceneComponent_Template_input_click_16_listener() {
            return ctx.selectOption(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdSceneComponent_Template_input_click_24_listener() {
            return ctx.selectOption(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ThirdSceneComponent_Template_img_load_33_listener() {
            return ctx.fadeIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".floating-img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  float: left;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  opacity: 0%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.floating-buttons-selection[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 5;\r\n  text-align: right;\r\n}\r\n\r\n\r\n.span-separation[_ngcontent-%COMP%]{\r\n  margin-left: 1rem;\r\n}\r\n\r\n\r\n.relative-row[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n\r\n#button-road-1[_ngcontent-%COMP%]{\r\n  top: 10%;\r\n  right: 30%;\r\n  position: inherit;\r\n}\r\n\r\n\r\n#button-road-2[_ngcontent-%COMP%]{\r\n  top: 10%;\r\n  right: 20%;\r\n  position: inherit;\r\n}\r\n\r\n\r\n#button-road-3[_ngcontent-%COMP%]{\r\n  top: 10%;\r\n  right: 10%;\r\n  position: inherit;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  fill: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n  stroke-width: 2;\r\n  \r\n  stroke: black;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  \r\n  stroke: #eb71a3\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.inner[_ngcontent-%COMP%] {\r\n  stroke-width: 6;\r\n  stroke-dasharray: 19;\r\n  stroke-dashoffset: 19;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.outer[_ngcontent-%COMP%] {\r\n  stroke-width: 2;\r\n  stroke-dasharray: 57;\r\n  stroke-dashoffset: 57;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%]   path.inner[_ngcontent-%COMP%] {\r\n  stroke-dashoffset: 38;\r\n  transition-delay: 0.3s;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%]   path.outer[_ngcontent-%COMP%] {\r\n  stroke-dashoffset: 0;\r\n}\r\n\r\n\r\n.btn-radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhpcmQtc2NlbmUvdGhpcmQtc2NlbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztBQUNiOzs7QUFHQSx3Q0FBd0M7OztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBaUI7R0FBakIscUJBQWlCO09BQWpCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7OztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCO0FBQ0Y7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7OztBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOzs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdGhpcmQtc2NlbmUvdGhpcmQtc2NlbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZy1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3BhY2l0eTogMCU7XHJcbn1cclxuXHJcblxyXG4vKmh0dHBzOi8vY29kZXBlbi5pby9hdnN0b3JtL3Blbi9Od3lRRVgqL1xyXG4uZmxvYXRpbmctYnV0dG9ucy1zZWxlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNwYW4tc2VwYXJhdGlvbntcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnJlbGF0aXZlLXJvd3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNidXR0b24tcm9hZC0xe1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAzMCU7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNidXR0b24tcm9hZC0ye1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNidXR0b24tcm9hZC0ze1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4tcmFkaW8ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5idG4tcmFkaW8gc3ZnIHtcclxuICBmaWxsOiBub25lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmJ0bi1yYWRpbyBzdmcgY2lyY2xlIHtcclxuICBzdHJva2Utd2lkdGg6IDI7XHJcbiAgLyogc3Ryb2tlOiAjQzhDQ0Q0OyAqL1xyXG4gIHN0cm9rZTogYmxhY2s7XHJcbn1cclxuLmJ0bi1yYWRpbyBzdmcgcGF0aCB7XHJcbiAgLyogc3Ryb2tlOiAgI2VhNWQxYTsgKi9cclxuICBzdHJva2U6ICNlYjcxYTNcclxufVxyXG4uYnRuLXJhZGlvIHN2ZyBwYXRoLmlubmVyIHtcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTk7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE5O1xyXG59XHJcbi5idG4tcmFkaW8gc3ZnIHBhdGgub3V0ZXIge1xyXG4gIHN0cm9rZS13aWR0aDogMjtcclxuICBzdHJva2UtZGFzaGFycmF5OiA1NztcclxuICBzdHJva2UtZGFzaG9mZnNldDogNTc7XHJcbn1cclxuLmJ0bi1yYWRpbyBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYnRuLXJhZGlvIGlucHV0OmNoZWNrZWQgKyBzdmcgcGF0aCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uYnRuLXJhZGlvIGlucHV0OmNoZWNrZWQgKyBzdmcgcGF0aC5pbm5lciB7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM4O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLmJ0bi1yYWRpbyBpbnB1dDpjaGVja2VkICsgc3ZnIHBhdGgub3V0ZXIge1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG59XHJcbi5idG4tcmFkaW8gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdSceneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-third-scene',
          templateUrl: './third-scene.component.html',
          styleUrls: ['./third-scene.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/video-wrapper/video-wrapper.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/video-wrapper/video-wrapper.component.ts ***!
    \**********************************************************/

  /*! exports provided: VideoWrapperComponent */

  /***/
  function srcAppVideoWrapperVideoWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoWrapperComponent", function () {
      return VideoWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VideoWrapperComponent =
    /*#__PURE__*/
    function () {
      function VideoWrapperComponent() {
        _classCallCheck(this, VideoWrapperComponent);
      }

      _createClass(VideoWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoWrapperComponent;
    }();

    VideoWrapperComponent.ɵfac = function VideoWrapperComponent_Factory(t) {
      return new (t || VideoWrapperComponent)();
    };

    VideoWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoWrapperComponent,
      selectors: [["app-video-wrapper"]],
      decls: 2,
      vars: 0,
      consts: [[1, "embed-responsive", "embed-responsive-16by9", "full-video"], ["src", "https://player.vimeo.com/video/427305914", "frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", ""]],
      template: function VideoWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".full-video[_ngcontent-%COMP%] {\r\n  height: 768px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8td3JhcHBlci92aWRlby13cmFwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWRlby13cmFwcGVyL3ZpZGVvLXdyYXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXZpZGVvIHtcclxuICBoZWlnaHQ6IDc2OHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-wrapper',
          templateUrl: './video-wrapper.component.html',
          styleUrls: ['./video-wrapper.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Dev\rfp-seat\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
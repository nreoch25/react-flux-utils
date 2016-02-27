var assign = require('object-assign');
var EventEmitter = require('events');
var dispatcher = require('../dispatcher/AppDispatcher');
var CHANGE_EVENT = 'CHANGE';

var storeMethods = {
  init: function () {},
  set: function(data) {
    this._data = data;
  },
  all: function () {
    return this._data;
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  bind: function (actionType, actionFn) {
    if (this.actions[actionType]) {
      this.actions[actionType].push(actionFn);
    } else {
      this.actions[actionType] = [actionFn];
    }
  }
};

exports.extend = function(methods) {

  var store = {
    _data: [],
    actions: {}
  };

  assign(store, EventEmitter.prototype, storeMethods, methods);

  store.init();

  dispatcher.register(function(action) {
    console.log(action);
    if(store.actions[action.actionType]) {
      store.actions[action.actionType].forEach(function(fn) {
        fn.call(store, action.data);
        store.emitChange();
      });
    }
  });

  return store;

};
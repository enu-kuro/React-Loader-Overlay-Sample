var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var isLoading = false;

var LoadingStore = objectAssign({}, EventEmitter.prototype, {

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    isLoading: function(){
      return isLoading;
    }

});

LoadingStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.START_LOADING:
      isLoading = true;
      LoadingStore.emitChange();
    break;

    case ActionTypes.STOP_LOADING:
      isLoading = false;
      LoadingStore.emitChange();
    break;
    default:

  }
});

module.exports = LoadingStore;

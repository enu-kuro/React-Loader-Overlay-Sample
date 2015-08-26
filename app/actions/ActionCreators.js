import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
var ActionTypes = AppConstants.ActionTypes;
import RouterContainer from '../services/RouterContainer';

var ActionCreators = {

  startLoading() {
    AppDispatcher.dispatch({
      type: ActionTypes.START_LOADING
    });
  },

  stopLoading() {
    AppDispatcher.dispatch({
      type: ActionTypes.STOP_LOADING
    });
  },

  login() {
    console.log("login");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 2000);
    });
  },

  logout() {
    console.log("logout");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 2000);
    });
  }
};

export default ActionCreators;

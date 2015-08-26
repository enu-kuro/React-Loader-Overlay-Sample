import React from 'react';
import RouterContainer from '../services/RouterContainer';
import ActionCreators from '../actions/ActionCreators';

class Main extends React.Component {

  logout() {
    ActionCreators.startLoading();

    ActionCreators.login()
    .then(function(){
      ActionCreators.stopLoading();
      RouterContainer.get().transitionTo('/', {});
    });

  }

  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login successfully!</h1>
        <button type="button" className="btn btn-default" onClick={this.logout.bind(this)}>Logout</button>
    </div>
    );
  }
}

export default Main;

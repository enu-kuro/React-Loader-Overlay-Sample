import React from 'react';
import RouterContainer from '../services/RouterContainer';
import ActionCreators from '../actions/ActionCreators';

export default class Login extends React.Component {

  login() {
    ActionCreators.startLoading();

    ActionCreators.login()
    .then(function(){
      ActionCreators.stopLoading();
      RouterContainer.get().transitionTo('/main', {});
    });
  }

  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input type="text" className="form-control" id="username" placeholder="UserName" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

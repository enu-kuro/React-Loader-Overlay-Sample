import React from 'react';
import Router from 'react-router';
var { RouteHandler } = Router;
import Spinner from './Spinner.react';
import LoadingStore from '../stores/LoadingStore.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: false};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    LoadingStore.addChangeListener(this.onChange);
  }

  componentWillUnmount(){
    LoadingStore.removeChangeListener(this.onChange);
  }

  onChange(){
    this.setState({isLoading: LoadingStore.isLoading()});
  }

  render() {
    return (
      <div className="container">
        <Spinner isLoading={this.state.isLoading} />
        <header className="page-header">
          <h1>React Loader Overlay Sample</h1>
          <a href="https://github.com/quickleft/react-loader">react-loader Github page</a>

        </header>
        <RouteHandler/>
      </div>
    );
  }

}

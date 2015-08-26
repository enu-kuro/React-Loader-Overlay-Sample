import React, { PropTypes } from 'react/addons';
var Loader = require('react-loader');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

//fade in, outさせるにはCSSに以下の項目を追加する
/*
.spinner-enter {
  opacity: 0.01;
  transition: opacity .5s ease-in;
}
.spinner-enter.spinner-enter-active {
  opacity: 1;
}
.spinner-leave {
  opacity: 1;
  transition: opacity .5s ease-in;
}
.spinner-leave.spinner-leave-active {
  opacity: 0.01;
}
*/

class Spinner extends React.Component {

  static get propTypes() {
    return { isLoading: PropTypes.bool };
  }

  constructor(props){
    super(props);
  }

  get options() {
    return (
      {
        lines: 13,
        length: 20,
        width: 10,
        radius: 30,
        corners: 1,
        rotate: 0,
        direction: 1,
        color: '#fff',
        speed: 1,
        trail: 60
      }
    );
  }

  get styleForOverlay() {
    return (
      {
        background: 'rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        display: 'block'
      }
    );
  }

  render() {
    return (
      <ReactCSSTransitionGroup transitionName="spinner" transitionLeave={false}>
      {this.props.isLoading ?
          <div style={this.styleForOverlay}>
            <Loader key='Loader' options={this.options}></Loader>
          </div>
      : null}
      </ReactCSSTransitionGroup>
    );
  }

}

export default Spinner;

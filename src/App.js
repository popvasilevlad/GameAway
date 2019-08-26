import React from 'react';
import Header from './components/header/';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header data={this.props.data}/>
      </>
    );
  }
}

  

export default connect(mapStateToProps, '')(App);

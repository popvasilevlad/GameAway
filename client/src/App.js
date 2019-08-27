import React from 'react';
import Header from './components/header/';
import Container from './components/container/';
import Footer from './components/footer/';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.data,
        over: state.over
    }
}

class App extends React.Component {
  render() {

    const fetchHeaders = {
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    }

    fetch('/data');

    return (
      <>
        <Header data={this.props.data}/>
        <Container />
        {!this.props.over && <Footer />}
      </>
    );
  }
}

  

export default connect(mapStateToProps, '')(App);

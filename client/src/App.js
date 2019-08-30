import React from 'react';
import Header from './components/header/';
import Container from './components/container/';
import Footer from './components/footer/';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

const mapStateToProps = state => {
    return {
        data: state.data,
        over: state.over
    }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container />
        {!this.props.over && <Footer />}
      </>
    );
  }
}

  

export default connect(mapStateToProps, '')(App);

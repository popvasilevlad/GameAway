import React from 'react';
import Header from './components/header/';
import Container from './components/container/';
import Footer from './components/footer/';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Spinner from './components/spinner/';

const mapStateToProps = state => {
  return {
    winner: state.winner,
    loading: state.loading
  }
}

const App = props => (
  <>
    {props.loading && <Spinner />}
    <Header />
    <Container />
    {!props.winner && <Footer />}
  </>
);

export default connect(mapStateToProps, '')(App);

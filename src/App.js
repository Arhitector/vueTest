import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
const TOURS_QUERY = gql`
  query getTours{
    name
  }
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient} >
        <Query query={TOURS_QUERY}>
          {
        ({ loading, data, subscribeToMore }) => {
        if (loading) return <div>123123</div>;
        return (

        
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
        );
        }
      }
      </Query>
      </ApolloProvider>
    );
  }
}

export default App;

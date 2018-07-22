import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

client
  .query({
    query: gql`{
        allProjects {
            id
            title
            User {
                id
                name
            }
            expiration
        }
    }`
  })
  .then(result => console.log(result));

ReactDOM.render((
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
), document.getElementById('root'));
registerServiceWorker();

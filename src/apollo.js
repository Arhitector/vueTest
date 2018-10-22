// eslint-disable
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split, from } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import { withClientState } from 'apollo-link-state';


const httpLink = new HttpLink({ uri: `http://localhost:4000/graphql` });
const httpAuthLink = setContext(() => ({
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4Y2QwZDY0MGMzY2JhNDFlYWY1OGJhMiIsImNsaWVudCI6IjU5ZDQ5MjNlM2ZmNzViMjUyNDU1MmRkNyIsImdyb3VwIjoic3VwZXJhZG1pbiIsImlhdCI6MTUzNzI2MzE4N30.XcemCZoWPfZ5q48u5RU8veoZLSa01ny_kebxCy3W8hg`,
  },
}));

const cache = new InMemoryCache();

// const defaultState = {
// };

// const stateLink = withClientState({
//   cache,
//   defaults: defaultState,
// });

// const link = split(
//   (operation) => {
//     const operationAST = getOperationAST(operation.query, operation.operationName);
//     return !!operationAST && operationAST.operation === 'subscription';
//   },
//   new WebSocketLink({
//     uri: `${process.env.WS_URL}/subscriptions`,
//     options: {
//       reconnect: true, // auto-reconnect
//       connectionParams: {
//         authorization: localStorage.getItem('jwt-token'),
//       },
//     },
//   }),
//   from([
//     stateLink,
//     httpAuthLink,
//     httpLink,
//   ]),
// );

export const apolloClient = new ApolloClient({
  link: from([httpAuthLink, httpLink]),
  cache,
  connectToDevTools: process.env.NODE_ENV !== 'production',
  fetchOptions: {
    mode: 'no-cors',
  },
});

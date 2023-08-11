import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import theme from './mui/theme';
import App from './App';
import { BrowserRouter } from "react-router-dom"

import "./styles/index.css"
import "./styles/fonts.css"
import { ThemeProvider } from '@mui/material';



const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

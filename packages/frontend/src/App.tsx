import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { theme } from './ui/theme';
import { ThemeProvider } from '@material-ui/styles';
import { Home } from './views/Home.view';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './services/client';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;

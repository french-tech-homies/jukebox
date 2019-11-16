import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { theme } from './ui/theme';
import { ThemeProvider } from '@material-ui/styles';
import { Home } from './views/Home.view';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;

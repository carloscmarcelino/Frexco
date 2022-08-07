import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';

import '@fontsource/montserrat';

import './styles/styles.css';

import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);

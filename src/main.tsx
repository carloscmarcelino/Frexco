import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';

import { extendTheme } from '@chakra-ui/react';

import '@fontsource/montserrat';

const theme = extendTheme({
  colors: {
    orange: '#e80',
    purle1: '#87f',
    purle2: '#76f',
    white: '#fff',
  },
  fonts: {
    body: 'montserrat',
  },
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);

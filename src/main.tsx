import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';

import '@fontsource/montserrat';

import './styles/styles.css';

import { theme } from './styles/theme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductContextProvider } from './context/AppContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

import React from 'react';
import { hydrate, render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from 'components/App';
import { GlobalStyle } from 'style/globalStyles';
import { theme } from 'style/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}

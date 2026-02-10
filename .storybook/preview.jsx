import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  decorators: [
    (Story) => {
      if (typeof document !== 'undefined' && !document.getElementById("modal-root")) {
        const modalRoot = document.createElement("div");
        modalRoot.id = "modal-root";
        document.body.appendChild(modalRoot);
      }
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
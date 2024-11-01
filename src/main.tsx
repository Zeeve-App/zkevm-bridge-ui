import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import "normalize.css/normalize.css";

import { theme } from "src/styles/theme";
import { App } from "src/views/app.view";

const container = document.getElementById("root");

if (container === null) {
  throw new Error("Root container doesn't exist");
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
document.title = import.meta.env.VITE_APP_TITLE || 'Zeeve Bridge';
const favicon = document.createElement('link');
favicon.rel = 'icon';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
favicon.href = import.meta.env.VITE_APP_FAVICON || '/default-favicon.png';
document.head.appendChild(favicon);

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

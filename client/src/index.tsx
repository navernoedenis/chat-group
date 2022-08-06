import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import App, { MyGlobalStyles, theme } from "app";
import { store } from "redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("app-root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MyGlobalStyles>
          <App />
        </MyGlobalStyles>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

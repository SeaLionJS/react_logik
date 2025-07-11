import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./Store/index.ts";
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <SnackbarProvider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </SnackbarProvider>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./Store/index.ts";
import { Provider as ReduxProvider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

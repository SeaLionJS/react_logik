import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";

import Router from "./router";
import store from "./Store";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;

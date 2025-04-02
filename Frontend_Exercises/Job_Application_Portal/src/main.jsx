import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./ContextAPI/UserProvider.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import { FormDataProvider } from "./ContextAPI/FormDataProvider.jsx";
import { JobsProvider } from "./ContextAPI/JobsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <FormDataProvider>
          <JobsProvider>
            <App />
          </JobsProvider>
        </FormDataProvider>
      </UserProvider>
    </Provider>
  </StrictMode>
);

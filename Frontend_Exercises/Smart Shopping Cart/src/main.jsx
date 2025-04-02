import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { UserProvider } from "./ContextApi/Providers/UserProvider.jsx";
import {DisplayProductProvider} from "./ContextApi/Providers/DisplayProductProvider.jsx";
import { SearchProvider } from "./ContextApi/Providers/SearchProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <DisplayProductProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </DisplayProductProvider>
      </UserProvider>
    </Provider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UiContextProvider } from "./context/ui.context.tsx";
import { AuthContextProvider } from "./context/auth.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UiContextProvider>
  </React.StrictMode>,
);

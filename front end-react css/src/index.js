import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import { MetaMaskProvider } from '@metamask/sdk-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <MetaMaskProvider debug={false} sdkOptions={{
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Demo React App",
      url: window.location.host,
    }
  }}>
      <App />
      </MetaMaskProvider>
    </PersistGate>
  </Provider>

  </React.StrictMode>
  
);

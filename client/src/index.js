import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore } from "redux";
// import allReducers from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {store} from './store/store'

// const store = configureStore(allReducers, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </Provider>
  </Router>
);



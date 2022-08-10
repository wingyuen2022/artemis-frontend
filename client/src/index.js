import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { legacy_createStore } from "redux";
// import allReducers from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
<<<<<<< HEAD:src/index.js
=======
import { ChakraProvider, theme } from "@chakra-ui/react";
import {store} from './store/store'

// import { ChakraProvider, theme } from "@chakra-ui/react";
>>>>>>> 92048e0439afce18da89679b9d8d4e095c9df0ba:client/src/index.js



// const store = configureStore(allReducers, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
        <App />
    </Provider>
  </Router>
);



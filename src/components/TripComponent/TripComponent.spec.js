import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import TripComponent from "./index.js";
import { legacy_createStore } from "redux";
import allReducers from "../../reducers/index.js";
import { devToolsEnhancer } from "redux-devtools-extension";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

const store = legacy_createStore(allReducers, devToolsEnhancer());

describe("Budget Component", () => {
  beforeEach(() => {
    render(
    <Provider store={store}>
      <Router>
        <TripComponent />
      </Router>
    </Provider>
    );
  });


  test("it renders a member button", () => {
    let member = screen.getByRole("member");
    expect(member.textContent).toBe("View Member");
  });

});

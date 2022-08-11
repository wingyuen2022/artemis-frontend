import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import MemberComponent from "./index.js";
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
        <MemberComponent />
      </Router>
    </Provider>
    );
  });

  test("it renders a view button", () => {
    let Edit = screen.getByRole("edit");
    expect(Edit.textContent).toBe("Edit");
  });

});
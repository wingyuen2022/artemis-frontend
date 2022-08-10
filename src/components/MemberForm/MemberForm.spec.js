import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { legacy_createStore } from "redux";
import allReducers from "../../reducers/index.js";
import { devToolsEnhancer } from "redux-devtools-extension";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import MemberForm from "./index.js";

const store = legacy_createStore(allReducers, devToolsEnhancer());

describe("Budget Component", () => {
  beforeEach(() => {
    render(
    <Provider store={store}>
      <Router>
        <MemberForm />
      </Router>
    </Provider>
    );
  });

  test("it renders a back button", () => {
    let back = screen.getByRole("back");
    expect(back.textContent).toBe("Back");
  });
});


import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import BudgetComponent from "./index.js";
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
        <BudgetComponent />
      </Router>
    </Provider>
    );
  });

  test("it renders a item", () => {
    let item = screen.getByRole("item");
    expect(item.textContent).toBe("Item");
  });

  test("it renders a price", () => {
    let price = screen.getByRole("price");
    expect(price.textContent).toBe("Price");
  });

  test("it renders a price", () => {
    let remark = screen.getByRole("remark");
    expect(remark.textContent).toBe("Remark");
  });

  test("it renders a price", () => {
    let action = screen.getByRole("action");
    expect(action.textContent).toBe("Action");
  });

  test('button is rendered', () => {
    const button = screen.getByRole('edit');
    expect(button.textContent).toBe("Edit")
  });

});
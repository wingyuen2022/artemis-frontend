import React from "react";
import "@testing-library/jest-dom";
import { screen, render, getByRole } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { legacy_createStore } from "redux";
import allReducers from "../../reducers/index.js";
import { devToolsEnhancer } from "redux-devtools-extension";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import ChecklistForm from "./index.js";

const store = legacy_createStore(allReducers, devToolsEnhancer());

describe("Budget Component", () => {
  beforeEach(() => {
    render(
    <Provider store={store}>
      <Router>
        <ChecklistForm />
      </Router>
    </Provider>
    );
  });

  test("it renders a back button", () => {
    let button= screen.getByRole("back");
    expect(button.textContent).toBe("Back");
  });

  test("it renders a save button", () => {
    let save= screen.getByRole("save");
    expect(save.textContent).toBe("Save");
  });

  test("it renders a deleted button", () => {
    let deleted= screen.getByRole("deleted");
    expect(deleted).toBeInTheDocument();
  });

//   test("it alerts on submit click", async () => {
//     const deleted = screen.getByRole("deleted");
//     await userEvent.click(deleted)
//     expect(aler)
//   });

});

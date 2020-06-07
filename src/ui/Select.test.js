import React from "react";
import Provider from "../context/store";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Select from "./Select";

afterEach(cleanup);

const mockedProps = {
  defaultOption: "Select a category...",
  options: ["fashion", "nature", "backgrounds"],
  handleChange: jest.fn(),
};

test("Select displays the default option on load", () => {
  const { getByTestId } = render(
    <Provider>
      <Select {...mockedProps} />
    </Provider>
  );
  expect(getByTestId("defaultOption")).toHaveTextContent(
    mockedProps.defaultOption
  );
  expect(getByTestId("defaultOption")).toBeDisabled();
});

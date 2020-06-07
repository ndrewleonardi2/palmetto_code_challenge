import React from "react";
import Provider from "../context/store";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);

const mockedProps = {
  placeholder: "Please enter a key word...",
};

test("Updates the value on change", () => {
  const { getByTestId } = render(
    <Provider>
      <Input {...mockedProps} />
    </Provider>
  );
  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});

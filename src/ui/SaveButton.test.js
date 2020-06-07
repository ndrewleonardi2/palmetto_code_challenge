import React from "react";
import { AppContext } from "../context/store";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SaveButton from "./SaveButton";

afterEach(cleanup);

const mockState = {
  state: {
    loading: false,
    error: null,
    saved: [],
    images: [
      {
        id: 828564,
        pageURL:
          "https://pixabay.com/photos/roses-bunch-bouquet-flower-floral-828564/",
        type: "photo",
        tags: "roses, bunch, bouquet",
        previewURL:
          "https://cdn.pixabay.com/photo/2015/07/02/10/05/roses-828564_150.jpg",
        previewWidth: 100,
        previewHeight: 150,
        webformatURL:
          "https://pixabay.com/get/5ee2dd464c56b10ff3d8992cc62b367d133bdce44e507440742c7ad09245cc_640.jpg",
        webformatWidth: 426,
        webformatHeight: 640,
        largeImageURL:
          "https://pixabay.com/get/5ee2dd464c56b108f5d084609629347f1639dae7524c704c7c2e78d59348cd51_1280.jpg",
        imageWidth: 3840,
        imageHeight: 5760,
        imageSize: 5940704,
        views: 86210,
        downloads: 53456,
        favorites: 566,
        likes: 354,
        comments: 27,
        user_id: 242387,
        user: "Free-Photos",
        userImageURL:
          "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
      },
    ],
  },
};

test("Shows the text Save when the image is not saved", () => {
  const { getByTestId } = render(
    <AppContext.Provider value={mockState}>
      <SaveButton id={999999} />
    </AppContext.Provider>
  );
  expect(getByTestId("save-button")).toHaveTextContent("Save");
});

test("Shows the text Unsave when the image is saved", () => {
  const { getByTestId } = render(
    <AppContext.Provider
      value={{
        state: { ...mockState.state, saved: [mockState.state.images[0]] },
      }}
    >
      <SaveButton id={mockState.state.images[0].id} />
    </AppContext.Provider>
  );
  expect(getByTestId("save-button")).toHaveTextContent("Unsave");
});

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AppContext } from "../context/store";
import CardList from "./CardList";

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

test("Card list component renders list when data is received", () => {
  const { container } = render(
    <AppContext.Provider value={mockState}>
      <CardList />
    </AppContext.Provider>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
  <div
    class="list"
  >
    <div
      class="card"
    >
      <div
        class="card-image"
      >
        <img
          src="https://pixabay.com/get/5ee2dd464c56b10ff3d8992cc62b367d133bdce44e507440742c7ad09245cc_640.jpg"
        />
        <button
          class="save-button"
          data-testid="save-button"
        >
          Save
        </button>
      </div>
      <div
        class="card-tags"
      >
        <ul>
          <li>
            roses
          </li>
          <li>
             bunch
          </li>
          <li>
             bouquet
          </li>
        </ul>
      </div>
      <div
        class="card-stars"
      >
        <span
          data-testid="comments"
        >
          27
        </span>
        <i
          class="icon-star"
        />
      </div>
      <div
        class="card-comments"
      >
        <span
          data-testid="likes"
        >
          354
        </span>
        <i
          class="icon-thumbsup"
        />
      </div>
    </div>
  </div>
  `);
});

test("Card list component renders loader when loading", () => {
  const { container } = render(
    <AppContext.Provider
      value={{ state: { ...mockState.state, images: [], loading: true } }}
    >
      <CardList />
    </AppContext.Provider>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
  <div
    class="list"
  >
    <p>
      Loading ... 
    </p>
  </div>
  `);
});

test("Card list component renders error message when data fetch doesn't succeed", () => {
  const { container } = render(
    <AppContext.Provider
      value={{
        state: {
          ...mockState.state,
          images: [],
          loading: false,
          error: { message: "I received an error" },
        },
      }}
    >
      <CardList />
    </AppContext.Provider>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
  <div
    class="list"
  >
    <p>
      Error: 
      I received an error
    </p>
  </div>
  `);
});

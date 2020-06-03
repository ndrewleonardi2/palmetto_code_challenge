import React from "react";
import SavedList from "../ui/SavedList";

const d = new Date();
const year = d.getFullYear();

export default ({ children, title }) => {
  console.log("children", children);
  return (
    <div className="container">
      <header>
        <h4>{title}</h4>
      </header>
      <main>{children}</main>
      <aside>
        <p>Saved</p>
        <SavedList
          data={[
            {
              id: 5237592,
              pageURL:
                "https://pixabay.com/photos/house-prison-abandoned-isolated-5237592/",
              type: "photo",
              tags:
                "house, prison, abandoned, doodie, poopie, poop, doodie, poopie, poop",
              previewURL:
                "https://cdn.pixabay.com/photo/2020/05/30/04/28/house-5237592_150.jpg",
              previewWidth: 120,
              previewHeight: 150,
              webformatURL:
                "https://pixabay.com/get/53e2d6444f5bae14f1dc84609629347f1639dae7524c704c7c2e7ad69e45cd51_640.jpg",
              webformatWidth: 512,
              webformatHeight: 640,
              largeImageURL:
                "https://pixabay.com/get/53e2d6444f5bae14f6da8c7dda79367d143cd8e151506c4870267ad59544cd50b1_1280.jpg",
              imageWidth: 2400,
              imageHeight: 3000,
              imageSize: 1274373,
              views: 4595,
              downloads: 4013,
              favorites: 27,
              likes: 56,
              comments: 32,
              user_id: 13452116,
              user: "Syaibatulhamdi",
              userImageURL:
                "https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg",
            },
          ]}
        />
      </aside>
      <footer>
        <span>&#169;{` Palmetto ${year}`}</span>
      </footer>
    </div>
  );
};

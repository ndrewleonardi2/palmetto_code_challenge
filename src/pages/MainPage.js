import React from "react";
import View from "../ui/View";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import CardList from "../ui/CardList";

export default () => (
  <View title="Search for an image by category">
    <Input placeholder={`Please enter a key word...`} />
    <Select
      defaultOption={`Select a category...`}
      options={[
        "fashion",
        "nature",
        "backgrounds",
        "science",
        "education",
        "people",
        "feelings",
        "religion",
        "health",
        "places",
        "animals",
        "industry",
        "food",
        "computer",
        "sports",
        "transportation",
        "travel",
        "buildings",
        "business",
        "music",
      ]}
    />
    <Button title={`Search`} />
    <CardList
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
        {
          id: 5237592,
          pageURL:
            "https://pixabay.com/photos/house-prison-abandoned-isolated-5237592/",
          type: "photo",
          tags: "house, prison, abandoned, doodie, poopie, poop",
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
  </View>
);

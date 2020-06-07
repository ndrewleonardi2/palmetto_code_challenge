import React from "react";
import View from "../ui/View";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/SearchButton";
import CardList from "../ui/CardList";
import SavedList from "../ui/SavedList";

import { AppContext } from "../context/store";

export default () => {
  return (
    <AppContext.Consumer>
      {({ state: { categories }, dispatch }) => (
        <View
          title="Search for an image by category"
          sideContent={<SavedList />}
        >
          <Input placeholder={`Please enter a key word...`} />
          <Select
            defaultOption={`Select a category...`}
            options={categories}
            handleChange={({ target: { value } }) =>
              dispatch({ type: "SAVE_CATEGORY", payload: value })
            }
          />
          <Button title={`Search`} />
          <CardList />
        </View>
      )}
    </AppContext.Consumer>
  );
};

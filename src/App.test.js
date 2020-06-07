import React from "react";
import Provider from "./context/store";
import { render } from "@testing-library/react";
import App from "./App";

test("The app children are rendered", () => {
  const { container } = render(
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
     <div
       class="App"
     >
       <div
         class="container"
       >
         <header>
           <h4>
             Search for an image by category
           </h4>
         </header>
         <main>
           <div
             class="input-container"
           >
             <input
               data-testid="search-input"
               placeholder="Please enter a key word..."
               type="text"
             />
           </div>
           <select
             data-testid="category-select"
           >
             <option
               data-testid="defaultOption"
               disabled=""
               hidden=""
               selected=""
               value="Select a category..."
             >
               Select a category...
             </option>
             <option>
               fashion
             </option>
             <option>
               nature
             </option>
             <option>
               backgrounds
             </option>
             <option>
               science
             </option>
             <option>
               education
             </option>
             <option>
               people
             </option>
             <option>
               feelings
             </option>
             <option>
               religion
             </option>
             <option>
               health
             </option>
             <option>
               places
             </option>
             <option>
               animals
             </option>
             <option>
               industry
             </option>
             <option>
               food
             </option>
             <option>
               computer
             </option>
             <option>
               sports
             </option>
             <option>
               transportation
             </option>
             <option>
               travel
             </option>
             <option>
               buildings
             </option>
             <option>
               business
             </option>
             <option>
               music
             </option>
           </select>
           <button>
             Search
           </button>
           <div
             class="list"
           />
         </main>
         <aside>
           <div
             class="saved-list"
           >
             <h4>
               Saved list
             </h4>
             <ul />
           </div>
         </aside>
         <footer>
           <span>
             ©
              Palmetto 2020
           </span>
         </footer>
       </div>
     </div>
  `);
});

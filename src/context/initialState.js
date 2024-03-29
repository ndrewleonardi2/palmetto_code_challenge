const { REACT_APP_PIXBAY_URL, REACT_APP_PIXBAY_API_KEY } = process.env;

export default {
  loading: false,
  error: null,
  categories: [
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
  ],
  images: [],
  saved: [],
  url: REACT_APP_PIXBAY_URL,
  query: {
    key: REACT_APP_PIXBAY_API_KEY,
    per_page: 10,
    q: "",
    category: "",
  },
};

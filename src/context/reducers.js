import initialState from "./initialState";

export default (state = initialState, { type, payload }) => {
  if (type === "SAVE_TERM") {
    return {
      ...state,
      query: {
        ...state.query,
        q: payload,
      },
    };
  }
  if (type === "SAVE_CATEGORY") {
    return {
      ...state,
      query: {
        ...state.query,
        category: payload,
      },
    };
  }
  if (type === "SAVE_IMAGE") {
    return {
      ...state,
      saved: [...state.saved, state.images.find(({ id }) => id === payload)],
    };
  }
  if (type === "UNSAVE_IMAGE") {
    return {
      ...state,
      saved: state.saved.filter(({ id }) => id !== payload),
    };
  }
  if (type === "FETCHING") {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (type === "SUCCESS") {
    return {
      ...state,
      loading: false,
      error: null,
      images: payload.hits,
    };
  }
  if (type === "ERROR") {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  }
  return state;
};

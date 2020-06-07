import qs from "qs";

export const fetchData = async (
  url,
  query = {},
  dispatch,
  config = { method: "GET" }
) => {
  try {
    dispatch({ type: "FETCHING" });
    const stream = await fetch(
      `${url}?${qs.stringify(query, { encode: false })}`,
      config
    );
    const response = await stream.json();
    dispatch({ type: "SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

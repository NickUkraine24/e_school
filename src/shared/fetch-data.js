import { GET } from "./global-variables";

async function fetchDataFromAPI(path, method = GET, headers = {}) {
  if (!path) return null;

  const response = await fetch(
    path, {
      method: method,
      headers: headers
    }
  );

  return await response.json();
};

export default fetchDataFromAPI;

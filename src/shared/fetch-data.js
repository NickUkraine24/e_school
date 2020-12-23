import { GET } from "./global-variables";

async function fetchDataFromAPI(path, method = GET, headers = {}, body = {}) {
  if (!path) return null;

  const response = await fetch(
    path, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    }
  );

  return await response.json();
};

async function fetchTimeTable(path, method = GET) {
  if (!path) return null;

  const response = await fetch(
    path, {
      method: method,
    }
  );

  return await response.json();
};

export {fetchDataFromAPI,
        
          fetchTimeTable}


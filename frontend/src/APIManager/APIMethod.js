//To generate token
const getHeaders = () => {
  //Token we are getting from the store
  const getToken = () => {
    return null;
    // const userData = store.getUserData()?.userData;
    // return userData?.auth_token || null;
  };

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
};

const apiRequest = async (method, url, body = {}) => {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      // headers: getHeaders(),
    });
    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (err) {}
};

const getMethod = (url) => {
  return apiRequest("GET", url);
};

const PostMethod = (url, data) => {
  return apiRequest("POST", url, data);
};

const putMethod = (url, data) => {
  return apiRequest("PUT", url, data);
};

const deleteMethod = (url) => {
  return apiRequest("DELETE", url);
};

module.exports = {
  getMethod,
  PostMethod,
  putMethod,
  deleteMethod,
};

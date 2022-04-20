const BASE_URL = "https://register.nomoreparties.co";

export const register = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const authorize = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const checkTokenAndGetUserEmail = async (jwt) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    const data = await response.json();
    if (data.jwt) {
      //localStorage.setItem("jwt", data.jwt);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

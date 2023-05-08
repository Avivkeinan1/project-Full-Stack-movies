import httpService from "../services/httpServices";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
setTokenHeader();

function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT());
}

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}
export function allUsers() {
  return httpService.get("/user/allUsers");
}

async function loginUser(credentials) {
  const { data } = await httpService.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, data.token);
  setTokenHeader();
}
export function createUser(user) {
  return httpService.post("/user/", user);
}
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}
export function DeleteUser(id) {
  return httpService.delete(`/user/delete/${id}`);
}

function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export const getMyFavoriteMovies = async (userId) => {
  const token = getJWT();

  const { data } = await httpService.get(`/movies/user/${userId}`, {
    headers: {
      "x-auth-token": token,
    },
  });
  return data;
};

export const deleteMovie = async (userId) => {
  const token = getJWT();
  const { data } = await httpService.delete(`/movies/delete/${userId}`, {
    headers: { "x-auth-token": token },
  });
  return data;
};

const userService = {
  getJWT,
  loginUser,
  getUser,
  createUser,
  logout,
};

export default userService;

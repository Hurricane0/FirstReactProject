import * as axios from "axios";

let instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "7d9ed7c8-798c-4469-ae63-ddff52eeaede"
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then(response => response.data);
  }
};

export const authAPI = {
  authMe() {
    return instance.get("auth/me").then(response => response.data);
  }
};

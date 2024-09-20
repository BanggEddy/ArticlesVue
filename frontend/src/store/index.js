import { createStore } from "vuex";

const store = createStore({
  state: {
    token: localStorage.getItem("token") || "",
  },
  getters: {
    isAuthenticated: (state) => !!state.token && state.token.length > 0,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    login({ commit }, token) {
      commit("setToken", token);
    },
    logout({ commit }) {
      commit("logout");
    },
  },
});

export default store;

import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: false,
    token: null,
    userData: {}
  },
  mutations: {
    //Login User
    loginUser(state, token) {
      state.token = token;
      //onsole.log(state.accessToken);
    },
    //Register User
    registerUser(state, { userData }) {
      state.userData = userData;
      console.log(state.userData);
    },
    accessToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    //Login User
    loginUser({ commit }, { username, password }) {
      axios
        .post("login", { username, password })
        .then(response => {
          if (response.status === 200) {
            commit("loginUser", response.data.token);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //Register User
    registerUser(
      { commit },
      { username, first_name, second_name, last_name, dob, email, password }
    ) {
      axios
        .post("users", {
          username,
          first_name,
          second_name,
          last_name,
          email,
          dob,
          password
        })
        .then(response => {
          console.log(response.status);
          if (response.status === 200) {
            let userData = {
              username: "",
              first_name: "",
              second_name: "",
              last_name: "",
              email: "",
              dob: ""
            };
            userData.username = username;
            userData.first_name = first_name;
            userData.second_name = second_name;
            userData.last_name = last_name;
            userData.dob = dob;
            userData.email = email;
            commit("registerUser", userData);
            commit("accessToken", response.data.token);
          }
        });
    }
  },
  modules: {}
});

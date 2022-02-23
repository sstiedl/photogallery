import { createStore } from "vuex";
import { projectAuth } from "../firebase/config";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login(context, { email, password }) {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
  
      await projectAuth.signOut()
      context.commit("setUser", null);
    },
  },
});
export default store;

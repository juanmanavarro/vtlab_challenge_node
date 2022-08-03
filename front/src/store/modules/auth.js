import Password from "@/helpers/password";

const state = () => ({
  isAuthed: false,
});

const actions = {
  login({ state, commit }, { password }) {
    if (state.isAuthed || !Password.validate(password)) return false;
    localStorage.setItem("isAuthed", true);
    commit("setIsAuthed", true);
    return true;
  },
  logout({ state, commit }) {
    if (!state.isAuthed) return;
    localStorage.removeItem("isAuthed");
    commit("setIsAuthed", false);
    commit("order/reset", null, { root: true });
  },
};

const mutations = {
  setIsAuthed(state, isAuthed) {
    state.isAuthed = isAuthed;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

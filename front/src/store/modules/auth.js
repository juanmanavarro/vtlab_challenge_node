import Password from "@/helpers/password";

const state = () => ({
  isAuthed: false,
});

const actions = {
  login({ state, commit }, { password }) {
    if (state.isAuthed || !Password.validate(password)) return false;
    localStorage.setItem('isAuthed', true);
    commit("setIsAuthed", true);
    return true;
  },
};

const mutations = {
  setIsAuthed(state, isAuthed) {
    state.isAuthed = isAuthed;
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

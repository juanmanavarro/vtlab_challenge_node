import axios from 'axios';

const state = () => ({
  orders: [],
  order: null,
});

const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:4000/api/v1/deliveries', {
        params: {
          limit: 10,
          page: 1,
        }
      });
      commit('setOrders', data.data.deliveries);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
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

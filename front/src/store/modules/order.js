import axios from 'axios';

// TODO to config file and config axios
const baseUrl = 'http://localhost:4000/api/v1';

const getDefaultState = () => {
  return {
    orders: [],
    order: null,
  };
};

const state = getDefaultState();

const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await axios.get(`${baseUrl}/deliveries`, {
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
  async get({ state, commit }, id) {
    if ( state.order?._id === id ) return;

    // order cache
    const order = state.orders.find(o => o._id === id);
    if ( order ) {
      commit('setOrder', order);
      return;
    }

    try {
      const { data } = await axios.get(`${baseUrl}/deliveries/${id}`);
      commit('setOrder', data.data);
    } catch (error) {
      console.error(error);
    }
  },
};

const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setOrder(state, order) {
    state.order = order;
  },
  reset(state) {
    Object.assign(state, getDefaultState());
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

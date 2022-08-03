import axios from 'axios';

// TODO to config file and config axios
const baseUrl = 'http://localhost:4000/api/v1';

const getDefaultState = () => {
  return {
    orders: [],
    order: null,
    totalResults: 0,
    query: {
      limit: '10',
      page: '1',
    },
  };
};

const state = getDefaultState();

const actions = {
  async fetch({ state, commit }, payload = null) {
    // TODO improve object comparison with lodash or something
    if (
      state.orders.length
      && payload?.page === state.query.page
      && payload?.limit === state.query.limit
    ) return;
    payload ||= state.query;
    try {
      const { data } = await axios.get(`${baseUrl}/deliveries`, {
        params: payload,
      });
      commit('setOrders', data.data.deliveries);
      commit('setTotalResults', data.data.totalResults);
      commit('setQuery', payload);
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
  reorder({ commit }, orders) {
    commit('setOrders', orders);
  },
};

const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setTotalResults(state, total) {
    state.totalResults = total;
  },
  setOrder(state, order) {
    state.order = order;
  },
  setQuery(state, query) {
    Object.assign(state.query, query);
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

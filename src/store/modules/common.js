const commonModule = {
  state: {
    filterKey: 'all',
  },
  getters: {},
  mutations: {
    setFilterKey(state, payload) {
      state.filterKey = payload;
    },
  },
  actions: {
    setFilterKey(context, { key }) {
      context.commit('setFilterKey', key);
    },
  },
};

export default commonModule;

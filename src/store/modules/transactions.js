import { transactionService } from '../../services';

const getFormInitialState = () => ({
  title: '',
  amount: 0,
  type: '',
  category: '',
});

const state = {
  transactions: [],
  form: getFormInitialState(),
};

const getters = {};

const mutations = {
  SET_TRANSACTIONS: (state, transactions) => {
    state.transactions = transactions;
  },
};

const actions = {
  findAll: async ({ commit }) => {
    const { data } = await transactionService.getAll();
    commit('SET_TRANSACTIONS', data.transactions);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

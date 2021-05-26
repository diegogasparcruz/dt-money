import { transactionService } from '../../services';

const getFormInitialState = () => ({
  title: '',
  amount: 0,
  type: 'deposit',
  category: '',
});

const state = {
  transactions: [],
  form: getFormInitialState(),
};

const getters = {
  summary: (state) => {
    const summary = state.transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }

        return acc;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      }
    );

    return summary;
  },
};

const mutations = {
  setTransactions: (state, transactions) => {
    state.transactions = transactions;
  },
  setForm: (state, { key, value }) => {
    state.form[key] = value;
  },
  clearForm: (state) => {
    state.form = getFormInitialState();
  },
};

const actions = {
  findAllTransactions: async ({ commit }) => {
    const { data } = await transactionService.getAll();
    commit('setTransactions', data.transactions);
  },
  saveTransaction: async ({ state, commit }) => {
    const { data } = await transactionService.save({
      ...state.form,
      createdAt: new Date(),
    });

    commit('setTransactions', [...state.transactions, data.transaction]);
    commit('clearForm');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

import { api } from './api';

const getAll = async () => {
  return api.get('/transactions');
};

const save = async (transaction) => {
  return api.post('/transactions', transaction);
};

export default {
  getAll,
  save,
};

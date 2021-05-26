<template>
  <div class="home">
    <Header @openModal="openModal" />
    <main>
      <Summary />
      <TransactionsTable :transactions="transactions" />
    </main>

    <NewTransactionModal ref="NewTransactionModal" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { Header, Summary, TransactionsTable } from '../components';
import NewTransactionModal from '../components/NewTransactionModal.vue';

const { mapState, mapActions } = createNamespacedHelpers('transactions');

export default {
  name: 'Home',
  components: {
    Header,
    Summary,
    TransactionsTable,
    NewTransactionModal,
  },
  computed: {
    ...mapState(['transactions']),
  },
  methods: {
    ...mapActions(['findAllTransactions']),
    openModal() {
      this.$refs.NewTransactionModal.toggleModal();
    },
  },
  created() {
    this.findAllTransactions();
  },
};
</script>

<style lang="stylus" scoped>
.home {
  main {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
  }
}
</style>

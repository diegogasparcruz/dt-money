<template>
  <div class="home">
    <Header @openModal="toggleModal" />
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
    ...mapActions(['findAll']),
    toggleModal() {
      this.$refs.NewTransactionModal.openModal();
    },
  },
  created() {
    this.findAll();
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

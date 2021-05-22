<template>
  <div class="home">
    <Header @openModal="toggleModal" />
    <main>
      <Summary />
      <TransactionsTable />
    </main>

    <NewTransactionModal ref="NewTransactionModal" />
  </div>
</template>

<script>
import { Header, Summary, TransactionsTable } from '../components';
import NewTransactionModal from '../components/NewTransactionModal.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Summary,
    TransactionsTable,
    NewTransactionModal,
  },
  methods: {
    toggleModal() {
      this.$refs.NewTransactionModal.openModal();
    },
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

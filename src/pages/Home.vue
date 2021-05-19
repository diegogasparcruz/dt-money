<template>
  <div class="home">
    <Header />
    <main>
      <Summary />
      <TransactionsTable />
    </main>
  </div>
</template>

<script>
import { Header, Summary, TransactionsTable } from '../components';

export default {
  name: 'Home',
  components: {
    Header,
    Summary,
    TransactionsTable,
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

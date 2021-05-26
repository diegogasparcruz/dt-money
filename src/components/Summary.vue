<template>
  <div class="container">
    <div>
      <header>
        <p>Entradas</p>
        <img :src="incomeImg" alt="Entradas" />
      </header>
      <strong> {{ summary.deposits | toMoney }} </strong>
    </div>
    <div>
      <header>
        <p>Saídas</p>
        <img :src="outcomeImg" alt="Saídas" />
      </header>
      <strong> -{{ summary.withdraws | toMoney }} </strong>
    </div>
    <div class="highlight-background">
      <header>
        <p>Total</p>
        <img :src="totalImg" alt="Total" />
      </header>
      <strong> {{ summary.total | toMoney }} </strong>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('transactions');

import incomeImg from '@/assets/income.svg';
import outcomeImg from '@/assets/outcome.svg';
import totalImg from '@/assets/total.svg';

export default {
  name: 'Summary',
  data: () => ({
    incomeImg,
    outcomeImg,
    totalImg,
  }),
  computed: {
    ...mapGetters(['summary']),
  },
};
</script>

<style lang="stylus" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
}
</style>

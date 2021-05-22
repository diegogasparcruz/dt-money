<template>
  <div class="container">
    <header>
      <img :src="logoImg" alt="dt money" />
      <button type="button" @click="openModal">Nova transação</button>
    </header>
  </div>
</template>

<script>
import logoImg from '@/assets/logo.svg';

export default {
  name: 'Header',
  data: () => ({ logoImg }),
  methods: {
    openModal() {
      this.$emit('openModal');
    },
  },
};
</script>

<style lang="stylus" scoped>
.container {
  background: var(--blue);

  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 1rem;
      color: #FFF;
      background: var(--blue-light);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}
</style>

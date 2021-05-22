<template>
  <Modal
    ref="NewTransactionModal"
    v-model="showModal"
    title="Cadastrar transação"
    wrapperClass="modal-wrapper"
    modalClass="modal-content"
  >
    <form class="form-container" @submit.prevent="() => {}">
      <input placeholder="Título" />
      <input type="number" placeholder="Valor" />

      <div class="transaction-type-container">
        <button
          @click="setType('deposity')"
          :class="[
            'radio-box',
            type === 'deposity' ? 'radio-box__deposity' : '',
          ]"
        >
          <img :src="incomeImg" alt="Entrada" />
          <span>Entrada</span>
        </button>
        <button
          @click="setType('withdraw')"
          :class="[
            'radio-box',
            type === 'withdraw' ? 'radio-box__withdraw' : '',
          ]"
        >
          <img :src="outcomeImg" alt="Saída" />
          <span>Saída</span>
        </button>
      </div>

      <input placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
    </form>
  </Modal>
</template>

<script>
import incomeImg from '@/assets/income.svg';
import outcomeImg from '@/assets/outcome.svg';

export default {
  name: 'NewTransactionModal',
  data: () => ({
    showModal: false,
    type: 'deposity',
    incomeImg,
    outcomeImg,
  }),
  methods: {
    openModal() {
      this.showModal = !this.showModal;
    },
    setType(type) {
      this.type = type;
    },
  },
  watch: {
    showModal(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="stylus">
.modal-wrapper {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 1rem;
  position: relative;
  border-radius: 0.24rem;

  .vm-titlebar {
    h3 {
      color: var(--text-title);
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
}
</style>

<style lang="stylus" scoped>
.form-container{
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .transaction-type-container {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .radio-box {
      height: 4rem;
      border: 1px solid #d7d7d7;
      border-radius: 0.25rem;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color 0.2s;

      &:hover {
        border-color: darken(#d7d7d7, 30%);
      }

      img {
        width: 20px;
        height: 20px;
      }

      span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
      }
    }

    .radio-box__deposity {
      background: lighten(#33CC95, 90%);
    }

    .radio-box__withdraw {
      background: lighten(#E52E4D, 90%);
    }
  }
}
</style>

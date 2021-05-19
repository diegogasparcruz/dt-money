<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Freelance de website</td>
          <td class="deposit">R$ 6.000,00</td>
          <td>Dev</td>
          <td>12/02/2021</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td class="withdraw">R$ 4.000,00</td>
          <td>Casa</td>
          <td>14/02/2021</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TransactionsTable',
};
</script>

<style lang="stylus" scoped>
.container {
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
}
</style>

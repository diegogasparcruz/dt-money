export default (Vue) => {
  Vue.filter('toMoney', (value) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(value);
  });

  Vue.filter('toDate', (date) => {
    const formatter = new Intl.DateTimeFormat('pt-BR');
    return formatter.format(new Date(date));
  });
};

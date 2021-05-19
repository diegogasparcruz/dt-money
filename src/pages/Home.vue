<template>
  <div class="home">
    <Header />
    <main>
      <Summary />
    </main>
  </div>
</template>

<script>
import { Header, Summary } from '@/components';

export default {
  name: 'Home',
  components: {
    Header,
    Summary,
  },
  data: () => ({}),
};
</script>

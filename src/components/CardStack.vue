<template>
  <div class="cardstack">
    <Card />
    <Card class="stacked" />
    <Card class="stacked2" />
    <Card class="stacked3" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'CardStack',
  components: {
    Card
  },
  props: ['cards']
}
</script>

<style scoped>
.cardstack {
  margin-top: 2rem;
}
.stacked {
  transform: translateY(-60%)
}
.stacked2 {
  transform: translateY(-120%)
}
.stacked3 {
  transform: translateY(-180%)
}
</style>

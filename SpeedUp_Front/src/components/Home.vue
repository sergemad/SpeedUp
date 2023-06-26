<template>
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <Tarifs></Tarifs>
    </div>
</template>

<script>
import Carousel from './carousel.vue'
import Services from './Services.vue'
import Tarifs from './Tarifs.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    Services,
    Tarifs
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>

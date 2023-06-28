<template>
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <Tarifs></Tarifs>
      <Confiance></Confiance>
    </div>
</template>

<script>
import Carousel from './carousel.vue'
import Services from './Services.vue'
import Tarifs from './Tarifs.vue'
import Confiance from './confiance.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Services,
    Tarifs,
    Confiance
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>

<template>
    <div>
      <Carousel></Carousel>
      <Services></Services>
    </div>
</template>

<script>
import Carousel from './carousel.vue'
import Services from './Services.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    Services
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>

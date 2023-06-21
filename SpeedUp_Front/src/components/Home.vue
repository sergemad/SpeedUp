<template>
    <div>
      <Carousel></Carousel>
      <h1>Welcome to our website!</h1>
      <p>This is the home page.</p>
    </div>
</template>

<script>
import Carousel from './carousel.vue'
export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  padding: 0 20px;
  position: relative;
}

.navbar-shadow {
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
  z-index: 10;
}

.navbar a {
  text-decoration: none;
  color: rgb(61, 61, 61);
  margin: 0 10px;
  cursor: pointer;
}

.navbar-logo {
  font-size: 24px;
  font-weight: bold;
  max-width : 160px;
  height : auto;
  margin-top: 3%;
  margin-left: 3%;
}

</style>

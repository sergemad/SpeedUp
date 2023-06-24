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
  font-family:Arial, Helvetica, sans-serif ;
}

.navbar {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  width: 100%;
  position: fixed;
  top: 0;
}

.navbar-shadow {
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);
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

.title {
  font-size: 60px;
  margin-bottom: 40px;
  color: #C6A732;
  font-weight: bolder;
  text-align: center;
}

.title-description {
  text-align: center;
  margin-top: 40px;
}
.title-green {
  color: #007B4C;
}

.title-separator {
  border: none;
  border-top: 1.5px solid #007B4C;
  margin-bottom: 10px;
  margin-left: 45%;
  margin-right: 45%;
}

</style>

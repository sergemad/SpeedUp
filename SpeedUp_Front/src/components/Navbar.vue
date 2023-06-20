<template>
  <div class="navbar navbar-shadow">
    <div class="navbar-logo">
        <img class="logo" src=".././assets/speedup.png">
    </div>

    <div class="navbar-links" :class="{ 'navbar-mobile': isMobile }">
      <div v-if="isMobile" class="navbar-mobile-menu">
        <button class="navbar-mobile-button" @click="toggleMenu">Menu</button>
        <ul v-show="isMobile && isMenuOpen" class="navbar-mobile-dropdown">
          <li><router-link to="/" exact :class="{ active: isActive('/') }">Accueil</router-link></li>
          <li><router-link to="/AboutUs" :class="{ active: isActive('/AboutUs') }">ontactez-nous</router-link></li>
          <li><router-link to="/ContactUs" :class="{ active: isActive('/ContactUs') }">Contactez-nous</router-link></li>
        </ul>
      </div>
      <div v-else>
        <router-link to="/" exact :class="{ active: isActive('/') }">Accueil</router-link>
        <router-link to="/AboutUs" :class="{ active: isActive('/AboutUs') }">A propos</router-link>
        <router-link to="/ContactUs" :class="{ active: isActive('/ContactUs') }">Contactez-nous</router-link>
      </div>
    </div>

    <div v-if="!isMobile" class="navbar-devis">
      <router-link to="/Devis" class="navbar-button">Demander un devis</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isMobile: false,
      isMenuOpen: false
    }
  },
  mounted () {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile () {
      this.isMobile = window.innerWidth <= 768 // Ajustez la valeur de 768 selon vos besoins
    },
    isActive (route) {
      return this.$route.path === route
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}

</script>

<style scoped>
.navbar-links {
  flex-grow: 1;
  text-align: center;
}

.navbar-devis {
  text-align: right;
  color: white;
  margin-right: 5%;
}

.logo {
  max-width : 100%;
  height : auto;
}

.navbar-mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.navbar-mobile-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding-left: 80%;
}

.navbar-mobile-dropdown {
  display: none;
  position: relative;
  top : 80px;
  left: 0;
  background-color: white;
  padding: 10px;
  border: 1px solid #C6A732;
  border-top: none;
  width: 100%;
}

.navbar-mobile-dropdown li {
  margin-bottom: 10px;
}

.navbar-mobile-dropdown li:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .navbar-links div:not(.navbar-mobile-menu) {
    display: none;
  }

  .navbar-mobile-dropdown {
    display: block;
  }
}

.navbar-button {
  background-color: #C6A732;;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}

.navbar-links a.active {
  text-decoration: underline;
  color: #C6A732;
}
</style>

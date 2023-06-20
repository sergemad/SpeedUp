<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-social">
        <a href="#" class="social-link"><i class="fab fa-facebook">facebook</i></a>
        <a href="#" class="social-link"><i class="fab fa-twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></i></a>
        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
      </div>
      <div class="footer-logo">
        <img src=".././assets/speedup.png" alt="Company Logo">
      </div>
      <div class="footer-links">
        <router-link to="/AboutUs">About Us</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </div>
      <div class="footer-policies">
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        <router-link to="/terms-of-service">Terms of Service</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-social {
  display: flex;
}

.social-link {
  color: #C6A732;
  font-size: 24px;
  margin-right: 10px;
}

.footer-logo img {
  max-width: 100px;
}

.footer-links {
  display: flex;
}

.footer-policies {
  display: flex;
  padding-right: 20px;
}

.footer-links a, .footer-policies a {
  margin-right: 10px;
  color: #333;
  text-decoration: none;
}
</style>

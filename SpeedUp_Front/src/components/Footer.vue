<template>
  <footer class="footer">
    <div>
      <div class="footer-first-line">
        <div>
          <p>Comment pouvons nousvou aidez ?</p>
          <h4>Contactez-nous à tout moment</h4>
        </div>
        <div>
          <p>Appelez-nous</p>
          <h4>
            <a href="tel:0033612780876" class="social-link" >+33 6 12 78 08 76</a>
          </h4>
        </div>
        <div>
          <p>Envoyez-nous un message</p>
          <h5>
            <a href="mailto:ceo.speedup@gmail.com" class="social-link" >ceo.speedup@gmail.com</a>
          </h5>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/people/SpeedUp/100092771162687/" class="social-link"><i class="fab fa-facebook"></i></a>
          <a href="https://twitter.com/__SpeedUp" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/speedup_officiel/" class="social-link"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-logo">
          <a href="/"><img src=".././assets/speedup.png" alt="Company Logo"></a>
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
  background-color: #000000;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  bottom: 0;
  width: 100%;
  color: white;
  margin-right: 20px;
  padding-left: 20px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-first-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-color: white;
  border-bottom:solid 1px;
  width: auto;
  margin-right: 40px;
  padding-bottom: 20px;
}

.footer-social {
  display: flex;
}

.social-link {
  color: #C6A732;
  font-size: 20px;
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
  color: #C6A732;
  text-decoration: none;
}
</style>

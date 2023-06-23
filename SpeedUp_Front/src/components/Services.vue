<template>
  <div class="services">
    <div v-for="(service, index) in services" :key="index" class="service">
      <img :src="require(`.././assets/image${index + 1}.jpg`)" alt="Service Image" class="service-image">
      <h3 class="service-title">{{ service.title }}</h3>
      <hr class="service-separator">
      <p class="service-description">{{ service.description }}</p>
      <i class="fas fa-check"></i>
      <a :href="`https://api.whatsapp.com/send?phone=${service.whatsappNumber}`" class="service-link">J'en profite</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          image: '.././assets/image1.jpg',
          title: 'Fikaso',
          description: 'Description du service 1',
          checks: [
            'Envoyez nous les liens des articles via WhatsApp',
            "SpeedUp se charge du paiement et de l'expédition"
          ],
          whatsappNumber: '1234567890'
        },
        {
          image: '.././assets/image2.jpg',
          title: 'Telimani',
          description: 'Description du service 2',
          checks: [
            'Envoyez nous les informations des articles via WhatsApp',
            "SpeedUp se charge de l'expédition dès réception des colis"
          ],
          whatsappNumber: '1234567890'
        },
        {
          image: '.././assets/image3.jpg',
          title: 'Sama kura',
          description: 'Description du service 3',
          checks: [
            'Contactez-nous sur WhatsApp',
            'Confiez-nous votre colis',
            "SpeedUp se charge de l'expédition dès réception des colis"
          ],
          whatsappNumber: '1234567890'
        },
        {
          image: '.././assets/image4.jpg',
          title: 'Business',
          description: 'Description du service 4',
          checks: [
            "Contactez-nous sur WhatsApp pour plus d'informations"
          ],
          whatsappNumber: '1234567890'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.service {
  width: 24%;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.15);
  border-top: 1px;
  margin-left: auto;
  margin-right: auto;
}

.service-image {
  width: 100%;
  height: auto;
}

.service-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #C6A732;
  font-size: xx-large;
  font-weight: bolder;
}

.service-separator {
  border: none;
  border-top: 1.25px solid #0d0d0d;
  margin-bottom: 10px;
  margin-left: 5%;
  margin-right: 5%;
}

.service-description {
  margin-bottom: 10px;
}

.service-link {
  display: inline-block;
  background-color: #C6A732;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>

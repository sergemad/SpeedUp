<template>
  <div>
    <h1 class="title">Services</h1>
    <hr class="title-separator">
    <p class="title-description">Profitez de nos <span class="title-green">tarifs</span> avantageux pour envoyer vos colis en toute sécurité vers le <span class="title-green">Mali</span>.</p>
    <div class="services">
      <div v-for="(service, index) in services" :key="index" class="service">
        <img :src="require(`.././assets/image${index + 1}.jpg`)" alt="Service Image" class="service-image">
        <h3 class="service-title">{{ service.title }}</h3>
        <hr class="service-separator">
        <p class="service-description" > <span>{{ service.description }}</span></p>
        <div v-for="(check, index2) in service.checks" :key="index2" class="service-check">
          <span class="service-check-text"> <i class="fas fa-check service-check-icon"></i>  {{ check }}</span>
        </div>
        <a :href="`https://wa.me/${service.whatsappNumber}`" class="service-link">J'en profite !</a>
      </div>
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
          description: 'Vous souhaitez faire des achats en ligne sans utiliser de carte bancaire ou en évitant son utilisation ?\n \nSpeedUp est là pour vous simplifier la vie !',
          checks: [
            'Envoyez nous les liens des articles via WhatsApp',
            "SpeedUp se charge du paiement et de l'expédition"
          ],
          whatsappNumber: '33612780876'
        },
        {
          image: '.././assets/image2.jpg',
          title: 'Telimani',
          description: `Profitez de la simplicité des achats en ligne ! Choisissez librement votre site web préféré, effectuez le paiement en toute sécurité par carte bancaire, et faites livrer vos articles à l'adresse Speedup.`,
          checks: [
            'Envoyez nous les informations des articles via WhatsApp',
            "SpeedUp se charge de l'expédition dès réception des colis"
          ],
          whatsappNumber: '33612780876'
        },
        {
          image: '.././assets/image3.jpg',
          title: 'Sama kura',
          description: `SpeedUp facilite l'expédition de vos colis - nous nous occupons de tout, du dédouanement à la livraison à Bamako. Profitez d'un service clé en main fiable et efficace pour importer en toute tranquillité.`,
          checks: [
            'Contactez-nous sur WhatsApp',
            'Confiez-nous votre colis',
            "SpeedUp se charge de l'expédition dès réception des colis"
          ],
          whatsappNumber: '33612780876'
        },
        {
          image: '.././assets/image4.jpg',
          title: 'Business',
          description: `Vous êtes une PME ou une grande entreprise et vous souhaitez effectuer des achats à l'étranger ? \nSpeedup est là pour répondre à vos besoins spécifiques en matière d'achats et d'expéditions personnalisés.`,
          checks: [
            "Contactez-nous sur WhatsApp pour plus d'informations"
          ],
          whatsappNumber: '33612780876'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.service {
  width: 24%;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  border-top: 1px;
  margin-left: 15px;
  margin-right: 15px;

}

.service-image {
  width: 100%;
  height: auto;
}

.service-title {
  font-size: 18px;
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
  margin-bottom: 20px;
  text-align: left;
  max-width: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  white-space: pre-wrap;
  line-height: 1.6;
}

.service-check {
  margin-bottom: 10px;
  font-size: small;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}

.service-check-text {
  font-size: small;
  display: inline-block;
  line-height: 1.8;
}

.service-check-icon {
  color: #C6A732;
  display: inline-block;
}

.service-link {
  display: inline-block;
  color: #C6A732;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: right;
}
</style>

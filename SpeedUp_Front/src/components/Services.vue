<template>
  <div class="services">
    <div v-for="(service, index) in services" :key="index" class="service">
      <img :src="service.image" alt="Service Image" class="service-image">
      <h3 class="service-title">{{ service.title }}</h3>
      <hr class="service-separator">
      <p class="service-description">{{ service.description }}</p>
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
          title: 'Service 1',
          description: 'Description du service 1',
          whatsappNumber: '1234567890'
        },
        {
          image: '.././assets/image2.jpg',
          title: 'Service 2',
          description: 'Description du service 2',
          whatsappNumber: '1234567890'
        },
        {
          image: '.././assets/image3.jpg',
          title: 'Service 3',
          description: 'Description du service 3',
          whatsappNumber: '1234567890'
        },
        {
          image: '.././assets/image4.jpg',
          title: 'Service 4',
          description: 'Description du service 4',
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
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
}

.service-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
}

.service-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-separator {
  border: none;
  border-top: 1px solid #ccc;
  margin-bottom: 10px;
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
}
</style>

<template>
  <div class="carousel">
    <div class="carousel-page" v-for="(page, index) in pages" :key="index" :class="{ active: index === currentPage }">
      <h1 class="page-title">{{ page.title }}</h1>
      <router-link to="/AboutUs" class="carousel-btn">En savoir plus</router-link>
    </div>

    <div class="carousel-navigation">
      <div class="carousel-indicators">
        <div v-for="(page, index) in pages" :key="index" :class="{ active: index === currentPage }" class="indicator" @click="goTopage(index)"></div>
      </div>
    </div>

      <div class="carousel-control-previous control-left" @click="previousPage"><i class="fas fa-chevron-left"></i></div>
      <div class="carousel-control-next control-right" @click="nextPage"><i class="fas fa-chevron-right"></i></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 0, // Indice de la page courante
      pages: [
        {
          title: 'Livraison rapide pour des achats sans attente !',
          description: 'achats sans attente !'
        },
        {
          title: "Acheter à l'international avec SpeedUp",
          description: 'Description de la page 2'
        },
        {
          title: '" SpeedUp fo aw ka sô "',
          description: 'Description de la page 3'
        }
      ]
    }
  },
  created () {
    this.startCarousel()
  },
  methods: {
    startCarousel () {
      setInterval(() => {
        this.nextPage()
      }, 4000)
    },
    previousPage () {
      this.currentPage = (this.currentPage - 1 + this.pages.length) % this.pages.length
    },
    nextPage () {
      this.currentPage = (this.currentPage + 1) % this.pages.length
    },
    goTopage (index) {
      this.currentPage = index
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel-page {
  background-color: #C6A732;
  color: white;
  padding-top: 20px;
  text-align: center;
  display: none;
  height: 500px;
  width: 100%;
  position: relative;
}

.carousel-page.active {
  display: block;
}

.page-title{
  margin-top: 250px;
  width: 390px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
.carousel-btn {
  background-color: #C6A732;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 50px;
}

.carousel-btn:hover {
  background-color: #B39429;
}

.carousel-navigation {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-control-previous {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: left;
  align-items: center;
}
.carousel-control-next {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: right;
  align-items: center;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.indicator {
  width: 30px;
  height: 9px;
  border-radius: 50px;
  background-color: white;
  opacity: 0.6;
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  opacity: 1;
}

.carousel-controls {
  display: flex;
  justify-content: left;
  align-items: left;
}

.control-left {
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 50px 5px;
  margin-bottom: 200px;
}
.control-right {
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  margin: 50px 5px;
  margin-left: auto;
  margin-bottom: 200px;
}

.control-left:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.control-left i {
  font-size: 14px;
}

.control-right:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.control-right i {
  font-size: 14px;
}
</style>

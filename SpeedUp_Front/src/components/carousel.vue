<template>
  <div class="carousel">
    <div class="carousel-page" v-for="(page, index) in pages" :key="index" :class="{ active: index === currentPage }">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <router-link to="/AboutUs" class="btn">En savoir plus</router-link>
    </div>

    <div class="carousel-navigation">
      <div class="carousel-indicators">
        <div v-for="(page, index) in pages" :key="index" :class="{ active: index === currentPage }" class="indicator"></div>
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
          title: 'Page 1',
          description: 'Description de la page 1'
        },
        {
          title: 'Page 2',
          description: 'Description de la page 2'
        },
        {
          title: 'Page 3',
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
  padding: 20px;
  text-align: center;
  display: none;
}

.carousel-page.active {
  display: block;
}

.btn {
  background-color: #C6A732;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

.btn:hover {
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
  width: 10px;
  height: 10px;
  border-radius: 50%;
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

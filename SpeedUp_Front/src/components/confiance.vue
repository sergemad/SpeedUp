<template>
  <div>
      <h1 class="title">Faites nous confiance</h1>
      <hr class="title-separator">
      <div class="confiance">
        <div class="upper-section"></div>
        <div class="separation"></div>
        <div class="confiance-container">
          <div class="image-container">
            <img src=".././assets/conf.jpg" alt="Image">
          </div>
          <p class="description">Description de l'image</p>
        </div>
        <div class="lower-section"></div>
      </div>
  </div>
</template>

<style scoped>
.confiance {
  position: relative;
  height: 70vh; /* Ajustez la hauteur selon vos besoins */
  overflow: hidden;
}

.upper-section,
.lower-section {
  height: 50%;
}

.upper-section {
  background-color: white; /* Couleur de la partie supérieure */
  height: 50%;
}

.lower-section {
  background-color: #C6A732; /* Couleur de la partie inférieure */
  border-top-right-radius: 1ch;
  height: 50%;
}

.confiance-container {
  display: flex;
  justify-content: space-between;
}
.image-container {
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(-30%, -30%);
  z-index: 1;
}

img {
  width: 400px;
  height: auto;
}

.description {
  position: absolute;
  bottom: 20px;
  left: 65%;
  top: 20%;
  transform: translateX(-50%);
  text-align: center;
  color: black;
}

.separation {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: skewX(-83deg);
  background-color: white; /* Couleur de la séparation */
}
</style>

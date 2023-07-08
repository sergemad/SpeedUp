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
          <div class="description">
            <p class="description-title">Une solution à tous vos problèmes</p>
            <span class="desc-check-text"> <i class="fas fa-check desc-check-icon"></i>  Choisissez l'offre adaptée à vos besoins et contactez-nous sur WhatsApp</span>
            <span class="desc-check-text"> <i class="fas fa-check desc-check-icon"></i>  Nous traitons vos commandes dès validation de votre facture</span>
            <span class="desc-check-text"> <i class="fas fa-check desc-check-icon"></i>    Recevez vos commandes en seulement 5 jours ouvrés après réception de vos colis chez nous</span>
          </div>
        </div>
        <div class="lower-section"></div>
      </div>
  </div>
</template>

<style scoped>
.confiance {
  position: relative;
  height: 400px; /* Ajustez la hauteur selon vos besoins */
  overflow: hidden;
}

.upper-section,
.lower-section {
  height: 50%;
}

.upper-section {
  background-color: white; /* Couleur de la partie supérieure */
  height: 20%;
}

.lower-section {
  background-color: #C6A732; /* Couleur de la partie inférieure */
  border-top-right-radius: 1ch;
  height: 80%;
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
  left: 72%;
  top: 10px;
  transform: translateX(-50%);
  right: -100px;
}
.description-title {
  bottom: 20px;
  color: black;
  font-weight: bold;
  font-size: xx-large;
}

.separation {
  position: absolute;
  top: -100px;
  width: 200%;
  height: 100%;
  transform: skewX(70deg);
  background-color: white; /* Couleur de la séparation */
}

.desc-check-text {
  font-size: medium;
  display: inline-block;
  line-height: 1.8;
  font-weight: bold;
}

.desc-check-icon {
  color: #007B4C;
  display: inline-block;
}
</style>

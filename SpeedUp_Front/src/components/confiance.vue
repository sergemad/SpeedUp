<template>
  <div class="division">
    <div class="left-side">
      <img src=".././assets/conf.jpg" alt="Image">
      <p class="description">Description de gauche</p>
    </div>
    <div class="right-side">
      <p class="description">Description de droite</p>
    </div>
  </div>
</template>

<style scoped>
.division {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.left-side,
.right-side {
  flex: 1;
  position: relative;
  height: 100vh; /* Ajustez la hauteur selon vos besoins */
}

.left-side {
  background-color: #C6A732; /* Couleur du côté gauche */
  z-index: 1;
}

.right-side {
  background-color: white; /* Couleur du côté droit */
  z-index: 2;
}

.description {
  text-align: center;
  color: white; /* Couleur du texte */
  padding: 20px;
}

.left-side:before,
.right-side:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200%; /* Ajustez la largeur selon vos besoins */
  background-color: white; /* Couleur de la ligne oblique */
  transform: skewX(-45deg); /* Angle de la ligne oblique */
}

.left-side:before {
  right: 0;
  transform-origin: bottom right;
}

.right-side:before {
  left: 0;
  transform-origin: bottom left;
}
</style>


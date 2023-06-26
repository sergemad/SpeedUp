<template>
    <div>
        <h1 class="title">Tarifs</h1>
        <hr class="title-separator">
        <p class="title-description">Effectuez vos <span class="title-green">achats</span> avec Orange Money, Western Union, Ria, Paypal ou par virement bancaire.</p>
        <div class="tarifs">
            <table class="table table1">
              <tr v-for="(row, index) in table1" :key="index" :class="{ 'first-row': index === 0,'second-row1': index === 1}">
                <td>{{ row }}</td>
              </tr>
              <tr class="last-row">
                <td colspan="2">
                    <router-link class="devis-button" to="/Devis">Demander un devis</router-link>
                </td>
              </tr>
            </table>

            <table class="table table2">
              <tr v-for="(row, index) in table2" :key="index" :class="{ 'first-row': index === 0,'second-row': index === 1}">
                <td>{{ row }}</td>
              </tr>
              <tr class="last-row">
                <td colspan="2">
                    <router-link class="devis-button" to="/Devis">Demander un devis</router-link>
                </td>
              </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      table1: [
        'Aérien France',
        `8000 FCFA\n/ KG`,
        'Transport aérien',
        'Livraison à domicile',
        'Dédouanement pris en charge'
      ],
      table2: [
        "Speed'Assurance",
        'Montant calculé en fonction de la valeur du colis !​'
      ]
    }
  }
}
</script>

<style scoped>
.tarifs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 60px;
}

.table {
  width: 30%; /* Ajustez la largeur du tableau principal */
  text-align: center;
}

.table.table1 {
  height: 200px; /* Ajustez la largeur spécifique du tableau 1 */
  margin-left: auto;
  margin-right: 20px;
}

.table.table2 {
  height: 100px;/* Ajustez la largeur spécifique du tableau 2 */
  margin-right: auto;
  margin-left: 20px;
}

.table tr {
  background-color: white;
  height: 40px;
  color: black;
}

.table tr.first-row{
  background-color: #C6A732;
  color: black;
  font-size: xx-large;
  font-weight: bold;
}

.table tr.last-row {
  background-color: #C6A732;
  color: white;
}

.table tr.second-row1 {
    background-color: #f1ead3;
    font-size: xx-large;
    color: black;
    font-weight: bold;
    height: 100px;
}

.table tr.second-row {
    background-color: #f1ead3;
    font-size: large;
    color: black;
    font-weight: bold;
    height: 80px;
}

.devis-button {
  background-color: #C6A732;
  font-size: medium;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1.50px solid white;
  cursor: pointer;
  text-decoration: none;
}
</style>

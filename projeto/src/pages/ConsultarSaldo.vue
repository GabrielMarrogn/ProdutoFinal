<template>
    <q-page class="fixed-center">
        <div v-if="produto == 'top'" id="vamola">
          <img id="fluxologo1"  src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter2">CONSULTANDO SALDO</h3>
        </div>

        <div v-if="produto == 'bilhete'" id="vamola">
          <img id="fluxologo1"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter2">CONSULTANDO SALDO</h3>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-quadro-giratório-5-90.png"/>
        </div>

        <q-btn to="/servicos" class="fixed-bottom">avancar</q-btn>

    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { AppStore } from 'src/stores/AppStore';
  
  
  export default defineComponent({
    name: 'ConsultarSaldo',
    data(){
      return{
        produto: ""
      }
    },
    created (){
      this.produto = AppStore.produto
    }, 
  })
  </script>
  
  <style>
#textCenter2{
  font-size: 40px;
  font-style: bold; 
  position: absolute;
  margin-left: 34%;
  width: 96%;

}
#fluxologo1{
  width: 5%;
  height: 5%;
  margin-left: 1%;
  float: left;
  position: relative;
 
} 
  .img{
  height: 40%;
  width: 50%;
}
  .q-page{
  width: 96%;
}
  #text{
  text-align: center;
  font-size: 40px;
  font-style: bold; 
  margin-right: 5%;

}
  </style>
<template>
    <q-page class="absolute-center">
        <div v-if="produto == 'top'" >
          <img id="fluxologo"  src="../assets/logo_top_preto.png"/>
        <h3 id="textCenter">CONSULTANDO SALDO</h3>
        </div>

        <div v-if="produto == 'bilhete'">
          <img id="fluxologo"  src="../assets/Bilhete_Unico-logo.png"/>
        <h3 id="textCenter">CONSULTANDO SALDO</h3>
        </div>

        <div class="fixed-center">
         <img src="../assets/icons8-quadro-giratório-5-90.png"/>
        </div>

        <q-btn to="/servicos">avancar</q-btn>

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
  #textCenter{
  text-align: center;
  font-size: 40px;
  font-style: bold;
  margin-right: 8%; 
}
  #fluxologo{
  width: 5%;
  height: 5%;
  float: left;
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